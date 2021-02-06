import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGiftComponent } from './view-gift.component';

describe('ViewGiftComponent', () => {
  let component: ViewGiftComponent;
  let fixture: ComponentFixture<ViewGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
