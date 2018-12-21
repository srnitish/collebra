import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { getParseErrors } from '@angular/compiler';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null):  boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    if( control.parent.untouched || control.pristine ){
          return null;
        }
    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  hide = true;
  
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(4)]],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      mobile:['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required]],
      confirmPassword: ['',[Validators.required]]
    }, { validator: this.checkPasswords });

  }

  // Password and confirmPassword
  checkPasswords(group: FormGroup) { 
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  // Email validation
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
  this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // Email validation ends


  // Mobile number validation
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  countries = [
    { id: 1, value: '+91-India' },
    { id: 2, value: 'Dep2' },
    { id: 3, value: 'Dep3' },
    { id: 4, value: 'Dep4' },
    { id: 5, value: 'Dep5' }];

  
  ngOnInit() { }

}
