import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginQueryComponent } from './components/login-query/login-query.component';
import { NotfoundQueryComponent } from './components/notfound-query/notfound-query.component';
import { RegisterQueryComponent } from './components/register-query/register-query.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginQueryComponent,
    NotfoundQueryComponent,
    RegisterQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
