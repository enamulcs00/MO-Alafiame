import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductEditComponent } from './explore-product-edit.component';

describe('ExploreProductEditComponent', () => {
  let component: ExploreProductEditComponent;
  let fixture: ComponentFixture<ExploreProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
