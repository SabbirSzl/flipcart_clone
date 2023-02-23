import { Component, OnInit } from '@angular/core';
import { Data } from './interfaces/data';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent {


  applyBoldClass = false;
  applyColorClass = false;
  applyItalicClass = false;
  applyHiddenClass = false;
  hideDetailsButton = false;
  showDetailsButton = true;

  userDetailsOnHover(): void{
    console.log("See-List");
  }

  hideDetails(){
    this.applyBoldClass = false;
    this.applyColorClass = false;
    this.applyHiddenClass = true;
    this.hideDetailsButton = true;
    this.showDetailsButton = false;

  }
  showDetails()
  {
    this.applyBoldClass = true;
    this.applyColorClass = true;
    this.applyHiddenClass = false;
    this.showDetailsButton = true;
    this.hideDetailsButton = false;
  }

  constructor(){}

  data = [
    {
      "FirstName":"Sabbir",
      "LastName":"Sozol",
      "Gender":"Male",
      "Blood":"O+VE"
    },
    {
      "FirstName":"Sharaha",
      "LastName":"Shorna",
      "Gender":"Female",
      "Blood":"O+VE"
    },
    {
      "FirstName":"Sharaha",
      "LastName":"Shorna",
      "Gender":"Female",
      "Blood":"O+VE"
    }
  ];
}
