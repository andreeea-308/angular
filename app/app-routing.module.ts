import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'demo',
    component:DemoComponent
  },
  {
    path:'employees',
    component:EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
