import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'git', component: GithubComponent},
  { path: 'about', component: AboutComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
