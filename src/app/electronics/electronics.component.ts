import { Component } from '@angular/core';
import { ElectronicservicesService } from '../services/electronicservices.service';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
  providers: [ElectronicservicesService]
})
export class ElectronicsComponent {
  electronic_products: any[] = [];
  typeOfProd: any[] = [];
  products: any[] = [];
  pagination: any[] = [];
  start = 0;
  pageSize = 7;
  totalNoOfPage = 0;
  numberOfProducts = 0;
  end = this.pageSize;
  constructor(private electronic: ElectronicservicesService) {
    this.electronic_products = this.electronic.getElectronic_ProductsList();
    this.typeOfProd = this.electronic.getTypesofProduct();
  }

  createPagination() {
    this.pagination = [];
    for (let i = 1; i <= this.totalNoOfPage; i++) {
const temp = {
  page: i, isSelected: false 
}
this.pagination.push(temp);
    }
  }

  checkchanges(x: any) {
    this.products.push(...this.electronic_products.filter(x => x.Product_type));
    //this.products = this.electronic_products
    //alert(this.products);
    this.numberOfProducts = this.products.length;
    this.totalNoOfPage = Math.ceil(this.numberOfProducts / this.pageSize);
    console.log(this.totalNoOfPage);

    this.createPagination();
  }

  ngOnInit(): void {

  }

  nextPage() {
    this.start = this.end;
    this.end += this.pageSize;
    if (this.end >= this.products.length) {
      this.start = this.products.length - this.pageSize;
      this.end = this.products.length;
    }
  }

  previousPage() {
    this.end = this.start;
    this.start -= this.pageSize;

    if (this.start <= 0) {
      this.start = 0;
      this.end = this.pageSize;
    }
  }


}
