import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 1, firstname: 'Mr. Nice' , lastname: 'Niceman' , age : 25},
      { id: 2, firstname: 'Narco' , lastname: 'Opasito' , age : 24},
      { id: 3, firstname: 'Bombasto' , lastname: 'Opasito' , age : 26},
      { id: 4, firstname: 'Celeritas' , lastname: 'Cinciaty' , age : 35},
      { id: 5, firstname: 'Magneta' , lastname: 'Avogolo' , age : 51},
      { id: 6, firstname: 'RubberMan' , lastname: 'Erasing' , age : 33},
      { id: 7, firstname: 'Dynama' , lastname: 'Mice' , age : 28},
      { id: 8, firstname: 'Dr IQ' , lastname: 'Heisenberg' , age : 22},
      { id: 9, firstname: 'Magma' , lastname: 'Naja' , age : 43},
      { id: 10, firstname: 'Tornado' , lastname: 'Ovaltine' , age : 38}
    ];

    return {employees};
  }
}
