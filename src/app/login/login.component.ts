import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { LocationStrategy } from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showMore: boolean;

  constructor(private route: Router, private fb: FormBuilder) {

  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log("onSubmit", this.loginForm.value);
    this.route.navigate(['/mainpage']);
  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      pwd: ['']
    });

    this.showMore = false;

  } //ngOnInit

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    $(window).scroll(function () {
      // let position = $(document).height() - ($(window).scrollTop() + $(window).height())

      // console.log("Scroll down - 1");
      // document.getElementById('pqw').style.visibility = "hidden";


      if ($(window).scrollTop() <= ($(document).height() - $(window).height())) {
        console.log("At last Before", this.showMore);
        document.getElementById('pqw').style.visibility = "visible";
        document.getElementById('pqw').style.animation = "fadeIn 5s";
        // this.showMore = true;
        // console.log("At last", this.showMore);
      }

    });
  }



}
