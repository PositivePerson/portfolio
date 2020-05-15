import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

// import { gsap, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";
// import gsap from "../../../node_modules/gsap/types";
// import ScrollMagic from "../../../node_modules/ScrollMagic";

// import {gsap} from "gsap";
// import ScrollMagic from "scrollmagic";

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    // const scroll = new LocomotiveScroll();

    $(".specificProjectDescription, .projectInfo").mouseover(function() {
      $(".projectInfo").addClass("turnArrowUp");
    }).mouseout(function() {
      $(".projectInfo").removeClass("turnArrowUp");
    });


    var tl = new TimelineMax({onUpdate:updatePercentage});
    var tl2 = new TimelineMax();
    const controller = new ScrollMagic.Controller();

    tl.from('blockquote', .5, {x:200, opacity: 0});
    tl.from('#spann', 1, { width: 0}, "=-.5");
    tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
    tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

    tl2.from("#box", 1, {opacity: 0, scale: 0});
    tl2.to("#box", .5, {left: "20%", scale: 1.3})

    const scene = new ScrollMagic.Scene({
      triggerElement: ".sticky",
                triggerHook: "onLeave",
                duration: "100%"
    })
      .setPin(".sticky")
      .setTween(tl)
    		.addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: "blockquote"
    })
      .setTween(tl2)
    		.addTo(controller);


    function updatePercentage() {
      //percent.innerHTML = (tl.progress() *100 ).toFixed();
      tl.progress();
      console.log(tl.progress());
    }
  }


}
