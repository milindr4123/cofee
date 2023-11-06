/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { CoffeeListComponent } from './coffee-list.component';
import { coffee } from '../coffee';
import { faker } from '@faker-js/faker';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let debug: DebugElement;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CoffeeListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    

    for (let i = 0; i < 3; i++) {
      const cof = new coffee(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
      );

      component.coffee.push(cof)
      fixture.detectChanges();
    }
    debug= fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 <th> elements', () => {
    expect(debug.queryAll(By.css('td'))).toHaveSize(12)
  });
  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(3);
  });
  it("Component has a table head", () => {
    expect(debug.query(By.css("thead")).childNodes.length).toBeGreaterThanOrEqual(1);
  });
});
