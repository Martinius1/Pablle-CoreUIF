import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTypeComponent } from './config-type.component';

describe('ConfigTypeComponent', () => {
  let component: ConfigTypeComponent;
  let fixture: ComponentFixture<ConfigTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
