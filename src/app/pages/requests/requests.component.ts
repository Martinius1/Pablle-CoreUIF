import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer.model";
import {Router} from "@angular/router";
import {ComputersService} from "../../services/computers.service";


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class ComputersListComponent implements OnInit {

  computers: Computer[] = [];

  constructor(private router: Router,
              private service: ComputersService) {}

  ngOnInit(): void {

    this.service.findAll().subscribe(data => this.computers = data);
  }

  public edit(computer: Computer): void {
    this.router.navigate([ 'computers', computer.id ]);
  }

}
