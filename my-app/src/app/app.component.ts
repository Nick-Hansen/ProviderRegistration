import { Component } from '@angular/core';
import { Provider } from './provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Provider Registration';

  allProviders = [];

  get providers() {
    return this.allProviders.sort((a, b) => (a.lastName > b.lastName) ? 1 : (a.lastName === b.lastName) ? ((a.firstName > b.firstName) ? 1 : -1) : -1 );
  }

  addProvider(firstName: string,lastName: string,npiNumber: string,addressLineOne: string,addressLineTwo: string,addressCity: string,addressState: string,addressZip: string,telephoneNumber: string,emailAddress: string) {
    this.allProviders.unshift(
      { 
        firstName:firstName,
        lastName:lastName,
        npiNumber:npiNumber,
        addressLineOne:addressLineOne,
        addressLineTwo:addressLineTwo,
        addressCity:addressCity,
        addressState:addressState,
        addressZip:addressZip,
        telephoneNumber:telephoneNumber,
        emailAddress:emailAddress
      });
  }
}
