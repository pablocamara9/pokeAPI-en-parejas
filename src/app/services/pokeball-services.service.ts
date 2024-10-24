import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeballResponse } from '../interfaces/pokeball.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeballServicesService {

  constructor(private http:HttpClient) { }

  getPokeball(): Observable<PokeballResponse> {
    return this.http.get<PokeballResponse>("https://pokeapi.co/api/v2/item/");
  }

    getPokeballSprite(): Observable<PokeballResponse> {
      return this.http.get<PokeballResponse>("https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/items/");
    }
}
