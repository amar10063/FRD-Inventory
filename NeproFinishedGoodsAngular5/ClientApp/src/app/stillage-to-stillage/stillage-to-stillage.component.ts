import { Component } from '@angular/core';

@Component({
    selector: 'app-stillage-to-stillage',
    templateUrl: './stillage-to-stillage.component.html'
   
})
/** stillage-to-stillage component*/
export class StillageToStillageComponent {

  columnDefs1 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 70 },
    { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 125 },
    { headerName: 'Request Name', field: 'requestname', sortable: true, filter: true, width: 130 },
    { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 120 },   
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 90 },
    { headerName: 'Requesting Branch', field: 'requestingBranch', sortable: true, filter: true, width: 150 },
    { headerName: 'Requested Submitted Data Status', field: 'submitteddataStatus', sortable: true, filter: true, width: 250 },
   
  ];

  rowData1 = [
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', status: 'Active', requestingBranch: 'XYZ', submitteddataStatus: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', status: 'Active', requestingBranch: 'XYZ', submitteddataStatus: 'Active'},
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', status: 'Active', requestingBranch: 'XYZ', submitteddataStatus: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', status: 'Active', requestingBranch: 'XYZ', submitteddataStatus: 'Active'},
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', status: 'Active', requestingBranch: 'XYZ', submitteddataStatus: 'Active'},
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', status: 'Active', requestingBranch: 'XYZ', submitteddataStatus: 'Active'},
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', status: 'Active', requestingBranch: 'XYZ', submitteddataStatus: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', status: 'Active', requestingBranch: 'XYZ', submitteddataStatus: 'Active'},

  ];
  columnDefs2 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 60 },
    { headerName: 'Transfer No', field: 'transferNo', sortable: true, filter: true, width: 125 },
    { headerName: 'From Warehouse', field: 'fromWarehouse', sortable: true, filter: true, width: 135 },
    { headerName: 'To Warehouse', field: 'toWarehouse', sortable: true, filter: true, width: 150 },
    { headerName: 'Transfer status', field: 'transferStatus', sortable: true, filter: true, width: 145 },
    { headerName: 'Ship Date', field: 'shipDate', sortable: true, filter: true, width: 130 },
    { headerName: 'receipt Date', field: 'receiptDate', sortable: true, filter: true, width: 150 },

  ];

  rowData2 = [
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', transferStatus: 'Active', shipDate: '20-02-2014', receiptDate: '20-03-2015' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', transferStatus: 'Active', shipDate: '20-02-2014', receiptDate: '20-03-2015' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', transferStatus: 'Active', shipDate: '20-02-2014', receiptDate: '20-03-2015' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', transferStatus: 'Active', shipDate: '20-02-2014', receiptDate: '20-03-2015' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', transferStatus: 'Active', shipDate: '20-02-2014', receiptDate: '20-03-2015' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', transferStatus: 'Active', shipDate: '20-02-2014', receiptDate: '20-03-2015' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', transferStatus: 'Active', shipDate: '20-02-2014', receiptDate: '20-03-2015' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', transferStatus: 'Active', shipDate: '20-02-2014', receiptDate: '20-03-2015' },

  ];
}
