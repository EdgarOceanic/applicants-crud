import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Applicant} from '../applicant';
import {Store} from '@ngrx/store';
import {State} from '../store/applicants.state';
import * as ApplicantsSelectors from '../store/applicants.selectors';
import * as ApplicantsActions from '../store/applicants.actions';



@Component({
  selector: 'ust-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.css']
})
export class ApplicantsListComponent implements OnInit {

  pageNumber = 1;

  filter: string;

  applicants$: Observable<Applicant[]>;

  selectedApplicant$: Observable<Applicant>;


  propertyOrder: string;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.search();
    this.applicants$ = this.store.select(ApplicantsSelectors.getAllApplicantsSelector);
    this.selectedApplicant$ = this.store.select(ApplicantsSelectors.getSelectedApplicantObject);
  }

  selectApplicant(applicant: Applicant): void {
    this.store.dispatch(ApplicantsActions.setSelectedApplicantId({selectedId: applicant.id}));
  }

  deleteApplicant(applicant: Applicant): void {
    if (confirm(`¿Deseas descartar a: ${applicant.name}?`)) {
      this.store.dispatch(ApplicantsActions.deleteApplicant({id: applicant.id}));
    }
  }

  initNewApplicantObject(): void {
    this.store.dispatch(ApplicantsActions.initNewApplicant());
  }

  search(): void {
    this.store.dispatch(ApplicantsActions.getApplicants({filter: this.filter}));
  }

}
