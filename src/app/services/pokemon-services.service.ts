import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {

  constructor(private http:HttpClient) { }

  getPokemon(): Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon/");
  }
  getSprite(): Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/");
  }
}
