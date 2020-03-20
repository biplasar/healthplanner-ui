import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create.component', component: CreateComponent },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
