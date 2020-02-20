import { Component, Inject, ViewChild } from '@angular/core';
import { MenuComponent } from '../app/menu/menu.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  @ViewChild(MenuComponent, null) menu: MenuComponent;
  
  ngOnInit() {

  }
}