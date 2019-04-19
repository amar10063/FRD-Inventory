import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { UserAccount } from '../Services/AccountService';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
  
})
/** user component*/
export class UserComponent implements OnInit{
    /** user ctor */
  myAppUrl: string = "";
  userForm: FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder, private _employeeService: UserAccount, private _router: Router, private http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }
  

  
  ngOnInit() {
    this.userForm = this.formbuilder.group({
      username: ['', Validators.required],
      EmailId: ['', Validators.required],
      password: ['', Validators.required],
      userpin: ['', Validators.required],
      StorePicker: ['', Validators.required],
      InventoryController: ['', Validators.required]
    });


  }
  userSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

   

  }
  get f() { return this.userForm.controls; }

  save() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value));

    if (!this.userForm.valid) {
      return;
    }

   
    //this._employeeService.saveUser(this.userForm.value)
    //  .subscribe(() => {
    //    alert('Data saved Successfully');
    //    this.userForm.reset();
       
    //  });
    this.http.post(this.myAppUrl + 'api/controller/CreateUser', this.userForm.value).subscribe((data) => {
      alert(data['_body']);
       this.userForm.reset();

      });
    
    
   
  }
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }  

}

