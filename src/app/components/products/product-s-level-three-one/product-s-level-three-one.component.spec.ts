import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSLevelThreeOneComponent } from './product-s-level-three-one.component';

describe('ProductSLevelThreeOneComponent', () => {
  let component: ProductSLevelThreeOneComponent;
  let fixture: ComponentFixture<ProductSLevelThreeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSLevelThreeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSLevelThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
