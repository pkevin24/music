import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoneComponent } from './favone.component';

describe('FavoneComponent', () => {
  let component: FavoneComponent;
  let fixture: ComponentFixture<FavoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
