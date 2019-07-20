import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication/authentication.component';
import {HomeComponent} from './home/home.component';
const route : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:"login", component:AuthenticationComponent},
  {path:"home", component:HomeComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[
      RouterModule
  ]
})
export class AppRoutingModule { }
