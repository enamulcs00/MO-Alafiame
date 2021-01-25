import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPractionerListComponent } from './book-practioner-list.component';

describe('BookPractionerListComponent', () => {
  let component: BookPractionerListComponent;
  let fixture: ComponentFixture<BookPractionerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPractionerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPractionerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
