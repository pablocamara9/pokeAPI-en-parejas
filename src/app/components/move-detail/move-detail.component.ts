import { Component, Input, input } from '@angular/core';
import { MoveResponse } from '../../interfaces/move.interface';
import { MoveDetailResponse } from '../../interfaces/move-detail.interface';
import { MoveServicesService } from '../../services/move-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrl: './move-detail.component.css'
})
export class MoveDetailComponent {
  moveId: number| null=null;
  move: MoveDetailResponse | undefined;

  constructor(private route:ActivatedRoute,
    private moveSvc: MoveServicesService)  {}
  ngOnInit(): void {
    this.moveId = Number(this.route.snapshot.paramMap.get('id'));


    this.moveSvc.getOneMove(this.moveId!).subscribe((response) => {
      this.move = response;
    });
}
/*
  

  getPeopleUrlImage(url: string) {
    let id = url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

  getPersonId(url: string): number {
    return parseInt(url.split('/')[5]);
  }
}
*/ 
}
