import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngIf
import {
  IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonIcon
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonIcon, RouterLink, CommonModule]

})
export class HeaderToolbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() titulo = '';
  @Input() showBack = false;
  @Input() newLink = '/nuevo-aviso';

}


