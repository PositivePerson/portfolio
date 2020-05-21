import { Component, OnInit, AfterViewInit } from '@angular/core';

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

  ngOnInit(): void {
    console.log("certificates: ", this.certificates);

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    //                     animation
    var tlCertificate = new TimelineMax({onUpdate:updatePercentage});
    const controller = new ScrollMagic.Controller();

    tlCertificate.from(`#numba1`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba2`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba3`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba4`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba5`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba6`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba7`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba8`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba9`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba10`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba11`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba12`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba13`, 1, {x:-200, opacity: 0}, "=.1");
    tlCertificate.from(`#numba14`, 1, {x:-200, opacity: 0}, "=.1");


    const scene3 = new ScrollMagic.Scene({
      triggerElement: "#certificatesSection",
      triggerHook: 0.8,
      duration: "90%",
      // offset: "-10%"
    })
      // .setPin("#certificatesSection")
      .setTween(tlCertificate)
        .addTo(controller);

    function updatePercentage() {
      tlCertificate.progress();
      console.log(tlCertificate.progress());
    }
  }


}
