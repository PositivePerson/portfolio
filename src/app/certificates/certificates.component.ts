import { Component, OnInit, AfterViewInit, QueryList, ElementRef, ViewChildren } from '@angular/core';

import { Certificate } from '../certificatesData/certificate-template';
import { CertificateService } from './certificate.service';

import * as $ from 'jquery';

// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
// import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";


// declare var ScrollMagic: any;
import MotionPathPlugin from "gsap";
import TextPlugin from "gsap";

import { TweenLite, TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";



import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';

// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

// declare var ScrollMagic: any;

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit, AfterViewInit {
  certificates: Certificate[];

  private certObserver: IntersectionObserver;

  constructor( certificateService: CertificateService) {
    this.certificates = certificateService.getCertificates();
   }

   @ViewChildren('certificate' )  certificatesElements: QueryList<ElementRef>;

  ngOnInit(): void {
    console.log("certificates: ", this.certificates);

    gsap.registerPlugin(MotionPathPlugin, TextPlugin);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    var certificatesArray = this.certificatesElements.toArray();

    //                     animation
    let controller = new ScrollMagic.Controller();

    console.log( "certificatesElements: ", this.certificatesElements );
    console.log( "certificatesArray: ", certificatesArray );

    certificatesArray.forEach((cert) => {
        var tlCertificate = new TimelineMax();

        console.log("cert.nativeElement.attributes.id.nodeValue", cert.nativeElement.attributes.id.nodeValue);

        tlCertificate.from(`#${cert.nativeElement.attributes.id.nodeValue}`, 0.25, {x:-200, opacity: 0})
                     .to(`#${cert.nativeElement.attributes.id.nodeValue}`, 0.25, {x:-200, opacity: 0}, 2);

        console.log("cert.nativeElement: ", cert.nativeElement);

        var certScene3 = new ScrollMagic.Scene({
          triggerElement: `#${cert.nativeElement.attributes.id.nodeValue}`,
          triggerHook: 0.98,
          duration: "100%",
          // offset: "-20%"
        })
          // .setPin("#certificatesSection")
          .setTween(tlCertificate)
          .addIndicators({
            colorTrigger: "white",
            indent: 100,
            colorStart: "pink",
            colorEnd: "#42f5e3"
          })
            .addTo(controller);
          // function updatePercentage() {
          //   tlCertificate.progress();
          //   console.log(tlCertificate.progress());
          // }
    })


    //       change background-color & nav-color  on scroll
    var firstExecution = true;
    this.certObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

          if(entry.isIntersecting){
            console.log("YES IT IS: ", entry.intersectionRatio);
            $("html").addClass("darkMode");
            $("#navbar").addClass("scrolled").removeClass("scrolledLower");
          }
          else if(!entry.isIntersecting && !firstExecution) {
            $("html").removeClass("darkMode");
            $("#navbar").addClass("scrolledLower").removeClass("scrolled");
          }
          else {
            firstExecution = false;
          }

      })
    })

    this.certObserver.observe( document.querySelector("#certificatesSection") as HTMLElement);
    // console.log("document.querySelector('#certificatesSection')", document.querySelector("#certificatesSection"));
  }


}
