import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductViewComponent } from './explore-product-view.component';

describe('ExploreProductViewComponent', () => {
  let component: ExploreProductViewComponent;
  let fixture: ComponentFixture<ExploreProductViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreProductViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
