import {Component, OnInit} from '@angular/core';
import {Applicant} from '../applicant';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../store/applicants.state';
import * as ApplicantsSelector from '../store/applicants.selectors';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../config/app.config';
import {tap} from 'rxjs/operators';
import * as ApplicantsActions from '../store/applicants.actions';

@Component({
  selector: 'ust-applicants-edit',
  templateUrl: './applicants-edit.component.html',
  styleUrls: ['./applicants-edit.component.css']
})
export class ApplicantsEditComponent implements OnInit {


  applicant$: Observable<Applicant>;

  form: FormGroup;
  isSubmiting: boolean;

  constructor(private store: Store<State>, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.applicant$ = this.store.select(ApplicantsSelector.getSelectedApplicantObject).pipe(
      tap(applicant => {
        this.patchFormValues(applicant);
      })
    );

    // CreateForm
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(AppConfig.validationPatterns.names)
      ]
      ],
      email: ['', [Validators.required, Validators.pattern(AppConfig.validationPatterns.email)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(80)]],
      socialNetwork: ['', [Validators.required]]
    });
  }


  saveOrUpdate(originalApplicant: Applicant): void {
    this.isSubmiting = true;
    if (this.form.invalid) {
      return;
    }
    const applicant: Applicant = {...originalApplicant, ...this.form.value};

    if (applicant.id === 0) {
      this.store.dispatch(ApplicantsActions.createApplicant({applicant}));
    } else {
      this.store.dispatch(ApplicantsActions.updateApplicant({applicant}));
    }
  }

  cancel(): void {
    this.store.dispatch(ApplicantsActions.clearApplicantId());
  }


  private patchFormValues(applicant: Applicant): void {
    if (applicant) {
      this.isSubmiting = false;
      this.form.reset();

      this.form.patchValue({
        name: applicant.name,
        email: applicant.email,
        age: applicant.age,
        socialNetwork: applicant.socialNetwork
      });
    }
  }


  get NameCtrl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get EmailCtrl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get AgeCtrl(): FormControl {
    return this.form.get('age') as FormControl;
  }

}
