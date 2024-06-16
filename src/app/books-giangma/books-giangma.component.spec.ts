import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksGiangmaComponent } from './books-giangma.component';

describe('BooksGiangmaComponent', () => {
  let component: BooksGiangmaComponent;
  let fixture: ComponentFixture<BooksGiangmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksGiangmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksGiangmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
