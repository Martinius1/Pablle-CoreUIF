import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-add-schedule',
  templateUrl: './config-add-schedule.component.html',
  styleUrls: ['./config-add-schedule.component.scss']
})
export class ConfigAddScheduleComponent implements OnInit {

  showMe:boolean = true
  constructor() { }

  ngOnInit(): void {

  }
  toogleTag()
  {
    this.showMe=!this.showMe;
  }

}
