import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule],
})
export class AppComponent {
  router = inject(Router);
  
  navigateToTransactionPage(){
    this.router.navigateByUrl("/transaction")
  }

  navigateToDashboardPage(){
    this.router.navigateByUrl("/dashboard")
  }

  navigateToSettingsPage(){
    this.router.navigateByUrl("/settings")

  }
}
