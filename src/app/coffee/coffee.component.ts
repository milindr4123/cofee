import { Component, OnInit } from '@angular/core';
import { coffee } from './coffee';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  constructor(private coffeeService: CoffeeService) { }

  coffee: Array<coffee> = [];

  ngOnInit() {
    this.getCoffee();
  }

  getCoffee() {
    this.coffeeService.getCoffee().subscribe(coffee => {
      this.coffee = coffee;
    });
  }

}

