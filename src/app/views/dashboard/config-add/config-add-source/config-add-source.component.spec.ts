import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAddSourceComponent } from './config-add-source.component';

describe('ConfigAddSourceComponent', () => {
  let component: ConfigAddSourceComponent;
  let fixture: ComponentFixture<ConfigAddSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAddSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAddSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
