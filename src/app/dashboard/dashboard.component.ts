import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from '../services/userlogin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [UserloginService]
})
export class DashboardComponent {
  categories: any = [];

  constructor(private userLogin: UserloginService,
              private route: Router
    ){
    this.categories = this.userLogin.getProductCategories();
  }
  logoClick(p_name: string){

    this.route.navigate([p_name],{ queryParams: {Product_name:p_name}});
    //alert(p_name);
  }
}
