import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon.interfaces';
import { PokemonDetailResponse } from '../interfaces/pokemon-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {

  constructor(private http:HttpClient) { }

  getPokemon(): Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon/");
  }
  getPokemonList(limit: number): Observable<PokemonResponse> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`) as Observable<PokemonResponse>;
  }

  getOnePokemon(id: number): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
  }
}
