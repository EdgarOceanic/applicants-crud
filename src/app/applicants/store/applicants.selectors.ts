import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ApplicantsState} from './applicants.state';
import {Applicant} from '../applicant';


const applicantsFeatureSelector = createFeatureSelector<ApplicantsState>('applicants');

export const getAllApplicantsSelector = createSelector(
  applicantsFeatureSelector,
  state => state.applicants
);

export const getSelectedApplicantId = createSelector(
  applicantsFeatureSelector,
  state => state.selectedId
);

export const getSelectedApplicantObject = createSelector(
  applicantsFeatureSelector,
  getSelectedApplicantId,
  (state, selectedId) => {
    if (selectedId === 0) {
      return {
        id: 0,
        age: 18,
        email: '',
        name: '',
        socialNetwork: 'LINKEDIN'
      };
    } else {
      return selectedId ? state.applicants.find(ap => ap.id === selectedId) : null;
    }
  }
);


export const getMsgErrorSelector = createSelector(
  applicantsFeatureSelector,
  state => state.msgError
);
