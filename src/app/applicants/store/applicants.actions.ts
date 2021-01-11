import {createAction, props} from '@ngrx/store';
import {Applicant} from '../applicant';

// select
export const setSelectedApplicantId = createAction(
  '[Applicants] Set Selected Applicant Id',
  props<{ selectedId: number }>()
);

export const clearApplicantId = createAction(
  '[Applicants] Clear Applicant Id'
);

export const initNewApplicant = createAction(
  '[Applicants] Init New Applicant'
);

export const clearErrorMessage = createAction(
  '[Applicants] Clear Error Message'
);


// Get All
export const getApplicants = createAction('[Applicants] Get All', props<{filter: string | null}>());
export const getApplicantsSuccess = createAction('[Applicants] Get All Success', props<{ applicants: Applicant[] }>());
export const getApplicantsError = createAction('[Applicants] Get All Error', props<{ msgError: string }>());


// update
export const updateApplicant = createAction('[Applicants] Update Applicant', props<{ applicant: Applicant }>());
export const updateApplicantSuccess = createAction('[Applicants] Update Applicant Success', props<{ applicant: Applicant }>());
export const updateApplicantError = createAction('[Applicants] Update Applicant Error', props<{ msgError: string }>());

// create
export const createApplicant = createAction('[Applicants] Create Applicant', props<{ applicant: Applicant }>());
export const createApplicantSuccess = createAction('[Applicants] Create Applicant Success', props<{ applicant: Applicant }>());
export const createApplicantError = createAction('[Applicants] Create Applicant Error', props<{ msgError: string }>());

// delete
export const deleteApplicant = createAction('[Applicants] Delete Applicant', props<{ id: number }>());
export const deleteApplicantSuccess = createAction('[Applicants] Delete Applicant Success', props<{ id: number }>());
export const deleteApplicantError = createAction('[Applicants] Delete Applicant Error', props<{ msgError: string }>());
