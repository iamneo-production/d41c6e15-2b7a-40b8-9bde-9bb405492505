import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminSideComponent } from './admin-side.component';

describe('AdminSideComponent', () => {
  let component: AdminSideComponent;
  beforeEach(()=>TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[AdminSideComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AdminSideComponent);
    component = fixture.componentInstance;
  });
  it('test_case12', () => {
    expect(component).toBeTruthy();
  });
});