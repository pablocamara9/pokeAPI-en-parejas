import { Component, OnInit } from '@angular/core';
import { PokemonDetailResponse } from '../../interfaces/pokemon-detail.interface';
import { PokemonServicesService } from '../../services/pokemon-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  pokemonId: number| null=null;
  pokemon: PokemonDetailResponse | undefined;
  cardColor: string = '';

  typeColorMap: any = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',

  };
  constructor(private route:ActivatedRoute,
    private pokemonSvc: PokemonServicesService)  {}
  
    ngOnInit(): void {  
      this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));
      this.pokemonSvc.getOnePokemon(this.pokemonId!).subscribe((response) => {
        if (response) {
          this.pokemon = response;
          this.setCardColor();
        }
        this.setCardColor();
      });
    }
  setCardColor() {
    if (this.pokemon && this.pokemon.types && this.pokemon.types[0]) {
      const firstType = this.pokemon.types[0].type.name;
      this.cardColor = this.typeColorMap[firstType] ;
    } else {
      this.cardColor = 'gray'; 
  }
    
  }
}
