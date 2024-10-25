import { Component, Input, OnInit } from '@angular/core';
import { PokeballDetailResponse } from '../../interfaces/pokeball-detail.interface';
import { PokeballServicesService } from '../../services/pokeball-services.service';

@Component({
  selector: 'app-pokeball-item',
  templateUrl: './pokeball-item.component.html',
  styleUrl: './pokeball-item.component.css'
})
export class PokeballItemComponent implements OnInit{
  
  @Input() pokeballId: number | undefined;
  pokeball: PokeballDetailResponse | undefined;

  constructor(private pokeballSvc: PokeballServicesService) { }
  
  ngOnInit(): void {
    if(this.pokeballId) {
      this.pokeballSvc.getOnePokeball(this.pokeballId).subscribe((response) => {
        this.pokeball = response;
      });
    } else {
      console.warn('El pokeballId no está definido.');
    }
  }

  /*getPokeballId(url: string) {
    return parseInt(url.split('/')[9]);
  }*/

}
