import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoveResponse } from '../interfaces/move.interface';

@Injectable({
  providedIn: 'root'
})
export class MoveServicesService {

  constructor(private http:HttpClient) { }
  
  getMove(): Observable<MoveResponse>{
    return this.http.get<MoveResponse>("https://pokeapi.co/api/v2/move/");
  }
}
