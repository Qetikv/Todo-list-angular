import { Component, Input, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
 }

@Component({
  selector: 'app-grid-item',
  templateUrl: './app-grid-item.component.html',
  styleUrls: ['./app-grid-item.component.scss']

})
export class GridStyleComponent  {

breakpoint: number = 3;

  tiles: Tile[] = [
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1},
 {cols: 2, rows: 1},
 {cols: 2, rows: 1},
 {cols: 2, rows: 1},
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1},
 {cols: 2, rows: 1},
 {cols: 2, rows: 1},
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1},
 {cols: 2, rows: 1},
 {cols: 2, rows: 1},
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1},
 {cols: 2, rows: 1},
 {cols: 2, rows: 1},
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1 },
 {cols: 2, rows: 1},
 {cols: 2, rows: 1}
 ]


  constructor() { }


}
