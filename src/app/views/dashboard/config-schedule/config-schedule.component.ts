import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-schedule',
  templateUrl: './config-schedule.component.html',
  styleUrls: ['./config-schedule.component.scss']
})
export class ConfigScheduleComponent implements OnInit {
  showMe:boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  toogleTag()
  {
    this.showMe=!this.showMe;
  }
}
