import { Component, Inject, OnInit, Injectable } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tools-snack-bar',
  templateUrl: './tools-snack-bar.component.html',
  styleUrls: ['./tools-snack-bar.component.scss']
})
export class ToolsSnackBarComponent implements OnInit {
  toolsInSnackBar = [];

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.toolsInSnackBar = data;
  }

  ngOnInit(): void {
    console.log("snackBar received: " + this.toolsInSnackBar);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.


  }

}
