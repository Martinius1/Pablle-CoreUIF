import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgLogComponent } from './msg-log.component';

describe('MsgLogComponent', () => {
  let component: MsgLogComponent;
  let fixture: ComponentFixture<MsgLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
