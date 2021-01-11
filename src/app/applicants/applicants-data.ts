import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Applicant} from './applicant';


export class InMemoryApplicantsDataService implements InMemoryDbService {
  createDb(): any {
    const applicants: Applicant[] = [
      {
        id: 1,
        name: 'Edgar Uriel Saldaña Hurtado',
        age: 27,
        email: 'uriel_utn@hotmail.com',
        socialNetwork: 'LINKEDIN'
      },
      {
        id: 2,
        name: 'Francisco Perez Mendoza',
        age: 20,
        email: 'fmendoza@hotmail.com',
        socialNetwork: 'OCC'
      },
      {
        id: 3,
        name: 'Diana Ramirez Lopez',
        age: 32,
        email: 'dianar@hotmail.com',
        socialNetwork: 'JOBEMPLEOS'
      },
      {
        id: 4,
        name: 'Arturo Rentería Aguilar',
        age: 32,
        email: 'dianar@hotmail.com',
        socialNetwork: 'INDEED'
      }
    ];
    return {applicants};
  }
}
