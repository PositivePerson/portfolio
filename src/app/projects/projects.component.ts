import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit, ViewEncapsulation, HostBinding } from '@angular/core';

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
import { ProjectService } from './project.service';

import {MatSnackBar} from '@angular/material/snack-bar';
import { ToolsSnackBarComponent } from './tools-snack-bar/tools-snack-bar.component';


// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[];
  durationInSeconds = -1;
  private projectObserver: IntersectionObserver;

  constructor( projectService: ProjectService, private _snackBar: MatSnackBar) {
    this.projects = projectService.getProjects();
   }

   openSnackBar( idOfProject ) {
     this._snackBar.openFromComponent(ToolsSnackBarComponent, {
       duration: this.durationInSeconds * 1000,
      //  horizontalPosition: "center",
      //  verticalPosition: "top",
      panelClass: ['style-snackbar'],
       data: this.projects[ idOfProject -1].tools,
      });
      // console.log("it is " + idOfProject + " project in a row");
      console.log( "just passed: " , this.projects[ idOfProject -1].tools , "to the next snackbar");
  }

  @ViewChildren('animatedElement' )  animatedElements: QueryList<ElementRef>;
  // @ViewChildren('animatedElement' )  animatedElements: ElementRef;

  ngOnInit(): void {

    // //------------------------------------
    // //            controlled animation
    // var tl = new TimelineMax({onUpdate:updatePercentage});
    // const controller = new ScrollMagic.Controller();

    // tl.from(".projectHr", .5, {x:500, opacity: 0.3});

    // const scene2 = new ScrollMagic.Scene({
    //   triggerElement: ".sticky",
    //             triggerHook: "onLeave",
    //             duration: "100%"
    // })
    //   // .setPin(".sticky")
    //   .setTween(tl)
    //     .addTo(controller);

    // function updatePercentage() {
    //   tl.progress();
    //   // console.log(tl.progress());
    // }




  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    $(".specificProjectDescription, .projectInfo").mouseover(function() {
      $(".projectInfo").addClass("turnArrowUp");
    }).mouseout(function() {
      $(".projectInfo").removeClass("turnArrowUp");
    });

    // this.animatedElements.changes.subscribe(c => {
    //   this.animatedElements.toArray().forEach((item) => {
    //   console.log(item);
    //   });
    // });

    // console.log("animatedElements: " + Array.from(this.animatedElements));
    // this.animatedElements.forEach((directive, index) => { console.log(index); console.log(directive); })


    //------------------------------------
    //            uncontrolled animation
    // const projectPageElements = document.querySelectorAll('.anim');
    const projectPageElements = this.animatedElements.toArray();

    // console.log("projectPageElements ", projectPageElements);
    // console.log("type of .nativeElement from this array above: ", typeof projectPageElements[0].nativeElement);

        this.projectObserver = new IntersectionObserver((entries) => {

          // console.log("intersectionRatio is: " + entries[0].intersectionRatio);

            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                  // console.log( typeof entry.target );
                  // console.log( entry.target );

                    //@ts-ignore
                    entry.target.style.animation = `anim${entry.target.dataset.animation} 2s ${entry.target.dataset.delay} forwards ease-out`;
                    // console.log("indeed intersectionRatio is: " + entry.intersectionRatio);
                  }
                else {
                    //@ts-ignore
                    entry.target.style.animation = 'none';
                }
            })

        })

        projectPageElements.forEach((element) => {
          this.projectObserver.observe(element.nativeElement as HTMLInputElement);
        })



  }


}
