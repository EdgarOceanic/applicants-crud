import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ApplicantsSelectors from '../store/applicants.selectors';
import * as ApplicantsActions from '../store/applicants.actions';

@Component({
  selector: 'ust-applicants-root',
  templateUrl: './applicants-root.component.html',
  styleUrls: ['./applicants-root.component.css']
})
export class ApplicantsRootComponent implements OnInit {

  msgError$: Observable<string>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.msgError$ = this.store.select(ApplicantsSelectors.getMsgErrorSelector);
  }

  clearErrorMessage(): void {
    this.store.dispatch(ApplicantsActions.clearErrorMessage());
  }

}
