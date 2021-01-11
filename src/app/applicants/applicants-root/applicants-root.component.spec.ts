import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsRootComponent } from './applicants-root.component';

describe('ApplicantsRootComponent', () => {
  let component: ApplicantsRootComponent;
  let fixture: ComponentFixture<ApplicantsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantsRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
