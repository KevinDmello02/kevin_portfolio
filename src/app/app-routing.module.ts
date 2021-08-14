import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioOverviewComponent } from './pages/portfolio-overview/portfolio-overview.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
