import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailAddress : ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  onLogin(){
    this.auth.login(this.loginForm.value).subscribe({
      next:(res=>{
       // if(res.message)
        console.log(res.message);
       // this.router.navigate(['home']);
      }),
      error:(err=>{
        alert(err.error.message)
      })
    })
    console.log(this.loginForm.value);
  }

}
