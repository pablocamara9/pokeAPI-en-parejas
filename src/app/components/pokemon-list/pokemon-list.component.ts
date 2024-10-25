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

  constructor(private pokenmonSvc: PokemonServicesService) { }

ngOnInit(): void {
  this.pokenmonSvc.getPokemonList(1025).subscribe(respuesta => {
    this.listOfPokemon = respuesta.results;
  });
}

getPokemonId(url: string): number  {
  return parseInt(url.split('/')[6]);
}



}

