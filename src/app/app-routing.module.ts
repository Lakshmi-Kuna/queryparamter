import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginQueryComponent } from './components/login-query/login-query.component';
import { RegisterQueryComponent } from './components/register-query/register-query.component';
import { NotfoundQueryComponent } from './components/notfound-query/notfound-query.component';

const routes: Routes = [
  {path:'',redirectTo:'/register',pathMatch:'full'},
  {path:'login/:id',component:LoginQueryComponent},
  {path:'register',component:RegisterQueryComponent},
  {path:'**',component:NotfoundQueryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
