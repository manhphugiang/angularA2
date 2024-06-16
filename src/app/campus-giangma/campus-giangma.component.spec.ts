import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusGiangmaComponent } from './campus-giangma.component';

describe('CampusGiangmaComponent', () => {
  let component: CampusGiangmaComponent;
  let fixture: ComponentFixture<CampusGiangmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusGiangmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusGiangmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
