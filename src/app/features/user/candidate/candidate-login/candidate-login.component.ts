import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateSingleResponse } from 'src/app/models/user/candidate/candidateSingleResponse';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.css']
})
export class CandidateLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private toastrService: ToastrService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  
  login(){
      this.userService.login(this.loginForm.get("email").value, this.loginForm.get("password").value)
        .subscribe(res => {
          this.toastrService.success("giriş yapıldı.")
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("userType", "2");
          this.router.navigate([""]);
        }, 
        (err: HttpErrorResponse) => this.toastrService.error(err.error.data.errors["uk"]));
    }

}
