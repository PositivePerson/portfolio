import { Component, OnInit, AfterViewInit, QueryList, ElementRef, ViewChildren } from '@angular/core';

import { Certificate } from '../certificatesData/certificate-template';
import { CertificateService } from './certificate.service';

import * as $ from 'jquery';

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

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
    var tlCertificate = new TimelineMax({onUpdate:updatePercentage});
    const controller = new ScrollMagic.Controller();


    console.log( "certificatesElements: ", this.certificatesElements );
    console.log( "certificatesArray: ", certificatesArray );

    certificatesArray.forEach((cert) => {
        console.log("cert.nativeElement.attributes.id.nodeValue", cert.nativeElement.attributes.id.nodeValue);

        tlCertificate.from(`#${cert.nativeElement.attributes.id.nodeValue}`, 1, {x:-200, opacity: 0});

        var scene3 = new ScrollMagic.Scene({
          triggerElement: `#${cert.nativeElement.attributes.id.nodeValue}`,
          triggerHook: 0.1,
          duration: "100%",
          // offset: "-20%"
        })
          // .setPin("#certificatesSection")
          .setTween(tlCertificate)
            .addTo(controller);
    })

    certificatesArray.forEach((cert) => {
        console.log("cert.nativeElement.attributes.id.nodeValue", cert.nativeElement.attributes.id.nodeValue);

        tlCertificate.to(`#${cert.nativeElement.attributes.id.nodeValue}`, 1, {x:-200, opacity: 0});

        var scene3 = new ScrollMagic.Scene({
          triggerElement: `#${cert.nativeElement.attributes.id.nodeValue}`,
          triggerHook: 1,
          duration: "80%",
          offset: "-20%"
        })
          // .setPin("#certificatesSection")
          .setTween(tlCertificate)
            .addTo(controller);
    })

    function updatePercentage() {
      tlCertificate.progress();
      console.log(tlCertificate.progress());
    }
  }


}
