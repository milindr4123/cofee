/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoffeeService } from './coffee.service';
import { AppComponent } from '../app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Service: Coffee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      providers: [CoffeeService],
      declarations: [
        AppComponent, CoffeeListComponent
      ],
    });
  });

  it('should ...', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
