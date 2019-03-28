import { Component } from '@angular/core';

@Component({
    selector: 'app-line-to-fg-warehouse',
    templateUrl: './line-to-fg-warehouse.component.html'
   
})
/** line-to-fg-warehouse component*/
export class LineToFgWarehouseComponent {
    /** line-to-fg-warehouse ctor */
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

  columnDefs1 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 70 },
    { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 125 },
    { headerName: 'Request Name', field: 'requestname', sortable: true, filter: true, width: 150 },
    { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 120 },
    { headerName: 'Requested Data', field: 'requesteddata', sortable: true, filter: true, width: 150 },
    { headerName: 'Requesting Warehouse', field: 'requestingwarehouse', sortable: true, filter: true, width: 180 },
    { headerName: 'Requested Submitted Data', field: 'submitteddata', sortable: true, filter: true, width: 190 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 90 },
    { headerName: 'Accept', field: 'accept', sortable: true, filter: true, width: 90 },
    { headerName: 'Reject', field: 'reject', sortable: true, filter: true, width: 90 }



  ];

  rowData1 = [
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '150', requestingwarehouse: '20', submitteddata: 'kg', status: 'Active', accept: 'Accept', reject: 'Reject' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '150', requestingwarehouse: '20', submitteddata: 'kg', status: 'Active', accept: 'Accept', reject: 'Reject'},
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '150', requestingwarehouse: '20', submitteddata: 'kg', status: 'Active', accept: 'Accept', reject: 'Reject'},
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '150', requestingwarehouse: '20', submitteddata: 'kg', status: 'Active', accept: 'Accept', reject: 'Reject'},
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '150', requestingwarehouse: '20', submitteddata: 'kg', status: 'Active', accept: 'Accept', reject: 'Reject'},
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '150', requestingwarehouse: '20', submitteddata: 'kg', status: 'Active', accept: 'Accept', reject: 'Reject'},
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '150', requestingwarehouse: '20', submitteddata: 'kg', status: 'Active', accept: 'Accept', reject: 'Reject'},

  ];
  columnDefs2 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 70 },
    { headerName: 'Item Name', field: 'itemName', sortable: true, filter: true, width: 125 },
    { headerName: 'Batch No.', field: 'batchNo', sortable: true, filter: true, width: 110 },
    { headerName: 'Expiry Date', field: 'expiryDate', sortable: true, filter: true, width: 150 },
    { headerName: 'Available Quantity', field: 'availableQuantity', sortable: true, filter: true, width: 145 },
    { headerName: 'Requested Quantity', field: 'requestQuantity', sortable: true, filter: true, width: 150 },




  ];

  rowData2= [
    { all: " ", checkboxSelection: true, itemName: 'Rice', batchNo: '123', expiryDate: '20-05-2017', availableQuantity: '150', requestQuantity: '20' },
    { all: " ", checkboxSelection: true, itemName: 'Rice', batchNo: '123', expiryDate: '20-05-2017', availableQuantity: '150', requestQuantity: '20' },
    { all: " ", checkboxSelection: true, itemName: 'Rice', batchNo: '123', expiryDate: '20-05-2017', availableQuantity: '150', requestQuantity: '20' },
    { all: " ", checkboxSelection: true, itemName: 'Rice', batchNo: '123', expiryDate: '20-05-2017', availableQuantity: '150', requestQuantity: '20' },
    { all: " ", checkboxSelection: true, itemName: 'Rice', batchNo: '123', expiryDate: '20-05-2017', availableQuantity: '150', requestQuantity: '20' },
    { all: " ", checkboxSelection: true, itemName: 'Rice', batchNo: '123', expiryDate: '20-05-2017', availableQuantity: '150', requestQuantity: '20' },
    { all: " ", checkboxSelection: true, itemName: 'Rice', batchNo: '123', expiryDate: '20-05-2017', availableQuantity: '150', requestQuantity: '20' },
    { all: " ", checkboxSelection: true, itemName: 'Rice', batchNo: '123', expiryDate: '20-05-2017', availableQuantity: '150', requestQuantity: '20' },

  ];

}
