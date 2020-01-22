import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(private route: Router,private fb:FormBuilder) {

  }
  get f(){
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log("onSubmit",this.loginForm.value);
    this.route.navigate(['/mainpage']);  
  }

  ngOnInit() {

this.loginForm =  this.fb.group({
 email: ['', [Validators.required, Validators.minLength(3)]],
 pwd: ['']
});

  }

}
