import {Pipe, PipeTransform} from '@angular/core';
import {Applicant} from '../applicant';

@Pipe({
  name: 'orderListApplicants'
})
export class OrderListApplicantsPipe implements PipeTransform {

  lastProperty: string;

  transform(applicants: Applicant[], property: string): Applicant[] {
    if (!applicants) {
      return [];
    }
    if (!property) {
      return applicants;
    }
    const sorted = applicants.sort((a, b) => (a[property] > b[property]) ? 1 : -1);

    if (this.lastProperty === property) {
      this.lastProperty = '';
      return sorted.reverse();
    } else {
      this.lastProperty = property;
      return sorted;
    }




  }

}
