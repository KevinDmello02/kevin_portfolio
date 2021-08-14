import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioOverviewComponent } from './pages/portfolio-overview/portfolio-overview.component';
import { PortfolioWorkComponent } from './pages/portfolio-work/portfolio-work.component';
import { PortfolioEducationComponent } from './pages/portfolio-education/portfolio-education.component';
import { PortfolioResumeComponent } from './pages/portfolio-resume/portfolio-resume.component';
import { PortfolioSkillsComponent } from './pages/portfolio-skills/portfolio-skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenComponent } from './pages/splash-screen/splash-screen.component';

import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioOverviewComponent,
    PortfolioWorkComponent,
    PortfolioEducationComponent,
    PortfolioResumeComponent,
    PortfolioSkillsComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
