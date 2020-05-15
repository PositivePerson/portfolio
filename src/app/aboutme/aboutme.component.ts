import { Component, OnInit } from '@angular/core';

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var tlAbout = new TimelineMax({onUpdate:updatePercentage});
    // var tlAbout = new TimelineMax();
    const controller = new ScrollMagic.Controller();

    tlAbout.from("img", 1, {x:-100, opacity: 0.1, ease: Power4.easeInOut}, "=-.8");
    tlAbout.to("img", 1, {x:0 , opacity: 1});

    tlAbout.from("#firstDesc", 1, {x:300, opacity: 0.1, ease: Power4.easeInOut}, "=-1.8");
    tlAbout.to("#firstDesc", 1, {x:0 , opacity: 1, ease: Power4.easeInOut});

    tlAbout.from("#secondDesc", 1, {x:-180, opacity: 0,ease: Power4.easeInOut}, "=-2.35");
    tlAbout.to("#secondDesc", 1, {x:0 , opacity: 1});

    const scene = new ScrollMagic.Scene({
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

  }

}
