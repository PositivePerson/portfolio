import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

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

@ViewChildren('[#animatedElement]')  animatedElements: QueryList<ElementRef>;

  ngOnInit(): void {
    // const scroll = new LocomotiveScroll();



    //------------------------------------
    //            controlled animation
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
      // console.log(tl.progress());
    }




  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    $(".specificProjectDescription, .projectInfo").mouseover(function() {
      $(".projectInfo").addClass("turnArrowUp");
    }).mouseout(function() {
      $(".projectInfo").removeClass("turnArrowUp");
    });


    console.log("animatedElements: " + this.animatedElements);

    //------------------------------------
    //            uncontrolled animation
    // const projectPageElements = (document.getElementsByClassName("anim"));
    const projectPageElements = document.querySelectorAll('.anim');

    console.log(projectPageElements);

        var projectObserver = new IntersectionObserver((entries) => {


          console.log("intersectionRatio is: " + entries[0].intersectionRatio);


            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
                    console.log("indeed intersectionRatio is: " + entry.intersectionRatio);
                  }
                else {
                    entry.target.style.animation = 'none';
                }
            })

        })

        projectPageElements.forEach(element => {
          projectObserver.observe(element)
        })



  }


}
