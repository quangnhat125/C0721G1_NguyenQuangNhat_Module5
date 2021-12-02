import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularShowPetInfoComponent } from './angular-show-pet-info.component';

describe('AngularShowPetInfoComponent', () => {
  let component: AngularShowPetInfoComponent;
  let fixture: ComponentFixture<AngularShowPetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularShowPetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularShowPetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
