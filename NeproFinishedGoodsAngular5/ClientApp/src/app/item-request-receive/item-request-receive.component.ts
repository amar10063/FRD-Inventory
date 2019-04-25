import { Component } from '@angular/core';

@Component({
    selector: 'app-item-request-receive',
    templateUrl: './item-request-receive.component.html'
   
})
/** item-request-receive component*/
export class ItemRequestReceiveComponent {
    /** item-request-receive ctor */
    constructor() {

  }
  columnDefs1 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 60 },
    { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 105 },  
    { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 100 },
    { headerName: 'Requesting Branch', field: 'requestingbranch', sortable: true, filter: true, width: 150 },
    { headerName: 'Requested Submitted Date', field: 'submitteddate', sortable: true, filter: true, width: 180 },
    { headerName: 'Request Status for MWH', field: 'statusMWH', sortable: true, filter: true, width: 170 },  
    { headerName: 'Request Status for CK', field: 'statusCK', sortable: true, filter: true, width: 150 },  

  ];

  rowData1 = [
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: 'Fateh', requestingbranch: 'Branch1', submitteddate: '15-02-2017', statusMWH: 'Active', statusCK: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '2', requestname: 'Rice', createdby: 'Fateh', requestingbranch: 'Branch1', submitteddate: '15-02-2017', statusMWH: 'Active', statusCK: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '3', requestname: 'Rice', createdby: 'Fateh', requestingbranch: 'Branch1', submitteddate: '15-02-2017', statusMWH: 'Active', statusCK: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '4', requestname: 'Rice', createdby: 'Fateh', requestingbranch: 'Branch1', submitteddate: '15-02-2017', statusMWH: 'Active', statusCK: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '5', requestname: 'Rice', createdby: 'Fateh', requestingbranch: 'Branch1', submitteddate: '15-02-2017', statusMWH: 'Active', statusCK: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '6', requestname: 'Rice', createdby: 'Fateh', requestingbranch: 'Branch1', submitteddate: '15-02-2017', statusMWH: 'Active', statusCK: 'Active' },

  ];
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 60 },
    { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, width: 90 },
    { headerName: 'Name', field: 'productname', sortable: true, filter: true, width: 130 },
    { headerName: 'Name(A)', field: 'productnameArabic', sortable: true, filter: true, width: 150 },
    { headerName: 'Warehouse', field: 'warehouse', sortable: true, filter: true, width: 130 },
    { headerName: 'Unit', field: 'unit', sortable: true, filter: true, width: 130 },
    { headerName: 'Available in RWH', field: 'availability', sortable: true, filter: true, width: 145 },
    { headerName: 'Availability in Branch', field: 'availabilitybranch', sortable: true, filter: true, editable: true, width: 125 },
    { headerName: 'Requested Quantity', field: 'requestedQuantity', sortable: true, filter: true, width: 160 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 130 },
    { headerName: 'Transfer Order No', field: 'transferno', sortable: true, filter: true, width: 130 },
    { headerName: 'Comments', field: 'comments', sortable: true, filter: true, width: 130 }
  ];

  rowData = [
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', warehouse: 'Warehouse1', unit: '100', availability: '120', availabilitybranch: '10', requestedQuantity: '100', status: 'Active', transferno: 'TN101', comments: 'no comments' },


  ];
}
