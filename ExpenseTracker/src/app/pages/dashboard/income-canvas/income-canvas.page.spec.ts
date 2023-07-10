import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncomeCanvasPage } from './income-canvas.page';

describe('IncomeCanvasPage', () => {
  let component: IncomeCanvasPage;
  let fixture: ComponentFixture<IncomeCanvasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncomeCanvasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
