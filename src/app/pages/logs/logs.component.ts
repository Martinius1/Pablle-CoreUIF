import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct, NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})

export class LogsComponent implements OnInit {
  model!: NgbDateStruct;
  date!: { year: number; month: number; };
  constructor(private calendar: NgbCalendar) { }
  selectToday() {
    this.model = this.calendar.getToday();
  }
  ngOnInit(): void {
  }

}
imports: [
  NgbModule
]
