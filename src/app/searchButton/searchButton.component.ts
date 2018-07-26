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

  saveData() {
    console.log('in save data!')

    var form = $("#idFormtoemail");
    //still need to restrict submit by valid email
    var inputemail = $("#idInputToEmail")[0].value;
    var userStartDate = $("#startDate").text();
    var userEndDate = $("#endDate").text();

    var result = {
      inputemail,
      userStartDate,
      userEndDate,
    }
    alert(
      `Searching email ${inputemail}\n` +
      `Start date: ${userStartDate}\n` +
      `End date: ${userEndDate}\n` +
      `JSON: ${JSON.stringify(result,null,2)}`
    );

  }
}
