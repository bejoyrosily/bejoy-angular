import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { QtnsComponent } from './qtns/qtns.component';
import { AddQtnComponent } from './add-qtn/add-qtn.component';
import { DeleteQtnComponent } from './delete-qtn/delete-qtn.component';
import { DeleteWindowComponent } from './delete-window/delete-window.component';
import { QtnEditComponent } from './qtn-edit/qtn-edit.component';
import { EditWindowComponent } from './edit-window/edit-window.component';

const routes : Routes = [
  {path: 'api/questions', component: QtnsComponent},
  {path: 'api/questions/add', component: AddQtnComponent},
  {path: 'api/questions/delete', component: DeleteQtnComponent},
  {path: 'api/questions/delete/:id', component: DeleteWindowComponent},
  {path: 'api/questions/edit', component: QtnEditComponent},
  {path: 'api/questions/edit/:id', component:EditWindowComponent }
]


@NgModule({
  exports: [
    RouterModule
  ],
 
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  
})
export class AppRoutingModule { }
