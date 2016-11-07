import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {
  //declare and initialise a string
  clickMessage: string = "";

  constructor() { }

  //method to handle the button click
  onClickMe() {
    this.clickMessage = "button clicked";
  }

  ngOnInit() {
  }

}
