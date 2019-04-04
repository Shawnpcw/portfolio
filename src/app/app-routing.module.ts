import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingComponent } from "./landing/landing.component";
import { ResumeComponent } from "./resume/resume.component";
import { ProjectsComponent } from "./projects/projects.component";
// import { CollaborateComponent } from "./collaborate/collaborate.component";

const routes: Routes = [
  { path: "projects", component: ProjectsComponent },
  { path: "resume", component: ResumeComponent },
  // { path: 'collaborate', component: CollaborateComponent },
  { path: "", component: LandingComponent },
  { path: "**", pathMatch: "full", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
