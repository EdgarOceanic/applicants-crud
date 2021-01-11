import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {WelcomeComponent} from './home/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: WelcomeComponent, pathMatch: 'full'},
      // applicants module
      {
        path: 'applicants',
        loadChildren: () => import('./applicants/applicants.module').then(m => m.ApplicantsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
