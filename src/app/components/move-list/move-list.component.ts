import { Component, OnInit } from '@angular/core';
import { MoveServicesService } from '../../services/move-services.service';
import { Move } from '../../interfaces/move.interface';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.css'
})
export class MoveListComponent implements OnInit {

  listOfMoves: Move[] = [];
  

  constructor(private movesSvc: MoveServicesService) { }

  ngOnInit(): void {
    this.movesSvc.getMove().subscribe(respuesta => {
      this.listOfMoves = respuesta.results;
    });
  }
  getMoveId(url: string): number  {
    return parseInt(url.split('/')[6]);
  }
 
}





