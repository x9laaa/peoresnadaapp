import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { HeaderToolbarComponent } from '../../components/header-toolbar/header-toolbar.component';
import { AvisoItemComponent } from '../../components/aviso-item/aviso-item.component';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';
import { AvisosService, Aviso } from '../../services/avisos.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.page.html',
  styleUrls: ['./avisos.page.scss'],
  standalone: true,
  imports: [
     CommonModule,
    IonContent, IonList, IonItem, IonLabel,
    HeaderToolbarComponent, AvisoItemComponent, ConfirmModalComponent
  ],
})
export class AvisosPage implements OnInit {

  avisos: Aviso[] = [];
  isModalOpen = false;
  idAEliminar: number | null = null;


  constructor(private avisosSrv: AvisosService) { }

 async ngOnInit() { await this.cargar(); }
  async ionViewWillEnter() { await this.cargar(); }

  private async cargar() {
    this.avisos = await this.avisosSrv.listar();
  }

  // llamado desde (pedirEliminar) del hijo
  abrirModalEliminar(id: number) {
    this.idAEliminar = id;
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
    this.idAEliminar = null;
  }

  async confirmarEliminar() {
    if (this.idAEliminar != null) {
      await this.avisosSrv.eliminar(this.idAEliminar);
      await this.cargar();
    }
    this.cerrarModal();
  }

}
