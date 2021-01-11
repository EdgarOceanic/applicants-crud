import * as AppState from '../../state/app.state';
import {Applicant} from '../applicant';

export interface State extends AppState.State {
  applicants: ApplicantsState;
}

export interface ApplicantsState {
  applicants: Applicant[];
  selectedId: number | null;
  msgError: string;
}
