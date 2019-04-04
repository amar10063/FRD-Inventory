import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
  
})
/** user component*/
export class UserComponent {
    /** user ctor */
    constructor() {

  }
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 60 },
    { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, width: 90 },
    { headerName: 'Product Name', field: 'productname', sortable: true, filter: true, width: 120 },
    { headerName: 'Product Name in Arabic', field: 'productnameArabic', sortable: true, filter: true, width: 170 },
    { headerName: 'Item Comment', field: 'itemcomment', sortable: true, filter: true, width: 130 },
    { headerName: 'Site', field: 'siteRequestedQuantity', sortable: true, filter: true, width: 80 },
    { headerName: 'Warehouse', field: 'warehouse', sortable: true, filter: true, width: 100 },
    { headerName: 'Unit', field: 'unit', sortable: true, filter: true, width: 80 },
    { headerName: 'Available in Requested Warehouse', field: 'requestedAvailability', sortable: true, filter: true, width: 225 },
    { headerName: 'Availability In Branch', field: 'branchAvailability', sortable: true, filter: true, width: 160 },
    { headerName: 'Requested Quantity', field: 'requestedQuantity', sortable: true, filter: true, width: 160 },
    { headerName: 'Attachment', field: 'attachment', sortable: true, filter: true, width: 100 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 85 },
    { headerName: 'Transfer Order No.', field: 'transferOrderNo', sortable: true, filter: true, width: 150 }

  ];

  rowData = [
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '2', productname: 'Pulse', productnameArabic: 'qqqqq', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '3', productname: 'Rice', productnameArabic: 'qqqqq', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '4', productname: 'Grapse', productnameArabic: 'qqqqq', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '5', productname: 'Potato', productnameArabic: 'qqqqq', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '6', productname: 'Chilly', productnameArabic: 'qqqqq', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },

  ];
}
