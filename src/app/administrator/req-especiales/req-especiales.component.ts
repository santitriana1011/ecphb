import { Component, OnInit } from '@angular/core';
import { ReqEspecialesService, Content } from "../../../services/req-especiales.service";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng';
import { MessageService, ConfirmationService } from 'primeng/api';



@Component({
  selector: 'app-req-especiales',
  templateUrl: './req-especiales.component.html',
  styleUrls: ['./req-especiales.component.css'],
  providers: [MessageService]
})
export class ReqEspecialesComponent implements OnInit {

  text: string;
  options: SelectItem[];
  objContent: Content = new Content();
  newRegister: any[];
  value: number = 0;

  constructor(
    private _reqEspecialesService: ReqEspecialesService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationservice: ConfirmationService,

  ) {

    this.options = [
      { label: 'Seleccione Tipo...', value: 'Seleccione Tipo...' },
      { label: 'Requerimiento Especial', value: 'Requerimiento Especial' },
      // { label: 'Mantenimiento', value: 'Mantenimiento' },

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
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
        this.value = 100;
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
        clearInterval(interval);
      }
    }, 2000);
  }

  adminReqEsp: FormGroup = this.formBuilder.group({
    Fecha: new FormControl('', Validators.required),
    Horas: new FormControl('', Validators.required),
    Actividad: new FormControl('', Validators.required),
    Aplicacion: new FormControl('', Validators.required),
    Onsite: new FormControl('', Validators.required),
    Tipo: new FormControl('', Validators.required),


  });

  addRequerimiento() {

    const addIssue: Content = {
      Fecha: this.adminReqEsp.value.Fecha,
      Horas: this.adminReqEsp.value.Horas,
      Actividad: this.adminReqEsp.value.Actividad,
      Aplicacion: this.adminReqEsp.value.Aplicacion,
      Onsite: this.adminReqEsp.value.Onsite,
      Tipo: 'Requerimiento Especial' 

    }
    console.log(addIssue)

    // this._reqEspecialesService.addRegistro(newRegister).then((data: any) => {
    //   console.log(newRegister)
    // });

    this._reqEspecialesService.addRegistro(addIssue).then((data: any) => {

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
