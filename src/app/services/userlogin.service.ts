import { Injectable } from '@angular/core';

@Injectable()
export class UserloginService {

  private userlist = [
    {
      "id": 1,
      "name": "Nabihah",
      "email":"Nabihah@gmail.com"
    },

    {
      "id": 2,
      "name": "Shabaz",
      "email":"Shabaz@gmail.com"
    },
  ]

  private categories = [
    {
        "id":1,
        "Product_name": "Grocery",
        "pic": "cycle.png"
    },
    {
      "id":2,
      "Product_name": "Mobiles",
      "pic": "grocery.png"
    },
    {
    "id":3,
    "Product_name": "Fashion",
    "pic": "Grocerybag.png"
    },
    {
      "id":4,
      "Product_name": "Electronics",
      "pic": "Electronic.png"
    },
    {
      "id":5,
      "Product_name": "Electronics",
      "pic": "mobile.png"
    },
    {
      "id":6,
      "Product_name": "Electronics",
      "pic": "Grocerybag.png"
    },
    {
      "id":7,
      "Product_name": "Electronics",
      "pic": "Electronic.png"
    },
    {
      "id":8,
      "Product_name": "Groceries",
      "pic": "Grocerybag.png"
    },
    {
      "id":9,
      "Product_name": "Fence",
      "pic": "fence.png"
    }
    ,
    {
      "id":10,
      "Product_name": "Fence",
      "pic": "Grocerybag.png"
    }

  ]
  
  constructor() {}

getUserData(){
  return this.userlist;
}

getUserByEmail(email:string){
  return this.userlist.filter(u => u.email == email);
}

getProductCategories(){
  return this.categories;
}
}
