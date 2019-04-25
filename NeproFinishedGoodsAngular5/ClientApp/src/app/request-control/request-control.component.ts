import { Component } from '@angular/core';

@Component({
    selector: 'app-request-control',
    templateUrl: './request-control.component.html'
   
})
/** requestControl component*/
export class RequestControlComponent {
  constructor() {

  }

  public show: boolean = false;
  public hide: boolean = true;

  //showhide() {
  //  this.show = true;
  //  this.hide = false;  
  //}
  //showhide2() {
  //  this.show = false;
  //  this.hide = true;    
  //}
  //columnDefs = [
  //  { headerName: "All", checkboxSelection: true, field: "all", width: 70 },
  //  { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, width: 100 },
  //  { headerName: 'Product Name', field: 'productname', sortable: true, filter: true, width: 150 },
  //  { headerName: 'Item Comment', field: 'itemcomment', sortable: true, filter: true, width: 150 },
  //  { headerName: 'Site Requested Quantity', field: 'siteRequestedQuantity', sortable: true, filter: true, width: 220 },
  //  { headerName: 'Warehouse', field: 'warehouse', sortable: true, filter: true, width: 120 },
  //  { headerName: 'Unit', field: 'unit', sortable: true, filter: true, width: 90 },
  //  { headerName: 'Available in requested warehouse', field: 'requestedAvailability', sortable: true, filter: true, width: 225 },
  //  { headerName: 'Availability in branch', field: 'branchAvailability', sortable: true, filter: true, width: 200 },
  //  { headerName: 'Requested Quantity', field: 'requestedQuantity', sortable: true, filter: true, width: 200 },
  //  { headerName: 'Attachment', field: 'attachment', sortable: true, filter: true, width: 100 },
  //  { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 85 },
  //  { headerName: 'Transfer Order No.', field: 'transferOrderNo', sortable: true, filter: true, width: 150 }

  //];

  //rowData = [
  //  { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '2', productname: 'Pulse', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '3', productname: 'Rice', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '4', productname: 'Grapse', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '5', productname: 'Potato', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '6', productname: 'Chilly', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },

  //];

  //columnDefs1 = [
  //  { headerName: "All", checkboxSelection: true, field: "all", width: 70 },
  //  { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 125 },
  //  { headerName: 'Request Name', field: 'requestname', sortable: true, filter: true, width: 150 },
  //  { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 120 },
  //  { headerName: 'Requested Date', field: 'requesteddata', sortable: true, filter: true, width: 150 },
  //  { headerName: 'Requesting Warehouse', field: 'requestingwarehouse', sortable: true, filter: true, width: 180 },
  //  { headerName: 'Requested Submitted Date', field: 'submitteddata', sortable: true, filter: true, width: 190 },
  //  { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 90 }
  



  //];

  //rowData1 = [
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active' },
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active'},
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active'},
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active' },
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active'},
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active' },
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active'},

  //];
  columnDefs1 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 60 },
    { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 105 },
    { headerName: 'Request Name', field: 'requestname', sortable: true, filter: true, width: 130 },
    { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 100 },
    { headerName: 'Created On', field: 'requesteddata', sortable: true, filter: true, width: 130 },
    { headerName: 'Description', field: 'requestingwarehouse', sortable: true, filter: true, width: 160 },
    { headerName: 'Requested Submitted Date', field: 'submitteddata', sortable: true, filter: true, width: 180 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 80 }



  ];

  rowData1 = [
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '2', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '3', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '4', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '5', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '6', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },

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
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', warehouse: 'Warehouse1', unit: '100', availability: '120', availabilitybranch: '10', requestedQuantity: '100', status: 'Active', transferno: 'TN101', comments: 'no comments'},
   

  ];

}
