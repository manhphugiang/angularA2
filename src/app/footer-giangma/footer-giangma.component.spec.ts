import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGiangmaComponent } from './footer-giangma.component';

describe('FooterGiangmaComponent', () => {
  let component: FooterGiangmaComponent;
  let fixture: ComponentFixture<FooterGiangmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterGiangmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterGiangmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
