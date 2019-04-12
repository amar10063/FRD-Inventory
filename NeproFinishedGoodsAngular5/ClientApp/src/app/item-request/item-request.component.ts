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
    { headerName: 'Item Name', field: 'productname', sortable: true, filter: true, width: 150 },
    { headerName: 'Item Name in Arabic', field: 'productnameArabic', sortable: true, filter: true, width: 170 },
    { headerName: 'To Warehouse', field: 'toWarehouse', sortable: true, filter: true, width: 160 },
    { headerName: 'Required Quantity', field: 'requiredQuantity', sortable: true, filter: true, width: 190 },   
    { headerName: 'Reason', field: 'reason', sortable: true, filter: true, width: 115 },

  ];

  rowData = [
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', requiredQuantity: '100', reason:'no stock'},
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', requiredQuantity: '100', reason: 'no stock' },
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', requiredQuantity: '100', reason: 'no stock' },
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', requiredQuantity: '100', reason: 'no stock' },
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', requiredQuantity: '100', reason: 'no stock' },
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', requiredQuantity: '100', reason: 'no stock' },
    { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', requiredQuantity: '100', reason: 'no stock' },

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
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },
    { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: 'Fateh', requesteddata: '15-02-2017', requestingwarehouse: 'No details found', submitteddata: '15-02-2017', status: 'Active' },

  ];
}
