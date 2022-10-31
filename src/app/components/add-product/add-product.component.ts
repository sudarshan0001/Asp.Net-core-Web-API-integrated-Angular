import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  createForm!: FormGroup;
  constructor(private fb: FormBuilder,private auth: AuthService) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      cellPhoneName:['',Validators.required],
      cellPhoneURL :['',Validators.required],
      cellPhoneBrand :['',Validators.required],
      cellPhonePrice :['',Validators.required],
      cellPhoneCategory: ['',Validators.required]
    })
  }

  onCreate(){
    this.auth.create(this.createForm.value).subscribe({
      next:(res=>{
        alert(res.message);
        this.createForm.reset();
        //this.router.navigate(['login']);
      }),
      error:(err =>{
        alert(err?.error.message)
      })
    })
  }

}
