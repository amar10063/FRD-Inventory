import { Component } from '@angular/core';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html'
   
})
/** role component*/
export class RoleComponent {
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 150},
    { headerName: 'S.No', field: 'SNo', width: 400 },
    { headerName: 'Role Name', field: 'RoleName', sortable: true, filter: true, width: 350 },
    ];

  rowData = [

    { all: " ", checkboxSelection: true, SNo: '1', RoleName: 'Role 1' },
    { all: " ", checkboxSelection: true, SNo: '2', RoleName: 'Role 2' },
    { all: " ", checkboxSelection: true, SNo: '3', RoleName: 'Role 3' },
    { all: " ", checkboxSelection: true, SNo: '4', RoleName: 'Role 4' },
    { all: " ", checkboxSelection: true, SNo: '5', RoleName: 'Role 5' },
    { all: " ", checkboxSelection: true, SNo: '6', RoleName: 'Role 6' },
    { all: " ", checkboxSelection: true, SNo: '7', RoleName: 'Role 7' },
    { all: " ", checkboxSelection: true, SNo: '8', RoleName: 'Role 8' },
    { all: " ", checkboxSelection: true, SNo: '9', RoleName: 'Role 9' },


  ];




  public data: any[] = [
    {
      text: 'Role 1', items: [
        { text: 'Setup', items: [
          { text: 'Setup' },
          { text: 'Rack' }

        ] },
        {
          text: 'Pick List', items: [
            { text: 'Picking List' },

          ] }
        
      ]
    }
  ];
}
