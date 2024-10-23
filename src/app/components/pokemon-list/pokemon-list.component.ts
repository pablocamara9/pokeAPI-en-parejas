import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interfaces';
import { PokemonServicesService } from '../../services/pokemon-services.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

  listOfPokemon: Pokemon[] = [];
  listOfSprites: string[] = []; 

  constructor(private pokenmonSvc: PokemonServicesService) { }

ngOnInit(): void {
  this.pokenmonSvc.getPokemon().subscribe(respuesta => {
    this.listOfPokemon = respuesta.results;
  });
}
getPokemonName(name: string): Pokemon {
  
  return Pokemon;
}
getIdPokemon(pokemon: Pokemon): number {
    const urlParts = pokemon.url.split('/');
    return parseInt(urlParts[urlParts.length - 2]);

}
getUrlImage(pokeId: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getIdPokemon}.png`;
  }
  

}

