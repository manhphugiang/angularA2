import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGiangmaComponent } from './header-giangma.component';

describe('HeaderGiangmaComponent', () => {
  let component: HeaderGiangmaComponent;
  let fixture: ComponentFixture<HeaderGiangmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderGiangmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGiangmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
