import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-toEmail',
  // note that backticks are needed to be able to breakup text
  // across multiline in ts
  templateUrl: './toEmail.component.html',
  styleUrls: ['./toEmail.component.css']
})
export class ToEmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

}
