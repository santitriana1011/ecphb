import { Component, OnInit } from '@angular/core';
import { MantEvolutivosService, Content } from "../../../services/mant-evolutivos.service";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-man-evolutivos',
  templateUrl: './man-evolutivos.component.html',
  styleUrls: ['./man-evolutivos.component.css'],
  providers: [MessageService]
})
export class ManEvolutivosComponent implements OnInit {

  text: string;
  options: SelectItem[];
  objContent: Content = new Content();
  newRegister: any[];

  constructor(
    private _mantEvolutivosService: MantEvolutivosService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationservice: ConfirmationService,
  ) { 

    this.options = [
      { label: 'Seleccione Tipo...', value: 'Seleccione Tipo...' },
      // { label: 'Requerimiento', value: 'Requerimiento' },
      { label: 'Mantenimiento Evolutivo', value: 'Mantenimiento Evolutivo' },

    ];

   }
   
   get isFormValidRelation(): boolean {
    if (this.objContent.Actividad == null) return false;
    if (this.objContent.Aplicacion == null) return false;
    if (this.objContent.Fecha == null) return false;
    if (this.objContent.Horas == null) return false;
    if (this.objContent.Onsite == null) return false;


    if (this.objContent.Actividad.length == 0) return false;
    if (this.objContent.Aplicacion.length == 0) return false;
    if (this.objContent.Horas.length == 0) return false;
    if (this.objContent.Onsite.length == 0) return false;

    return true;
  }

  ngOnInit() {

  }

  adminMantEvol: FormGroup = this.formBuilder.group({
    Fecha: new FormControl('', Validators.required),
    Horas: new FormControl('', Validators.required), 
    Actividad: new FormControl('',Validators.required),
    Aplicacion: new FormControl('', Validators.required),
    Onsite: new FormControl('', Validators.required),
    Tipo: new FormControl('', Validators.required), 

  });

  addMantenimiento() {

    const addIssue: Content = {
      Fecha: this.adminMantEvol.value.Fecha,
      Horas: this.adminMantEvol.value.Horas,
      Actividad: this.adminMantEvol.value.Actividades, 
      Aplicacion: this.adminMantEvol.value.Aplicacion,
      Onsite: this.adminMantEvol.value.Onsite,
      Tipo: 'Mantenimiento Evolutivo' 
    }
    console.log(addIssue)

    this._mantEvolutivosService.addRegistro(addIssue).then((data:any) => {

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
