import { Component, OnInit } from '@angular/core';
import { producthome } from 'src/app/models/product-home';
import { ProductHomeService } from 'src/app/services/product-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: producthome[] = [];
  constructor(private producthomeservice: ProductHomeService) { }
  
  ngOnInit(): void {
    this.producthomeservice.getProductHome().subscribe((result: producthome[])=> (this.products = result));
  }

}
