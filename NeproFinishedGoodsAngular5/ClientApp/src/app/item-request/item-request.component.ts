import { Component } from '@angular/core';

@Component({
    selector: 'app-item-request',
    templateUrl: './item-request.component.html'
})
/** itemRequest component*/
export class ItemRequestComponent {
    /** itemRequest ctor */
  public show: boolean = false;
  public hide: boolean = true;

  showhide() {
    this.show = true;
    this.hide = false;
    //alert(this.hide);
  }
  showhide2() {
    this.show = false;
    this.hide = true;
    //alert(this.hide);
  }
  columnDefs = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 60 },
    { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, width: 90 },
    { headerName: 'Product Name', field: 'productname', sortable: true, filter: true, width: 110 },
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
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic:'qqqqq', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '2', productname: 'Pulse', productnameArabic: 'qqqqq',itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '3', productname: 'Rice', productnameArabic: 'qqqqq',itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '4', productname: 'Grapse', productnameArabic: 'qqqqq',itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '5', productname: 'Potato', productnameArabic: 'qqqqq', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
    { all: " ", checkboxSelection: true, itemno: '6', productname: 'Chilly', productnameArabic: 'qqqqq',itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },

  ];

  columnDefs1 = [
    { headerName: "All", checkboxSelection: true, field: "all", width: 60 },
    { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 105 },
    { headerName: 'Request Name', field: 'requestname', sortable: true, filter: true, width: 130 },
    { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 100 },
    { headerName: 'Requested Date', field: 'requesteddata', sortable: true, filter: true, width: 130 },
    { headerName: 'Requesting Warehouse', field: 'requestingwarehouse', sortable: true, filter: true, width: 160 },
    { headerName: 'Requested Submitted Date', field: 'submitteddata', sortable: true, filter: true, width: 180 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 80 }



  ];

  rowData1 = [
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '15-02-2017', requestingwarehouse: '20', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '15-02-2017', requestingwarehouse: '20', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '15-02-2017', requestingwarehouse: '20', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '15-02-2017', requestingwarehouse: '20', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '15-02-2017', requestingwarehouse: '20', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '15-02-2017', requestingwarehouse: '20', submitteddata: '15-02-2017', status: 'Active' },

  ];
}
