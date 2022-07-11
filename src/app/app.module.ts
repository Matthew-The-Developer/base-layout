import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { ButtonsComponent } from './navigation/buttons/buttons.component';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClinicalComponent } from './clinical/clinical.component';
import { BillingComponent } from './billing/billing.component';
import { ReportsComponent } from './reports/reports.component';
import { HeaderComponent } from './navigation/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ButtonsComponent,
    PatientComponent,
    DashboardComponent,
    ClinicalComponent,
    BillingComponent,
    ReportsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
