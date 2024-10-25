import { Component, OnInit } from '@angular/core';
import { Pokeball } from '../../interfaces/pokeball.interfaces';
import { PokeballServicesService } from '../../services/pokeball-services.service';

@Component({
  selector: 'app-pokeball-list',
  templateUrl: './pokeball-list.component.html',
  styleUrl: './pokeball-list.component.css'
})
export class PokeballListComponent implements OnInit {
  
  listOfPokeball: Pokeball[] = [];

  constructor(private pokeballSvc: PokeballServicesService) { }
  
  ngOnInit(): void {
    this.pokeballSvc.getPokeball().subscribe(respuesta => {
      this.listOfPokeball = respuesta.results;
    })
  }

  getPokeballId(url: string) {
    return parseInt(url.split('/')[6]);
  }

}
