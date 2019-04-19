import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule  } from '@angular/forms';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
  
})
/** user component*/
export class UserComponent implements OnInit{
    /** user ctor */
  userForm: FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder) {

  }
  


  
  ngOnInit() {
    this.userForm = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userpin: ['', Validators.required],
      cpassword: ['', Validators.required],
      storepicker: ['', Validators.required],
      controller: ['', Validators.required]
    });


  }
  userSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value));

  }
  get f() { return this.userForm.controls; }
}
