import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './View/home/home.component';
import { DetailJobComponent } from './View/detail-job/detail-job.component';
import { ManageJobComponent } from './View/manage-job/manage-job.component';
import { LoginComponent} from './View/login/login.component';
import { RegisterComponent} from './View/register/register.component';
import { ContactComponent} from './View/contact/contact.component';
import { AlljobComponent} from './View/alljob/alljob.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'detailjob/:id', component: DetailJobComponent },
  { path: 'manage', component: ManageJobComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'alljob', component: AlljobComponent},
  { path: 'detailjob', component: DetailJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
