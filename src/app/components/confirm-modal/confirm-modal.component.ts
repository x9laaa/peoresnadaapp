import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonModal, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonModal, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton],
})
export class ConfirmModalComponent  implements OnInit {

   @Input() isOpen = false;
  @Input() title = 'Confirmar';
  @Input() message = '¿Deseas continuar?';
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

}
