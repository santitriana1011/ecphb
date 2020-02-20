import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DOCUMENT } from '@angular/common';
import { PanelMenu } from 'primeng/primeng';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'ecphb';

  constructor(@Inject(DOCUMENT) private document: any, private router: Router) { }

  goToUrl(): void {
    window.location.href = 'http://10.11.163.14:8081/spotfire/wp/startPage#/libraryBrowser';
  }                                                                    

  items: MenuItem[];


  ngOnInit() {
    this.items = [

      {
        label: 'Licencias',
        icon: 'pi pi-fw pi-file',
        items: [{
          label: 'Uso de Licencias',
          
          // url: "http://10.11.163.14:8081/spotfire/wp/startPage#/libraryBrowser",
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

  canActivate(): boolean {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['Prueba.html']);
      return false;
    }
  }

}
