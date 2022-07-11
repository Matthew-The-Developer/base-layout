import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { ClinicalComponent } from './clinical/clinical.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'clinical', component: ClinicalComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
