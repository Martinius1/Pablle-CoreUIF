import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-add',
  templateUrl: './config-add.component.html',
  styleUrls: ['./config-add.component.scss']
})
export class ConfigAddComponent implements OnInit {
  showMe:boolean = true
  constructor() { }

  ngOnInit(): void {

  }
  toogleTag()
  {
    this.showMe=!this.showMe;
  }

}
