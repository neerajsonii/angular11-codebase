import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidatorService } from '../../../shared/services/custom-form-validator.service';
import { countries, Countries } from './register.constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  countries: Countries[] = countries;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly formValidator: CustomFormValidatorService,
  ) { }

  ngOnInit(): void { 
    this.initRegisterForm();
  }

  handleRegister(): void { 
    console.table(this.registerForm.value);
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: this.formBuilder.control(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      lastName: this.formBuilder.control(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      email: this.formBuilder.control(null,[Validators.required, Validators.email]),
      phone: this.formBuilder.control(null,[Validators.required, Validators.pattern(/^[789]\d{9}$/)]),
      password: this.formBuilder.control(null, Validators.required),
      confirmPassword: this.formBuilder.control(null, Validators.required),
      address: this.formBuilder.group({ // nested form-group -> this.registerForm.value.address
        city: this.formBuilder.control(null, [Validators.required]),
        countryId: this.formBuilder.control(null, [Validators.required]),
      }),
    }, {
      validators: [this.formValidator.compareValidator('confirmPassword', 'password')]
    });
  }
}
