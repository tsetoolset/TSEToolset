import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-navBar',
  // note that backticks are needed to be able to breakup text
  // across multiline in ts
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("[data-menu-underline-from-center] a").addClass("underline-from-center");
  }

}
