import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ecosystems/home/home.component';
import { AboutComponent } from './ecosystems/about/about.component';
import { ContactComponent } from './ecosystems/contact/contact.component';
import { UserComponent } from './ecosystems/user/user.component';

// TODO: figure out nested routing for routing within ecosystems
// https://www.techiediaries.com/angular-course-child-routes/

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user/:id', component: UserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
