import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSLevelThreeTwoOneComponent } from './product-s-level-three-two-one.component';

describe('ProductSLevelThreeTwoOneComponent', () => {
  let component: ProductSLevelThreeTwoOneComponent;
  let fixture: ComponentFixture<ProductSLevelThreeTwoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSLevelThreeTwoOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSLevelThreeTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
