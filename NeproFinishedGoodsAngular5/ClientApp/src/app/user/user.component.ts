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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', Validators.required],
      userpin: ['', Validators.required],
      StorePicker: ['', Validators.required],
      InventoryController: ['', Validators.required]
    });


  }
  get f() { return this.userForm.controls; }

  save() {
    this.submitted = true;
   
    if (!this.userForm.valid) {
      return;
    }   

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value)); 

   
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


  columnDefs1 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 60 },
    { headerName: 'User Name', field: 'username', sortable: true, filter: true, width: 145 },
    { headerName: 'E-mail', field: 'email', sortable: true, filter: true, width: 170 },   
    { headerName: 'User Pin', field: 'userpin', sortable: true, filter: true, width: 130 },
    { headerName: 'Controller', field: 'controller', sortable: true, filter: true, width: 160 },
    { headerName: 'Store Picker', field: 'storepicker', sortable: true, filter: true, width: 180 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 80 }



  ];

  rowData1 = [
    { all: " ", checkboxSelection: true, username: 'Amar', email: 'amar@gmail.com', userpin: '12345', controller: 'Y', storepicker: 'N',  status: 'Active' },
    { all: " ", checkboxSelection: true, username: 'Amar', email: 'amar@gmail.com', userpin: '12345', controller: 'Y', storepicker: 'N', status: 'Active' },
    { all: " ", checkboxSelection: true, username: 'Amar', email: 'amar@gmail.com', userpin: '12345', controller: 'Y', storepicker: 'N', status: 'Active' },
    { all: " ", checkboxSelection: true, username: 'Amar', email: 'amar@gmail.com', userpin: '12345', controller: 'Y', storepicker: 'N', status: 'Active' },
    { all: " ", checkboxSelection: true, username: 'Amar', email: 'amar@gmail.com', userpin: '12345', controller: 'Y', storepicker: 'N', status: 'Active' },
    
  ];
}

