import { Component } from '@angular/core';
import { PokeballDetailResponse } from '../../interfaces/pokeball-detail.interface';
import { ActivatedRoute } from '@angular/router';
import { PokeballServicesService } from '../../services/pokeball-services.service';

@Component({
  selector: 'app-pokeball-detail',
  templateUrl: './pokeball-detail.component.html',
  styleUrl: './pokeball-detail.component.css'
})
export class PokeballDetailComponent {

  pokeballId: number | null = null;
  pokeball: PokeballDetailResponse | undefined;

  constructor(private route: ActivatedRoute,
    private pokeballSvc: PokeballServicesService) { }

    ngOnInit(): void { 
      this.pokeballId = Number(this.route.snapshot.paramMap.get('id'));

      this.pokeballSvc.getOnePokeball(this.pokeballId!).subscribe((response) => {
        this.pokeball = response;
      })
    }

}
