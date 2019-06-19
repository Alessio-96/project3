import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtenteDetailsComponent } from './utente-details/utente-details.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [ 
  {path: 'utente-details/:id', component: UtenteDetailsComponent},
  { path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
