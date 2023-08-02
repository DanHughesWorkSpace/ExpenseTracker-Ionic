import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class WalletComponent implements OnInit {
  @Input() walletValue = 0;

  ngOnInit() {}
}
