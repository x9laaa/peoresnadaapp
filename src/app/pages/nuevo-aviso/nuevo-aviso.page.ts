import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AvisosService, Aviso } from '../../services/avisos.service';
import { HeaderToolbarComponent } from '../../components/header-toolbar/header-toolbar.component';
import { AvisoFormComponent } from '../../components/aviso-form/aviso-form.component';

 
@Component({
  selector: 'app-nuevo-aviso',
  templateUrl: './nuevo-aviso.page.html',
  styleUrls: ['./nuevo-aviso.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, HeaderToolbarComponent, AvisoFormComponent]
})
export class NuevoAvisoPage implements OnInit {

   constructor(private avisosSrv: AvisosService, private router: Router) {}

  async onSubmitAviso(nuevo: Aviso) {
    await this.avisosSrv.crear(nuevo);
    this.router.navigateByUrl('/avisos');
  }

  ngOnInit() {
  }

}
