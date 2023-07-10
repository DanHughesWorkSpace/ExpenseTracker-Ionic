import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpenseCanvasPage } from './expense-canvas.page';

describe('ExpenseCanvasPage', () => {
  let component: ExpenseCanvasPage;
  let fixture: ComponentFixture<ExpenseCanvasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpenseCanvasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
