import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAddScheduleComponent } from './config-add-schedule.component';

describe('ConfigAddScheduleComponent', () => {
  let component: ConfigAddScheduleComponent;
  let fixture: ComponentFixture<ConfigAddScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAddScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAddScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
