import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ArrowsComponent } from './arrows/arrows.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolsSnackBarComponent } from './projects/tools-snack-bar/tools-snack-bar.component';

import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactMeComponent } from './contact-me/contact-me.component';

// import { setTheme } from 'ngx-bootstrap/utils';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    FooterComponent,
    CertificatesComponent,
    ArrowsComponent,
    ToolsSnackBarComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
