import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-searchButton',
  // note that backticks are needed to be able to breakup text
  // across multiline in ts
  templateUrl: './searchButton.component.html',
  styleUrls: ['./searchButton.component.css']
})
export class SearchButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
