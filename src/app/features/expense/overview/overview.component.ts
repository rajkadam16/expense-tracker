import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExpenseTrackerComponent } from "../expense-tracker/expense-tracker.component";

@Component({
  selector: 'app-overview',
  imports: [RouterOutlet, ExpenseTrackerComponent,RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
