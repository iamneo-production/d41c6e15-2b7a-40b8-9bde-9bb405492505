import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBikesComponent } from './add-bikes.component';

describe('AddBikesComponent', () => {
  let component: AddBikesComponent;
  let fixture: ComponentFixture<AddBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
