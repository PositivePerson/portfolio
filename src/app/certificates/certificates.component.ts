import { Component, OnInit, AfterViewInit, QueryList, ElementRef, ViewChildren } from '@angular/core';

import { Certificate } from '../certificatesData/certificate-template';
import { CertificateService } from './certificate.service';

import * as $ from 'jquery';

// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
// import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

// declare var ScrollMagic: any;

import { TweenLite, TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

// declare var ScrollMagic: any;

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit, AfterViewInit {
  certificates: Certificate[];

  constructor( certificateService: CertificateService) {
    this.certificates = certificateService.getCertificates();
   }

   @ViewChildren('certificate' )  certificatesElements: QueryList<ElementRef>;

  ngOnInit(): void {
    console.log("certificates: ", this.certificates);

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

        tlCertificate.from(`#${cert.nativeElement.attributes.id.nodeValue}`, 1, {x:-200, opacity: 0});

        console.log("cert.nativeElement: ", cert.nativeElement);

        var certScene3 = new ScrollMagic.Scene({
          triggerElement: `#${cert.nativeElement.attributes.id.nodeValue}`,
          triggerHook: 0.9,
          duration: "60%",
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

            function updatePercentage() {
              tlCertificate.progress();
              console.log(tlCertificate.progress());
            }
    })

    // certificatesArray.forEach((cert) => {
    //     console.log("cert: ", cert);
    //     console.log("cert.nativeElement.attributes.id.nodeValue", cert.nativeElement.attributes.id.nodeValue);

    //     tlCertificate.to(`#${cert.nativeElement.attributes.id.nodeValue}`, 1, {x:-200, opacity: 0});

    //     var scene3 = new ScrollMagic.Scene({
    //       // triggerElement: cert.nativeElement,
    //       triggerElement: cert.nativeElement,
    //       triggerHook: 0.9,
    //       duration: "90%",
    //       // offset: "-100%"
    //     })
    //       // .setPin("#certificatesSection")
    //       .setTween(tlCertificate)
    //       .addIndicators({
    //         colorTrigger: "white",
    //         indent: 100,
    //         colorStart: "pink"
    //       })
    //         .addTo(controller);
    // })


  }


}
