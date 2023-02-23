import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserloginService } from '../services/userlogin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserloginService]
})
export class HeaderComponent {

  userdata: any[] = [];
  credential: string = '';
  fetchedData: any = [{
    name: 'Nabihah'
  }];
  names: any = 'Shahbaz';

  nameChange(event: any){
    console.log(event.target.value);
    }
  addressChange(event: any){
      console.log(event.target.value);
    }
  genderDefine(event: any){
    console.log(event.target.checked);
  }
  registerUser(){
    console.log("Registered");
  }
  userDetailsOnHover(){

  }

  constructor(private loginuserservice: UserloginService, 
              private route: Router)
  {
    this.userdata= this.loginuserservice.getUserData();

    
  }

  getUserEmail()
  {
    console.log('Credential',this.credential);
    if(this.credential != ''){
      this.fetchedData = this.loginuserservice.getUserByEmail(this.credential);
    }
    //alert(this.credential);
  }
}
