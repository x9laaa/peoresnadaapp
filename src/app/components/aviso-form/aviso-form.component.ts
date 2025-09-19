import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonItem, IonInput, IonTextarea, IonButton,
  IonCard, IonImg, IonCardContent, IonText, IonIcon   // <-- agrega IonIcon aquí
} from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Aviso } from '../../services/avisos.service';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-aviso-form',
  templateUrl: './aviso-form.component.html',
  styleUrls: ['./aviso-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonItem, IonInput, IonTextarea, IonButton, IonCard, IonImg, IonCardContent, IonText, IonIcon]
})
export class AvisoFormComponent implements OnInit {

  @Output() submitAviso = new EventEmitter<Aviso>();
  avisoForm: FormGroup;
  imagenDataUrl?: string;

  constructor(private fb: FormBuilder) {
    addIcons({ cameraOutline });
    this.avisoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
    });
  }


  get f() { return this.avisoForm.controls; }

  async tomarFoto() {
    const img = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.DataUrl,
    });
    this.imagenDataUrl = img.dataUrl || undefined;
  }

  guardar() {
    if (this.avisoForm.invalid) {
      this.avisoForm.markAllAsTouched();
      return;
    }
    this.submitAviso.emit({
      id: Date.now(),
      titulo: this.f['titulo'].value,
      descripcion: this.f['descripcion'].value,
      fechaISO: new Date().toISOString(),
      imagenDataUrl: this.imagenDataUrl
    });
    this.avisoForm.reset();
    this.imagenDataUrl = undefined;
  }

  ngOnInit() { }

}
