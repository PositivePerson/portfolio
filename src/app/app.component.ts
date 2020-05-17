import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");


    // function handler(entries, observer) {
    //   for (var entry of entries) {
    //     console.log(entry);

    //     $("#navbar").toggleClass("scrolledLower", entry.isIntersecting);

    //   }
    // }

    // var observer = new IntersectionObserver(handler);
    // observer.observe(document.getElementById("#underStartPage"));

  }

  title = 'portfolio';

}
