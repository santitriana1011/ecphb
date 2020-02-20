import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { DialogModule } from 'primeng/dialog';
import { LightboxModule } from 'primeng/lightbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AdministratorComponent } from './administrator/administrator.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RouterModule, Routes } from '@angular/router';
import {CardModule} from 'primeng/card';
import { LicenciasComponent } from './homepage/licencias/licencias.component';
import { RequerimientosComponent } from './homepage/requerimientos/requerimientos.component';
import { IncidentesComponent } from './homepage/incidentes/incidentes.component';
import { EfectividadServicioComponent } from './homepage/efectividad-servicio/efectividad-servicio.component';
import { ManEvolutivosComponent } from './administrator/man-evolutivos/man-evolutivos.component';
import { ReqEspecialesComponent } from './administrator/req-especiales/req-especiales.component';
import { SoportEspecializadoComponent } from './administrator/soport-especializado/soport-especializado.component';
import { ControlLicenciasComponent } from './homepage/licencias/control-licencias/control-licencias.component';
import { UsoLicenciasComponent } from './homepage/licencias/uso-licencias/uso-licencias.component';
import { InformeLicenciasComponent } from './homepage/licencias/informe-licencias/informe-licencias.component';
import { NegacionLicenciasComponent } from './homepage/licencias/negacion-licencias/negacion-licencias.component';
import { UsoFeatureLicenciasComponent } from './homepage/licencias/uso-feature-licencias/uso-feature-licencias.component';
import { VerificarLicenciasComponent } from './homepage/licencias/verificar-licencias/verificar-licencias.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'administrator', component: AdministratorComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'licencias', component: LicenciasComponent },
  { path: 'requerimientos', component: RequerimientosComponent },
  { path: 'incidentes', component: IncidentesComponent },
  { path: 'efectividadServicio', component: EfectividadServicioComponent },
  { path: 'manEvolutivos', component: ManEvolutivosComponent },
  { path: 'reqEspeciales', component: ReqEspecialesComponent },
  { path: 'soportEspecializado', component: SoportEspecializadoComponent },
  { path: 'control-licencias', component: ControlLicenciasComponent },
  { path: 'uso-licencias', component: UsoLicenciasComponent },
  { path: 'informe-licencias', component: InformeLicenciasComponent },
  { path: 'negacion-licencias', component: NegacionLicenciasComponent },
  { path: 'uso-feature-licencias', component: UsoFeatureLicenciasComponent },
  { path: 'verificar-licencias', component: VerificarLicenciasComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    AdministratorComponent,
    LicenciasComponent,
    RequerimientosComponent,
    IncidentesComponent,
    EfectividadServicioComponent,
    ManEvolutivosComponent,
    ReqEspecialesComponent,
    SoportEspecializadoComponent,
    ControlLicenciasComponent,
    UsoLicenciasComponent,
    InformeLicenciasComponent,
    NegacionLicenciasComponent,
    UsoFeatureLicenciasComponent,
    VerificarLicenciasComponent,
    LoginComponent,
  ],
  imports: [
    TabViewModule,
    BrowserModule,
    AppRoutingModule,
    TieredMenuModule,
    BrowserAnimationsModule,
    AccordionModule,
    LightboxModule,
    BreadcrumbModule,
    MenuModule,
    SlideMenuModule,
    ButtonModule,
    DialogModule,
    OverlayPanelModule,
    SplitButtonModule,
    RouterModule,
    CardModule,
    RouterModule.forRoot(
      appRoutes
      
    )

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})

export class AppModule { }
