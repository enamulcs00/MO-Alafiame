import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPractionerEditComponent } from './book-practioner-edit.component';

describe('BookPractionerEditComponent', () => {
  let component: BookPractionerEditComponent;
  let fixture: ComponentFixture<BookPractionerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPractionerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPractionerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
