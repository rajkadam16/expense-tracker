import { Component } from '@angular/core';
import { DeleteTransctionComponent } from "../../../shared/components/delete-transction/delete-transction.component";

@Component({
  selector: 'app-expense-tracker',
  imports: [DeleteTransctionComponent],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent {

}
