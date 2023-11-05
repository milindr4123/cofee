import { Component, OnInit } from '@angular/core';
import { coffee } from './Coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  constructor() { }

  private coffee: Array<coffee> = [];

  ngOnInit() {
  }

}
