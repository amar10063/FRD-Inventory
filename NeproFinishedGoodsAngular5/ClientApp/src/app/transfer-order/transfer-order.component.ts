import { Component } from '@angular/core';

@Component({
    selector: 'app-transfer-order',
    templateUrl: './transfer-order.component.html'
  
})
/** transferOrder component*/
export class TransferOrderComponent {
  public show: boolean = false;
  public hide: boolean = true;

  doubleClick() {
    this.show = true;
    this.hide = false;   
  }
  doubleClick2() {
    this.show = false;
    this.hide = true;
  }
  columnDefs1 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 70 },
    { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 125 },
    { headerName: 'Request Name', field: 'requestname', sortable: true, filter: true, width: 140 },
    { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 120 },   
    { headerName: 'Requesting Branch', field: 'requestingBranch', sortable: true, filter: true, width: 150 },
    { headerName: 'Requested Submitted Date', field: 'submitteddataStatus', sortable: true, filter: true, width: 250 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 90 }

  ];

  rowData1 = [
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', requestingBranch: 'XYZ', submitteddataStatus: '14-03-2014', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', requestingBranch: 'XYZ', submitteddataStatus: '14-03-2014', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', requestingBranch: 'XYZ', submitteddataStatus: '14-03-2014', status: 'Active'},
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', requestingBranch: 'XYZ', submitteddataStatus: '14-03-2014', status: 'Active'},
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', requestingBranch: 'XYZ', submitteddataStatus: '14-03-2014', status: 'Active'},
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', requestingBranch: 'XYZ', submitteddataStatus: '14-03-2014', status: 'Active'},
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', requestingBranch: 'XYZ', submitteddataStatus: '14-03-2014', status: 'Active'},
    { all: " ", checkboxSelection: true, requestno: '123', requestname: 'Rice', createdby: 'Amarjeet', requestingBranch: 'XYZ', submitteddataStatus: '14-03-2014', status: 'Active'},

  ];
  columnDefs2 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 60 },
    { headerName: 'Transfer No', field: 'transferNo', sortable: true, filter: true, width: 125 },
    { headerName: 'From Warehouse', field: 'fromWarehouse', sortable: true, filter: true, width: 135 },
    { headerName: 'To Warehouse', field: 'toWarehouse', sortable: true, filter: true, width: 150 },
    
    { headerName: 'Ship Date', field: 'shipDate', sortable: true, filter: true, width: 170 },
    { headerName: 'Receipt Date', field: 'receiptDate', sortable: true, filter: true, width: 150 },
    { headerName: 'Transfer status', field: 'transferStatus', sortable: true, filter: true, width: 165 },

  ];

  rowData2 = [
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },
    { all: " ", checkboxSelection: true, transferNo: '123', fromWarehouse: 'Delhi', toWarehouse: 'Mumbai', shipDate: '20-02-2014', receiptDate: '20-03-2015', transferStatus: 'Active' },

  ];
}
