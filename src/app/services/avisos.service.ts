import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface Aviso {
  id: number;
  titulo: string;
  descripcion: string;
  fechaISO: string;
  imagenDataUrl?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AvisosService {
  private readonly STORAGE_KEY = 'avisos';

  async listar(): Promise<Aviso[]> {
    const { value } = await Preferences.get({ key: this.STORAGE_KEY });
    return value ? JSON.parse(value) as Aviso[] : [];
  }

  private async guardarLista(avisos: Aviso[]): Promise<void> {
    await Preferences.set({ key: this.STORAGE_KEY, value: JSON.stringify(avisos) });
  }

  async crear(aviso: Aviso): Promise<void> {
    const lista = await this.listar();
    lista.push(aviso);
    await this.guardarLista(lista);
  }

  async eliminar(id: number): Promise<void> {
    const lista = await this.listar();
    await this.guardarLista(lista.filter(a => a.id !== id));
  }

  async limpiarTodo(): Promise<void> {
    await Preferences.remove({ key: this.STORAGE_KEY });
  }
}