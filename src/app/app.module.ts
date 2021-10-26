import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyformComponent } from './myform/myform.component';
import { MylistaComponent } from './mylista/mylista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MytableComponent } from './mytable/mytable.component';
import { FirstUpperCasePipe } from './first-upper-case.pipe';
import { UppercasePipe } from './uppercase.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyformComponent,
    MylistaComponent,
    MytableComponent,
    FirstUpperCasePipe,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
