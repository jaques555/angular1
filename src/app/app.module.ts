import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyformComponent } from './myform/myform.component';
import { MylistaComponent } from './mylista/mylista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MytableComponent } from './mytable/mytable.component';
import { FirstUpperCasePipe } from './first-upper-case.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyformComponent,
    MylistaComponent,
    MytableComponent,
    FirstUpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
