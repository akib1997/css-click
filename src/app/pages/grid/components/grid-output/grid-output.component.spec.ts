/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridOutputComponent } from './grid-output.component';

describe('GridOutputComponent', () => {
  let component: GridOutputComponent;
  let fixture: ComponentFixture<GridOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
