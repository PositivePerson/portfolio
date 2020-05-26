import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsSnackBarComponent } from './tools-snack-bar.component';

describe('ToolsSnackBarComponent', () => {
  let component: ToolsSnackBarComponent;
  let fixture: ComponentFixture<ToolsSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
