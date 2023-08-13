import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ContactusComponent} from "./contactus/contactus.component";
import {WorkkComponent} from "./workk/workk.component";

const routes: Routes = [
	{path:'',component:HomeComponent},
	{path:'menu',component:MenuComponent},
	{path:'aboutus',component:AboutusComponent},
	{path:'contactus',component:ContactusComponent},
	{path:'workk',component:WorkkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


