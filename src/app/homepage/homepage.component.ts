import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  public viewdisplay = false;
  items: MenuItem[];

  ngOnInit() {
    this.items = [

      {
        label: 'Licencias',
        icon: 'pi pi-fw pi-file',
        items: [{
          label: 'Uso de Licencias',
          url: "http://10.11.163.14:8081/spotfire/wp/startPage#/libraryBrowser",
        },
        ]
      },
      {
        label: 'Requerimientos',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Incidentes',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Efectividad del Servicio',
        icon: 'pi pi-fw pi-file',
      },
      { separator: true },
      {
        label: 'Quit', icon: 'pi pi-fw pi-times'
      }
    ];
  }

  showdialog(){

    this.viewdisplay = true;

  }

}
