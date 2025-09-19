import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonItem, IonThumbnail, IonImg, IonAvatar, IonIcon, IonLabel, IonButton, IonButtons // <-- AÑADIDO IonButtons
} from '@ionic/angular/standalone';
import { Aviso } from '../../services/avisos.service';
import { addIcons } from 'ionicons';
import { trashOutline, newspaperOutline } from 'ionicons/icons';

@Component({
  selector: 'app-aviso-item',
  templateUrl: './aviso-item.component.html',
  styleUrls: ['./aviso-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonItem, IonThumbnail, IonImg, IonAvatar, IonIcon, IonLabel, IonButton]
})
export class AvisoItemComponent  implements OnInit {

   @Input() aviso!: Aviso;
  @Output() pedirEliminar = new EventEmitter<number>();
  solicitarEliminar() { this.pedirEliminar.emit(this.aviso.id); }

  constructor() {
     addIcons({newspaperOutline,trashOutline});
   }

  ngOnInit() {}

}
