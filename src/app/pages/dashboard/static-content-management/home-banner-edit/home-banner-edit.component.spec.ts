import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerEditComponent } from './home-banner-edit.component';

describe('HomeBannerEditComponent', () => {
  let component: HomeBannerEditComponent;
  let fixture: ComponentFixture<HomeBannerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBannerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
