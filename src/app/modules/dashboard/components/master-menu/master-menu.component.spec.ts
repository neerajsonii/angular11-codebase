import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMenuComponent } from './master-menu.component';

describe('MasterMenuComponent', () => {
  let component: MasterMenuComponent;
  let fixture: ComponentFixture<MasterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
