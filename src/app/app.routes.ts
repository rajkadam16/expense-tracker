import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { StatisticsComponent } from './features/expense/statistics/statistics.component';
import { ExpenseTrackerComponent } from './features/expense/expense-tracker/expense-tracker.component';
import { OverviewComponent } from './features/expense/overview/overview.component';
import { ReviewComponent } from './shared/components/review/review.component';
import { BlogComponent } from './shared/components/blog/blog.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'overview', component: OverviewComponent,
        children: [
           { path: '', redirectTo: '/overview/expense-tracker', pathMatch: 'full' },
              { path: 'expense-tracker', component: ExpenseTrackerComponent },
              {path: 'statistics', component: StatisticsComponent},
              {path: 'review', component: ReviewComponent},
              {path: 'blog', component: BlogComponent}

        ]
    }
];
