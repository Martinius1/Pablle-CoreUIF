import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAddComputersComponent } from './config-add-computers.component';

describe('ConfigAddComputersComponent', () => {
  let component: ConfigAddComputersComponent;
  let fixture: ComponentFixture<ConfigAddComputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAddComputersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAddComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
