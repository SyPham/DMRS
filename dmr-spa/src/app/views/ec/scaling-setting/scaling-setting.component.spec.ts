import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalingSettingComponent } from './scaling-setting.component';

describe('ScalingSettingComponent', () => {
  let component: ScalingSettingComponent;
  let fixture: ComponentFixture<ScalingSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalingSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
