import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AboutComponent } from './composants/about/about.component';
import { ServicesComponent } from './composants/services/services.component';
import { TeamComponent } from './composants/team/team.component';
import { ContactComponent } from './composants/contact/contact.component';

const routes: Routes = [
  {path : 'accueil', component: AccueilComponent},
  {path : 'about', component: AboutComponent},
  {path : 'services', component: ServicesComponent},
  {path : 'projet', component: TeamComponent},
  {path:'contact', component: ContactComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
