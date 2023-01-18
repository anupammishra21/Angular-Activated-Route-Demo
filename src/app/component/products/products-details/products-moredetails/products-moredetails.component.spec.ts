import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMoredetailsComponent } from './products-moredetails.component';

describe('ProductsMoredetailsComponent', () => {
  let component: ProductsMoredetailsComponent;
  let fixture: ComponentFixture<ProductsMoredetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsMoredetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsMoredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
