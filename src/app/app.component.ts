import { Component } from '@angular/core';
import { producthome } from './models/product-home';
import { ProductHomeService } from './services/product-home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductManagementApp';
 

  constructor(){}

  ngOnInit(): void{
    
  } 
}
