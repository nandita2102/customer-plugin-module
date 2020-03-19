import { Component, OnInit } from '@angular/core';
import { CUSTOMER_DATA } from 'src/mock-data/CustomerData';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{

  title = 'customer-plugin-module';
  displayedColumns: string[] = ['id', 'firstName', 'lastName' ,'email'];
  dataSource = CUSTOMER_DATA;

  ngOnInit(): void {
    console.log(this.dataSource);
  }
}
