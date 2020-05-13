import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      //navbar showing
      $(function () {
        $(document).scroll(function () {
            var $nav = $("#navbar");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
      });

      //click 'About me'
      $("#goToMainWelcome").click(function() {
        console.log("clicked goToMainWelcome");
        $('html, body').animate({scrollTop: 0}, 500);
      });
  }

}
