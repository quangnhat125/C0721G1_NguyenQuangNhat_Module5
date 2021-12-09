import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagementAppComponent } from './product-management-app.component';

describe('ProductManagementAppComponent', () => {
  let component: ProductManagementAppComponent;
  let fixture: ComponentFixture<ProductManagementAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductManagementAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManagementAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
