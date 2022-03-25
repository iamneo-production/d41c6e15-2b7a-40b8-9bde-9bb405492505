import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { AdminNavbarComponent } from './admin-navbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminNavbarComponent', () => {
  let component: AdminNavbarComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AdminNavbarComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AdminNavbarComponent);
    component = fixture.componentInstance;
  });
  it('test_case17', () => {
    expect(component).toBeTruthy();
  });
});