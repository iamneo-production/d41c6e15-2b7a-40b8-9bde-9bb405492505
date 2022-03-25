import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserSideComponent } from './user-side.component';

describe('UserSideComponent', () => {
  let component: UserSideComponent;
  beforeEach(()=>TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[UserSideComponent]
  }))
  beforeEach(() => {
    const fixture = TestBed.createComponent(UserSideComponent);
    component = fixture.componentInstance;
  });
  it('test_case13', () => {
    expect(component).toBeTruthy();
  });
});