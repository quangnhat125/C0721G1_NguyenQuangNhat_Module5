import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUsingBootstrapComponent } from './angular-using-bootstrap.component';

describe('AngularUsingBootstrapComponent', () => {
  let component: AngularUsingBootstrapComponent;
  let fixture: ComponentFixture<AngularUsingBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularUsingBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularUsingBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
