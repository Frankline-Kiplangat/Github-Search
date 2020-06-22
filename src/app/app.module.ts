import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }