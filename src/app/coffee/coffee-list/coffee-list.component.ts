import { Component, OnInit } from '@angular/core';
import { coffee } from './../coffee';
import { CoffeeService } from './../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

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
