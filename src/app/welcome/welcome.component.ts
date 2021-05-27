import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //scroll block
    // $('body').addClass('stop-scrolling');



    // $(".nav-link").hover(function () {
    //   if (!$("#navbar").hasClass("scrolled")) {
    //     $("#firstWelcomeLine #mainWelcome").addClass("BiggerIcon");
    //     if ($(this).text() === "Work") {
    //       $("#firstWelcomeLine #mainWelcome").html("<i class='fas fa-window-maximize'></i>");
    //     }
    //     else if ($(this).text() === "Courses") {
    //       $("#firstWelcomeLine #mainWelcome").html("<i class='fas fa-book'></i>");
    //     }
    //     else if ($(this).text() === "Github") {
    //       $("#firstWelcomeLine #mainWelcome").html("<i class='fab fa-github-alt'></i>");
    //     } else {
    //       $("#firstWelcomeLine #mainWelcome").html("<i class='far fa-surprise'></i>");
    //     }
    //     $("#secondWelcomeLine #mainWelcome").hide();
    //   };
    // }, function () {
    //   $("#firstWelcomeLine #mainWelcome").removeClass("BiggerIcon");
    //   $("#firstWelcomeLine #mainWelcome").html("Hey I am Bartek");
    //   $("#secondWelcomeLine #mainWelcome").show();
    // });

    $("button").mouseover(() => {
      $("#firstWelcomeLine").css("background-position", "-100% 0");
      $("#secondWelcomeLine").css("background-position", "100% 0");
    }).mouseout(() => {
      $("#firstWelcomeLine").css("background-position", "0 0");
      $("#secondWelcomeLine").css("background-position", "0 0");
    })

    //Click "Hi..."
    $("[id=mainWelcome]").click(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#secondSection").offset().top
      }, 600);

      $('body').removeClass('stop-scrolling');
    });

  }

}
