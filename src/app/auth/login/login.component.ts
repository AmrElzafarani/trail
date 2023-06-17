import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  authError = false;
  authMessage = "";
  showPassword = false;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () => {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login = () => {
    if (this.loginForm.invalid) {
      this.authMessage = "Please enter sign in credentials."
      this.authError = true
    } else {
      const payLoad = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.authService.userLogin(payLoad).subscribe((data) => {
        const domain = window.location.hostname;
        console.log(domain)
        console.log(document.cookie)
        // console.log(data.headers.get('Set-Cookie'))
      })
    }
  }

  togglePasswordVisibility(): void {

    this.showPassword = !this.showPassword;
  }

  showtogglePassword(): void {

    const toggle = document.getElementById("show-hide-password")

    if (toggle != null) {
      toggle.style.display = "inherit";
    }

  }
  hidetogglePassword(): void {

    const toggle = document.getElementById("show-hide-password")

    if (toggle != null) {
      toggle.style.display = "none";
    }

  }

}
