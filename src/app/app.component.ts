import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() {}
  
  ngOnInit() {
    $(document).foundation();
  }

  onSubmit() {
    console.log("wow")
  }
}