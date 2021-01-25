import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPractionerViewComponent } from './book-practioner-view.component';

describe('BookPractionerViewComponent', () => {
  let component: BookPractionerViewComponent;
  let fixture: ComponentFixture<BookPractionerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPractionerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPractionerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
