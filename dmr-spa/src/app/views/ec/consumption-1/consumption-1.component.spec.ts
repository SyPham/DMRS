/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Consumption1Component } from './consumption-1.component';

describe('Consumption-1Component', () => {
  let component: Consumption1Component;
  let fixture: ComponentFixture<Consumption1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consumption1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consumption1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
