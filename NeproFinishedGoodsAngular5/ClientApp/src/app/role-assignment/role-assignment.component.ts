import { Component } from '@angular/core';

@Component({
    selector: 'app-role-assignment',
    templateUrl: './role-assignment.component.html'
   
})
/** role-assignment component*/
export class RoleAssignmentComponent {
    /** role-assignment ctor */
    constructor() {

  }
  public data1: any[] = [
    {
      text: 'Role 1', items: [
        {
          text: 'Setup', items: [
            { text: 'Setup' },
            { text: 'Rack' }

          ]
        },
        {
          text: 'Pick List', items: [
            { text: 'Picking List' },

          ]
        }

      ]
  }
  ];
  public data2: any[] = [
    {
      text: 'Role 2', items: [
        {
          text: 'Setup', items: [
            { text: 'Setup' },
            { text: 'Rack' }

          ]
        },
        {
          text: 'Pick List', items: [
            { text: 'Picking List' },

          ]
        }

      ]
    }
  ];
  public data3: any[] = [
    {
      text: 'Role 3', items: [
        {
          text: 'Setup', items: [
            { text: 'Setup' },
            { text: 'Rack' }

          ]
        },
        {
          text: 'Pick List', items: [
            { text: 'Picking List' },

          ]
        }

      ]
    }
  ];
  public data4: any[] = [
    {
      text: 'Role 4', items: [
        {
          text: 'Setup', items: [
            { text: 'Setup' },
            { text: 'Rack' }

          ]
        },
        {
          text: 'Pick List', items: [
            { text: 'Picking List' },

          ]
        }

      ]
    }
  ];
}
