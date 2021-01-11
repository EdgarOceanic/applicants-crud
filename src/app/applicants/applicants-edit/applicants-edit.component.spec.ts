import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsEditComponent } from './applicants-edit.component';

describe('ApplicantsEditComponent', () => {
  let component: ApplicantsEditComponent;
  let fixture: ComponentFixture<ApplicantsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
