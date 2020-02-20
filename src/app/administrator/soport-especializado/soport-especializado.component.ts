import { Component, OnInit } from '@angular/core';
import { SoportEspecializadosService, Content } from "../../../services/soport-especializados.service";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng';
import { MessageService, ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-soport-especializado',
  templateUrl: './soport-especializado.component.html',
  styleUrls: ['./soport-especializado.component.css'],
  providers: [MessageService]
})
export class SoportEspecializadoComponent implements OnInit {

  text: string;
  departamento: SelectItem[];
  clasificacion: SelectItem[];
  onsite: SelectItem[];
  objContent: Content = new Content();
  newRegister: any[];
  value: number = 0;

  constructor(
    private _soportEspecializadosService : SoportEspecializadosService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationservice: ConfirmationService,
  ) { 

    this.departamento = [
      { label: 'Seleccione Departamento...', value: 'Seleccione Departamento...' },
      { label: 'Exploracion', value: 'Exploracion' },
      { label: 'Perforacion', value: 'Perforacion' },
      { label: 'Yacimientos', value: 'Yacimientos' },
      { label: 'Exploracion y Perforacion', value: 'Exploracion y Perforacion' },

    ];

    this.clasificacion = [

      { label: 'Seleccione Clasificacion...', value: 'Seleccione Clasificacion...' },
      { label: 'IA', value: 'IA' },
      { label: 'IIA', value: 'IIA' },
      { label: 'IIIA', value: 'IIA' },

    ];

  }


  get isFormValidRelation(): boolean {
    if (this.objContent.Fecha == null) return false; 
    if (this.objContent.Duracion == null) return false;
    if (this.objContent.Onsite == null) return false;
    if (this.objContent.Usuario == null) return false;
    if (this.objContent.Departamento == null) return false;
    if (this.objContent.Clasificacion == null) return false;
    if (this.objContent.Software == null) return false;
    if (this.objContent.Flujo == null) return false;
    if (this.objContent.Actividad == null) return false;

    if (this.objContent.Duracion.length == 0) return false;
    if (this.objContent.Onsite.length == 0) return false;
    if (this.objContent.Usuario.length == 0) return false;
    if (this.objContent.Departamento == "Seleccione Departamento...") return false;
    if (this.objContent.Clasificacion == "Seleccione Clasificacion...") return false;
    if (this.objContent.Software.length == 0) return false;
    if (this.objContent.Flujo.length == 0) return false;
    if (this.objContent.Actividad.length == 0) return false;

    return true;
  }

  ngOnInit() {

  }

  adminSoportEsp: FormGroup = this.formBuilder.group({
    Fecha: new FormControl('', Validators.required),
    Duracion: new FormControl('', Validators.required),
    Onsite: new FormControl('', Validators.required),
    Usuario: new FormControl('', Validators.required),
    Departamento: new FormControl('', Validators.required),
    Clasificacion: new FormControl('', Validators.required),
    Software: new FormControl('', Validators.required),
    Flujo: new FormControl('', Validators.required),
    Actividad: new FormControl('', Validators.required),
  });

  addSoporte() {
    const addIssue: Content = {
      Fecha: this.adminSoportEsp.value.Fecha,
      Duracion: this.adminSoportEsp.value.Duracion,
      Onsite: this.adminSoportEsp.value.Onsite,
      Usuario: this.adminSoportEsp.value.Usuario,
      Departamento: this.adminSoportEsp.value.Departamento,
      Clasificacion: this.adminSoportEsp.value.Clasificacion,
      Software: this.adminSoportEsp.value.Software,
      Flujo: this.adminSoportEsp.value.Flujo,
      Actividad: this.adminSoportEsp.value.Actividad

    }
    console.log(addIssue)

    this._soportEspecializadosService.addRegistro(addIssue).then((data: any) => {

      this.showMessage(
        'success',
        'Registro Creado!!',
        'El registro se ha creado Correctamente'
      );
    });
  }

  setDefault() {

    this.text = '';
    this.showMessage(
      'info',
      'Cancelado',
      'No se crearon Datos'
    );
  }

  showMessage(severity: string, summary: string, detail?: string) {
    this.messageService.add({
      key: 'PopUp',
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

}
