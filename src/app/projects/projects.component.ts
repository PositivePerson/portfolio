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

import { MatSnackBar } from '@angular/material/snack-bar';
import { ToolsSnackBarComponent } from './tools-snack-bar/tools-snack-bar.component';


// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[];
  durationInSeconds = 2.5;
  // durationInSeconds = 2500;
  private projectObserver: IntersectionObserver;

  constructor(projectService: ProjectService, private _snackBar: MatSnackBar) {
    this.projects = projectService.getProjects();
  }

  openSnackBar(idOfProject) {
    this._snackBar.openFromComponent(ToolsSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      //  horizontalPosition: "center",
      //  verticalPosition: "top",
      panelClass: ['snackbar-background'],
      data: this.projects[idOfProject - 1].tools,
    });
    console.log("just passed: ", this.projects[idOfProject - 1].tools, "to the next snackbar");
  }

  @ViewChildren('animatedElement') animatedElements: QueryList<ElementRef>;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

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

    // $(".specificProjectDescription, .projectInfo").mouseover(function() {
    //   $(".projectInfo").addClass("turnArrowUp");
    // }).mouseout(function() {
    //   $(".projectInfo").removeClass("turnArrowUp");
    // });



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
    const arrayOfImgs = this.imgs.toArray();

    this.projectObserver = new IntersectionObserver((entries) => {

      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          //@ts-ignore
          entry.target.style.animation = `anim${entry.target.dataset.animation} .8s ${entry.target.dataset.delay} forwards ease-out`;
          // console.log("indeed intersectionRatio is: " + entry.intersectionRatio);
        }
        // ⬇⬇⬇ if ON, animation will repeat every time when on screen ⬇⬇⬇
        // else {
        //   //@ts-ignore
        //   entry.target.style.animation = 'none';
        // }
      })

    })

    projectPageElements.forEach((element) => {
      this.projectObserver.observe(element.nativeElement as HTMLInputElement);
    })

    arrayOfImgs.forEach(element => {
      // console.log(element.nativeElement.attributes[1].nodeValue);
      element.nativeElement.parentElement.parentElement.parentElement.parentElement.style.background = `
      linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
      url(${element.nativeElement.attributes[1].nodeValue}) no-repeat center center `;
      element.nativeElement.parentElement.parentElement.parentElement.parentElement.style['background-size'] = `cover`;
      element.nativeElement.parentElement.parentElement.parentElement.style['backdrop-filter'] = `blur(15px)`;
      // console.log(element.nativeElement.attributes[1]);
    })



  }


}
