import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import "materialize-css";
import { MaterializeModule } from "angular2-materialize";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { ResumeComponent } from "./resume/resume.component";
import { ProjectsComponent } from "./projects/projects.component";
@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProjectsComponent,
    LandingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterializeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
