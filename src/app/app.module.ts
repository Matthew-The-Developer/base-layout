import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { ButtonsComponent } from './navigation/buttons/buttons.component';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClinicalComponent } from './clinical/clinical.component';
import { BillingComponent } from './billing/billing.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ButtonsComponent,
    PatientComponent,
    DashboardComponent,
    ClinicalComponent,
    BillingComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
