import { Injectable } from '@angular/core';
import {Computer} from "../models/computer.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";

@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  constructor(private http: HttpClient,
              private sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.sessions.token })
    }
  }

  public findAll(): Observable<Computer[]> {
    return this.http.get<Computer[]>(environment.api + '/api/computers/', this.options);
  }

  public findById(id: number): Observable<Computer> {
    return this.http.get<Computer>(environment.api + '/api/computers/' + id, this.options);
  }

  public save(user: Computer): Observable<Computer> {
    if (user.id) {
      return this.http.put<Computer>(environment.api + '/api/computers/' + user.id, user, this.options);

    } else {
      return this.http.post<Computer>(environment.api + '/api/computers/', user, this.options);
    }
  }
}

