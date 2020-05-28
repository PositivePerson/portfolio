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

      // var tlNavbar = new TimelineMax({onUpdate:updatePercentage});
      // const controllerNavbar = new ScrollMagic.Controller();

      // const sceneNavbar = new ScrollMagic.Scene()

      // if( sceneNavbar.scrollOffset() )

      // function updatePercentage() {
      //   tlNavbar.progress();
      //   console.log(tlNavbar.progress());
      // }



      //          navbar showing
      $(function () {
        $(document).scroll(function () {
            var $nav = $("#navbar");
            // $nav.toggleClass("notscrolled", $(this).scrollTop() <= $nav.height());
            if( $(this).scrollTop() <= $nav.height() ){

              $nav.addClass("notscrolled").removeClass("scrolled");

              // if($nav.hasClass("scrolled")){
              //   $nav.removeClass("scrolled");
              // }

              // if($nav.hasClass("scrolledLower")){
              //   $nav.removeClass("scrolledLower");
              // }

            } else {

              $nav.addClass("scrolled").removeClass("notscrolled");

            }
        });
      });

      // $(function () {
      //   let position = window.pageYOffset;
      //   console.log("Position is: " + position)
      //   $("#navbar").toggleClass("scrolledLower", position > 500);
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
