import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
    children: [
      {
        path: 'expense',
        loadComponent: () =>
          import('./pages/dashboard/expense-canvas/expense-canvas.page').then(
            (m) => m.ExpenseCanvasPage
          ),
      },
      {
        path: 'income',
        loadComponent: () =>
          import('./pages/dashboard/income-canvas/income-canvas.page').then(
            (m) => m.IncomeCanvasPage
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard/expense',
    pathMatch: 'full',
  },
  {
    path: 'transaction',
    loadComponent: () =>
      import('./pages/transaction/transaction.page').then(
        (m) => m.TransactionPage
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then((m) => m.SettingsPage),
  },
];
