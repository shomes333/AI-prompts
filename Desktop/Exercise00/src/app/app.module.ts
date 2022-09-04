import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
// import { VistaComponent } from './vista/vista.component';
// import { LoginComponent } from './vista/login/login.component';
// import { DashboardComponent } from './vista/dashboard/dashboard.component';
// import { NuevoComponent } from './vista/nuevo/nuevo.component';
// import { EditarComponent } from './vista/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
    // VistaComponent,
    // LoginComponent,
    // DashboardComponent,
    // NuevoComponent,
    // EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
