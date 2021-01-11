import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ApplicantsEffects} from './store/applicants.effects';
import {applicantsReducer} from './store/applicants.reducer';
import { ApplicantsRootComponent } from './applicants-root/applicants-root.component';
import {ApplicantsListComponent} from './applicants-list/applicants-list.component';
import {ApplicantsEditComponent} from './applicants-edit/applicants-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderListApplicantsPipe } from './pipes/order-list-applicants.pipe';


const applicantRoutes: Routes = [
  {path: '', component: ApplicantsRootComponent}
];

@NgModule({
  declarations: [ApplicantsListComponent, ApplicantsEditComponent, ApplicantsRootComponent, OrderListApplicantsPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(applicantRoutes),
    StoreModule.forFeature('applicants', applicantsReducer),
    EffectsModule.forFeature([ApplicantsEffects]),
    NgxPaginationModule,
  ],
  providers: [OrderListApplicantsPipe]
})
export class ApplicantsModule {
}
