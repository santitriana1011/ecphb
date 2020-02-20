import { Injectable } from '@angular/core';
import { DsepdbService } from '../services/dsepdb.service';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class MantEvolutivosService {

  private nameTable = 'mantenimientos'

  constructor(
    private _dsepbdservice: DsepdbService,
    private _coreservice: CoreService,
  ) { }

  public addRegistro(objReq) {
    let vm = this;
    return new Promise(function (resolve, reject) {
      vm._dsepbdservice
        .addService(vm.nameTable, objReq)
        .subscribe((data: any) => {
          resolve(data);
        });
    });
  }
}

export class Content {

  Fecha: Date = null;
  Horas: string = null;
  Actividad: string = null;
  Aplicacion: string = null;
  Onsite: string = null;
  Tipo: string = null;

}
