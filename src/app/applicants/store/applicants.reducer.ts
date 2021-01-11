import {ApplicantsState} from './applicants.state';
import {createReducer, on} from '@ngrx/store';
import * as ApplicantsActions from './applicants.actions';


const initialState: ApplicantsState = {
  applicants: [],
  selectedId: null,
  msgError: ''
};

export const applicantsReducer = createReducer<ApplicantsState>(
  initialState,
  on(ApplicantsActions.setSelectedApplicantId, (state, action): ApplicantsState => {
    return {
      ...state,
      selectedId: action.selectedId
    };
  }),
  on(ApplicantsActions.clearApplicantId, (state): ApplicantsState => {
    return {
      ...state,
      selectedId: null
    };
  }),
  on(ApplicantsActions.initNewApplicant, (state): ApplicantsState => {
    return {
      ...state,
      selectedId: 0
    };
  }),
  on(ApplicantsActions.clearErrorMessage, (state): ApplicantsState => {
    return {
      ...state,
      msgError: ''
    };
  }),
  // GET DATA
  on(ApplicantsActions.getApplicantsSuccess, (state, action): ApplicantsState => {
    return {
      ...state,
      applicants: action.applicants,
      msgError: ''
    };
  }),
  on(ApplicantsActions.getApplicantsError, (state, action): ApplicantsState => {
    return {
      ...state,
      applicants: [],
      msgError: action.msgError
    };
  }),

  // UPDATE
  on(ApplicantsActions.updateApplicantSuccess, (state, action): ApplicantsState => {
    const updatedList = state.applicants.map(
      a => action.applicant.id === a.id ? action.applicant : a
    );
    return {
      ...state,
      applicants: updatedList,
      selectedId: null,
      msgError: ''
    };
  }),
  on(ApplicantsActions.updateApplicantError, (state, action): ApplicantsState => {
    return {
      ...state,
      msgError: action.msgError
    };
  }),

  // create
  on(ApplicantsActions.createApplicantSuccess, (state, action): ApplicantsState => {
    return {
      ...state,
      applicants: [...state.applicants, action.applicant],
      selectedId: null,
      msgError: ''
    };
  }),
  on(ApplicantsActions.createApplicantError, (state, action): ApplicantsState => {
    return {
      ...state,
      msgError: action.msgError
    };
  }),

  // delete
  on(ApplicantsActions.deleteApplicantSuccess, (state, action): ApplicantsState => {
    return {
      ...state,
      applicants: state.applicants.filter(a => a.id !== action.id),
      selectedId: null,
      msgError: ''
    };
  }),
  on(ApplicantsActions.deleteApplicantError, (state, action): ApplicantsState => {
    return {
      ...state,
      msgError: action.msgError
    };
  })
);










