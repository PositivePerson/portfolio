import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

import { Observable } from "intersection-observer";

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //                  navigation - color
    var firstExecution = true;
    const subPage = document.querySelector("#secondSection");
    const observer = new IntersectionObserver((entries) => {

      console.log(entries);
      console.log(entries[0].intersectionRatio);

      if(entries[0].intersectionRatio > 0) {
        $("#navbar").addClass("scrolled").removeClass("scrolledLower");
      }
      else if(entries[0].intersectionRatio <= 0 && !firstExecution) {
        $("#navbar").addClass("scrolledLower").removeClass("scrolled");
      }
      else {
        // console.log(" 'firstExecution' is " + firstExecution);
        firstExecution = false;
      }
    })
    observer.observe(subPage);


    //                     animation
    var tlAbout = new TimelineMax({onUpdate:updatePercentage});
    const controller = new ScrollMagic.Controller();

    tlAbout.from("#profilePNG", 1, {x:-100, opacity: 0, ease: Power4.easeInOut}, "=-.8");
    tlAbout.to("#profilePNG", 1, {x:0 , opacity: 1});

    tlAbout.from("#firstDesc", 1, {x:300, opacity: 0, ease: Power4.easeInOut}, "=-1.8");
    tlAbout.to("#firstDesc", 1, {x:0 , opacity: 1, ease: Power4.easeInOut});

    tlAbout.from("#secondDesc", 1, {x:-180, opacity: 0,ease: Power4.easeInOut}, "=-2.35");
    tlAbout.to("#secondDesc", 1, {x:0 , opacity: 1});

    tlAbout.from("#nextPage i", 1, {opacity: 0}, "=-2");
    tlAbout.to("#nextPage i", 1, {opacity: 1});

    const scene1 = new ScrollMagic.Scene({
      triggerElement: "#secondSection",
      // triggerHook: "onEnter",
      // duration: "100%",
      offset: "0"
    })
      // .setPin("#secondSection")
      .setTween(tlAbout)
        .addTo(controller);

    function updatePercentage() {
      tlAbout.progress();
    }


    //         scroll to the next section
    $("#nextPage").one('mouseover', function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("app-projects").offset().top
      }, 1100, "swing");

      $("#navbar").addClass("scrolledLower").removeClass("scrolled");

      $(this).fadeTo(850, 0);
    });

  }

}
