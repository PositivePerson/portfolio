import { Component, OnInit } from '@angular/core';

import { Project } from '../projectsData/project-template';
import { PROJECTS } from '../projectsData/projects';

import * as $ from 'jquery';

// import { gsap, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";
// import gsap from "../../../node_modules/gsap/types";
// import ScrollMagic from "../../../node_modules/ScrollMagic";

// import {gsap} from "gsap";
// import ScrollMagic from "scrollmagic";

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { ProjectService } from '../project.service';


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor( projectService: ProjectService) {
    this.projects = projectService.getProjects();
   }



  ngOnInit(): void {
    // const scroll = new LocomotiveScroll();

    $(".specificProjectDescription, .projectInfo").mouseover(function() {
      $(".projectInfo").addClass("turnArrowUp");
    }).mouseout(function() {
      $(".projectInfo").removeClass("turnArrowUp");
    });

    //------------------------------------
    //            animation
    var tl = new TimelineMax({onUpdate:updatePercentage});
    const controller = new ScrollMagic.Controller();

    tl.from(".projectHr", .5, {x:500, opacity: 0.3});

    const scene = new ScrollMagic.Scene({
      triggerElement: ".sticky",
                triggerHook: "onLeave",
                duration: "100%"
    })
      .setPin("sticky")
      .setTween(tl)
        .addTo(controller);

    function updatePercentage() {
      tl.progress();
      console.log(tl.progress());
    }
  }


}
