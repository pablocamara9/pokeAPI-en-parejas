import { Component, Input, OnInit } from '@angular/core';
import { MoveDetailResponse } from '../../interfaces/move-detail.interface';
import { MoveServicesService } from '../../services/move-services.service';

@Component({
  selector: 'app-move-item',
  templateUrl: './move-item.component.html',
  styleUrl: './move-item.component.css'
})
export class MoveItemComponent implements OnInit {
  
  @Input() moveId: number | undefined;
  move: MoveDetailResponse  | undefined;

  constructor(private moveService: MoveServicesService) {}

  ngOnInit(): void {
    if (this.moveId) {
      this.moveService.getOneMove(this.moveId).subscribe((response) => {
        this.move = response;
      });
    } else {
      console.warn('El moveId no está definido.');
    }
    
  }
  getMoveId(url: string): number  {
    return parseInt(url.split('/')[6]);
  }
  
  

}