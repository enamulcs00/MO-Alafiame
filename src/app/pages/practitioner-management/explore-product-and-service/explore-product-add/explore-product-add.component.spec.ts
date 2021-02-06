import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductAddComponent } from './explore-product-add.component';

describe('ExploreProductAddComponent', () => {
  let component: ExploreProductAddComponent;
  let fixture: ComponentFixture<ExploreProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
