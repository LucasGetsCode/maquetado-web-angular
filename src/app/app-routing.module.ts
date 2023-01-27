import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page404Component } from "./page404/page404.component"
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { IndividualComponent } from "./individual/individual.component"
import { HomeComponent } from "./home/home.component"

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "profile", component: ProfileComponent,/*canActivate: [AuthGuard],*/},
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Page404Component, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }