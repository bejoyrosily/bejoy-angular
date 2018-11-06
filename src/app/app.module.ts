import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QtnsComponent } from './qtns/qtns.component';
import { AppRoutingModule } from './app-routing.module';
import { AddQtnComponent } from './add-qtn/add-qtn.component';
import { DeleteQtnComponent } from './delete-qtn/delete-qtn.component';
import { DeleteWindowComponent } from './delete-window/delete-window.component';
import { QtnEditComponent } from './qtn-edit/qtn-edit.component';
import { EditWindowComponent } from './edit-window/edit-window.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    QtnsComponent,
    AddQtnComponent,
    DeleteQtnComponent,
    DeleteWindowComponent,
    QtnEditComponent,
    EditWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
