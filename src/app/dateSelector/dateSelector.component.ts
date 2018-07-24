import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-dateSelector',
  // note that backticks are needed to be able to breakup text
  // across multiline in ts
  templateUrl: './dateSelector.component.html',
  styleUrls: ['./dateSelector.component.css']
})
export class DateSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
        // implementation of custom elements instead of inputs
          var startDate = new Date();
          var endDate = new Date();

          $('#dp4').fdatepicker()
              .on('changeDate', function (ev) {
              if (ev.date.valueOf() > endDate.valueOf()) {
                  $('#alert').show().find('strong').text('Start date can not be greater then the End date!');
              } else {
                  $('#alert').hide();
                  startDate = new Date(ev.date);
                  $('#startDate').text($('#dp4').data('date'));
              }
              $('#dp4').fdatepicker('hide');
          });
          $('#dp5').fdatepicker()
              .on('changeDate', function (ev) {
              if (ev.date.valueOf() < startDate.valueOf()) {
                  $('#alert').show().find('strong').text('End date can not be less then the Start date!');
              } else {
                  $('#alert').hide();
                  endDate = new Date(ev.date);
                  $('#endDate').text($('#dp5').data('date'));
              }
              $('#dp5').fdatepicker('hide');
          });
      });
  }

}
