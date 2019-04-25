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
    { headerName: "All", checkboxSelection: true, field: "all", editable:true, width: 60 },
    { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, editable: true, width: 90 },
    { headerName: 'Name', field: 'productname', sortable: true, filter: true, editable: true, width: 100 },
    { headerName: 'Name(A)', field: 'productnameArabic', sortable: true, filter: true, editable: true, width: 100 },
    { headerName: 'Warehouse', field: 'warehouse', sortable: true, filter: true, editable: true, width: 100 },
    { headerName: 'Unit', field: 'unit', sortable: true, filter: true, editable: true, width: 100 },
    { headerName: 'Available in RWH', field: 'availability', sortable: true, filter: true, editable: true, width: 145 },
    { headerName: 'Availability in Branch', field: 'availabilitybranch', sortable: true, filter: true, editable: true, width: 145 },
    { headerName: 'Requested Quantity', field: 'requestedQuantity', sortable: true, filter: true, editable: true, width: 160 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, editable: true, width: 100 },
    { headerName: 'Transfer Order No', field: 'transferno', sortable: true, filter: true, editable: true, width: 130 },
    { headerName: 'Comments', field: 'comments', sortable: true, filter: true, editable: true, width: 100 }
  ];

  rowData = [
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', warehouse: 'Warehouse1', unit: '100', availability: '120', availabilitybranch: '10', requestedQuantity: '100', status: 'Active', transferno: 'TN101', comments: 'no comments' },
    { all: " ", checkboxSelection: true, itemno: '2', productname: 'Rice', productnameArabic: 'qqqqq', warehouse: 'Warehouse1', unit: '100', availability: '120', availabilitybranch: '10', requestedQuantity: '100', status: 'Active', transferno: 'TN101', comments: 'no comments' },
    { all: " ", checkboxSelection: true, itemno: '3', productname: 'Rice', productnameArabic: 'qqqqq', warehouse: 'Warehouse1', unit: '100', availability: '120', availabilitybranch: '10', requestedQuantity: '100', status: 'Active', transferno: 'TN101', comments: 'no comments' },
    { all: " ", checkboxSelection: true, itemno: '4', productname: 'Rice', productnameArabic: 'qqqqq', warehouse: 'Warehouse1', unit: '100', availability: '120', availabilitybranch: '10', requestedQuantity: '100', status: 'Active', transferno: 'TN101', comments: 'no comments' },
    { all: " ", checkboxSelection: true, itemno: '5', productname: 'Rice', productnameArabic: 'qqqqq', warehouse: 'Warehouse1', unit: '100', availability: '120', availabilitybranch: '10', requestedQuantity: '100', status: 'Active', transferno: 'TN101', comments: 'no comments' },
    { all: " ", checkboxSelection: true, itemno: '6', productname: 'Rice', productnameArabic: 'qqqqq', warehouse: 'Warehouse1', unit: '100', availability: '120', availabilitybranch: '10', requestedQuantity: '100', status: 'Active', transferno: 'TN101', comments: 'no comments' },


  ];

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
}
