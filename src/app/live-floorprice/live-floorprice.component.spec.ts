import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFloorpriceComponent } from './live-floorprice.component';

describe('LiveFloorpriceComponent', () => {
  let component: LiveFloorpriceComponent;
  let fixture: ComponentFixture<LiveFloorpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveFloorpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveFloorpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
