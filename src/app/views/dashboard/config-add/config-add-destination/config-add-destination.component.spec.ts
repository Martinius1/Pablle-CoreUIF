import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAddDestinationComponent } from './config-add-destination.component';

describe('ConfigAddDestinationComponent', () => {
  let component: ConfigAddDestinationComponent;
  let fixture: ComponentFixture<ConfigAddDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAddDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAddDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
