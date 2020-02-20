import { Injectable } from '@angular/core';
import { DsepdbService } from '../services/dsepdb.service';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class SoportEspecializadosService {

  private nameTable = 'soportes_especializados'

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
  Duracion: String = null;
  Onsite: string = null;
  Usuario: string = null;
  Departamento: string = null;
  Clasificacion: string = null;
  Software: string = null;
  Flujo: string = null; 
  Actividad: string = null;
}
