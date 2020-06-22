import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubComponent } from './github/github.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'github', component: GithubComponent},
  { path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
