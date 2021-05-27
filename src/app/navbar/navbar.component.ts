import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      // //          navbar showing
      $("#navbar").addClass("scrolled").removeClass("notscrolled");
      // $(function () {
      //   $(document).scroll(function () {
      //       var $nav = $("#navbar");
      //       if( $(this).scrollTop() <= $nav.height() ){

      //         $nav.addClass("notscrolled").removeClass("scrolled");

      //       } else {

      //         $nav.addClass("scrolled").removeClass("notscrolled");

      //       }
      //   });
      // });

      //click 'About me'
      $("#goToMainWelcome").click(function() {
        console.log("clicked goToMainWelcome");
        $('html, body').animate({scrollTop: 0}, 500);
        $("#navbar").addClass("scrolled").removeClass("scrolledLower");
      });

      //smooth scroll when moving to another section by 'href'
      $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          700,
          'swing'
        )
      })

  }
}
