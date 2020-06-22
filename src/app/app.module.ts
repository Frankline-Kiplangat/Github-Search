import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    GithubFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }