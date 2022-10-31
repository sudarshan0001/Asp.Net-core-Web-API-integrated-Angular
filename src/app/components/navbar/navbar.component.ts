//import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { searchProduct } from 'src/app/models/search-Item';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  searchForm!: FormGroup;
  products: searchProduct[] = [];
//  inputvalue : string ='';
  data : any;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchItem : ['',Validators.required]
    })
  }

  public search(){
    // this.auth.onSearch('Iphone 14').subscribe(
    //   posts => this.products = <searchProduct[]>posts,
    //   error => console.error(error)
    // )

    // this.auth.signUp(this.searchForm.value).subscribe({
    //   next:(res=>{
    //     alert(res.message);
    //     this.searchForm.reset();
    //     this.router.navigate(['login']);
    //   }),
    //   error:(err =>{
    //     alert(err?.error.message)
    //   })
    // })
    // this.data = this.searchForm.value;
    // console.log(this.data[0].searchItem);
    
    // console.log(this.searchForm.value);
    // console.log();
    this.auth.onSearch(this.searchForm.value)
    .subscribe((result: searchProduct[])=> (this.products = result));

    // this.auth.onSearch(this.searchForm.value).subscribe({
    //   next:((res:searchProduct[])=>
    //   (this.products = res))}),
    //   error:(err =>{
    //     alert(err?.error.message)
    //   })
    // })



  }

}
