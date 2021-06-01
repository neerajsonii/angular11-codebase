import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = null;
  isLoginSuccess: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initLoginForm();
    this.setDefaultValues();
  }

  handleLogin(): void { 
    if (this.loginForm.value.password !== '123' ) {
      this.errorMessage = 'Login Failed';
    } else {
      this.isLoginSuccess = !this.isLoginSuccess;
      this.router.navigateByUrl('/products')
    }
  }

  private initLoginForm(): void { 
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
  }

  private setDefaultValues(): void { // this is to set the default values to the form
    this.loginForm.setValue({ username: 'username@email.com', password: '123' });
   }

  private handleFormValueChanges(): void { // this is to handle changes made to form
    this.loginForm.valueChanges.subscribe(values => { 
      console.table(values);
    })
   }
}
