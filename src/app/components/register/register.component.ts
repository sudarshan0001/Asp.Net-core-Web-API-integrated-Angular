import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullName : ['',Validators.required],
      emailAddress : ['',Validators.required],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required],
      checkBox : ['',Validators.required]
    })
  }

  onSignUp(){
    this.auth.signUp(this.signUpForm.value).subscribe({
      next:(res=>{
        alert(res.message);
        this.signUpForm.reset();
        this.router.navigate(['login']);
      }),
      error:(err =>{
        alert(err?.error.message)
      })
    })

    console.log(this.signUpForm.value)
  }

}
