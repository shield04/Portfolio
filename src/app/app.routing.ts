import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { SkillsetComponent } from "./components/skillset/skillset.component";
import { DetailComponent } from "./components/detail/detail.component";
import { EditComponent } from "./components/edit/edit.component";
import { DialogProjectsComponent } from './components/dialog-projects/dialog-projects.component';

const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'sobre-mi', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'crear-proyecto', component: CreateComponent},
    {path: 'skillset', component: SkillsetComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'dialog/:id', component: DialogProjectsComponent},
    {path: 'edit-project/:id', component: EditComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);