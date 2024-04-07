import {Component} from "@angular/core";

@Component({
  selector:'app-success-alert',
  template: `
  <h2>Success alert template</h2>
  `,
  styles: [`
    h2{
      color: green;
      padding: 20px;
      background-color: lightgreen;
    }
  `]

})
export class SuccessAlertComponent {}
