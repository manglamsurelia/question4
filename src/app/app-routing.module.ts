import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component3Component } from './component3/component3.component';
import { Component5Component } from './component5/component5.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [{path:'',component:Component1Component,outlet: 'header1'},
{path:'',component:Component2Component,outlet: 'header2'},
{path:'',component:Component3Component,outlet: 'header3'},
{path:'',component:Component5Component,outlet: 'header5'} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
