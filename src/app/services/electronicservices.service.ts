import { Injectable } from '@angular/core';

@Injectable()
export class ElectronicservicesService {
private product_type = [
  {
    "id":1,
    "type": "Mobile",
    "isSelected": false
  },
  {
    "id":2,
    "type": "Laptop",
    "isSelected": false
  },
  {
    "id":3,
    "type": "Lifestyle",
    "isSelected": false
  },
  {
    "id":4,
    "type": "Camera",
    "isSelected": false
  }
]
  private Electronic_Products = [
    {
        "id":1,
        "Product_name": "Samsung Note 9",
        "Product_type": "Mobile",
        "Product_year": "2018",
        "Product_price": "699",
        "pic": "cycle.png",
        "isSelected": false
    },
    {
      "id":2,
      "Product_name": "Symphony P6",
      "Product_type": "Mobile",
      "Product_year": "2016",
      "Product_price": "110",
      "pic": "cycle.png",
      "isSelected": false
    },
    {
      "id":3,
      "Product_name": "Oppo F7 128GB",
      "Product_type": "Mobile",
      "Product_year": "2018",
      "Product_price": "350",
      "pic": "cycle.png",
      "isSelected": false
  },
      {
        "id":4,
        "Product_name": "HP Pavilion i5 11th Gen",
        "Product_type": "Laptop",
        "Product_year": "2017",
        "Product_price": "799",
        "pic": "cycle.png",
        "isSelected": false
      },
      {
        "id":5,
        "Product_name": "M1 Macbook Air ",
        "Product_type": "Laptop",
        "Product_year": "2020",
        "Product_price": "899",
        "pic": "cycle.png",
        "isSelected": false
      },
      {
        "id":6,
        "Product_name": "M2 Macbook Air 2022",
        "Product_type": "Laptop",
        "Product_year": "2022",
        "Product_price": "1099",
        "pic": "cycle.png",
        "isSelected": false
      },
      {
        "id":7,
        "Product_name": "M2 Macbook pro 2023",
        "Product_type": "Laptop",
        "Product_year": "2023",
        "Product_price": "1899",
        "pic": "cycle.png",
        "isSelected": false
      },
      {
        "id":8,
        "Product_name": "Hair Trimmer",
        "Product_type": "Lifestyle",
        "Product_year": "2018",
        "Product_price": "30",
        "pic": "cycle.png",
        "isSelected": false
      },
      {
        "id":8,
        "Product_name": "Nikon 700D",
        "Product_type": "Camera",
        "Product_year": "2017",
        "Product_price": "600",
        "pic": "cycle.png",
        "isSelected": false
      },
  ]
  constructor() { }

  getElectronic_ProductsList(){
    return this.Electronic_Products;
  }
  getTypesofProduct(){
    return this.product_type;
  }
}
