import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApplicantsService} from '../applicants.service';
import * as ApplicantsActions from './applicants.actions';
import {catchError, concatMap, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable()
export class ApplicantsEffects {

  constructor(private actions$: Actions, private applicantsService: ApplicantsService) {
  }

  getApplicants$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ApplicantsActions.getApplicants),
      mergeMap(action => {
        return this.applicantsService.getApplicants(action.filter).pipe(
          map(applicants => ApplicantsActions.getApplicantsSuccess({applicants})),
          catchError(error => of(ApplicantsActions.getApplicantsError))
        );
      })
    );
  });

  updateApplicant$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ApplicantsActions.updateApplicant),
        concatMap(action =>
          this.applicantsService.updateApplicant(action.applicant)
            .pipe(
              map(applicant => ApplicantsActions.updateApplicantSuccess({applicant})),
              catchError(msgError => of(ApplicantsActions.updateApplicantError({msgError})))
            )
        )
      );
  });


  createApplicant$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ApplicantsActions.createApplicant),
        concatMap(action =>
          this.applicantsService.createApplicant(action.applicant)
            .pipe(
              map(applicant => ApplicantsActions.createApplicantSuccess({applicant})),
              catchError(msgError => of(ApplicantsActions.createApplicantError({msgError})))
            )
        )
      );
  });


  deleteApplicant$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ApplicantsActions.deleteApplicant),
        mergeMap(action =>
          this.applicantsService.deleteApplicant(action.id).pipe(
            map(() => ApplicantsActions.deleteApplicantSuccess({id: action.id})),
            catchError(msgError => of(ApplicantsActions.deleteApplicantError({msgError})))
          )
        )
      );
  });

}
