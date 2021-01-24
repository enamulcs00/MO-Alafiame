import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerViewComponent } from './home-banner-view.component';

describe('HomeBannerViewComponent', () => {
  let component: HomeBannerViewComponent;
  let fixture: ComponentFixture<HomeBannerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBannerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
