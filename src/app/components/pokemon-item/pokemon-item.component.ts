import { Component, Input } from '@angular/core';
import { PokemonDetailResponse } from '../../interfaces/pokemon-detail.interface';
import { PokemonServicesService } from '../../services/pokemon-services.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent {
  
  @Input() pokemonId: number | undefined;
  pokemon: PokemonDetailResponse | undefined;

  constructor(private pokemonService: PokemonServicesService) {}

  ngOnInit(): void {
    if (this.pokemonId) {
      this.pokemonService.getOnePokemon(this.pokemonId).subscribe((response) => {
        this.pokemon = response;
      });
    } else {
      console.warn('El PoekemonId no está definido.');
    }
    
  }

  getPokemonId(url: string): number  {
    return parseInt(url.split('/')[6]);
  }
}
