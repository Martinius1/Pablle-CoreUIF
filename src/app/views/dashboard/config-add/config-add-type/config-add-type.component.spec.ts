import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAddTypeComponent } from './config-add-type.component';

describe('ConfigAddTypeComponent', () => {
  let component: ConfigAddTypeComponent;
  let fixture: ComponentFixture<ConfigAddTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAddTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAddTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
