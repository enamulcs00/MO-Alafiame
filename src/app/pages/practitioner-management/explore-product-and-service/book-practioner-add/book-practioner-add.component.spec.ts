import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPractionerAddComponent } from './book-practioner-add.component';

describe('BookPractionerAddComponent', () => {
  let component: BookPractionerAddComponent;
  let fixture: ComponentFixture<BookPractionerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPractionerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPractionerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
