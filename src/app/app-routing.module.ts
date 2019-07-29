import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/components/login/login.component';
import { DashboardComponent } from './weather/components/dashboard/dashboard.component';
import { DetailsComponent } from './weather/components/details/details.component';
import { CustomComponent } from './weather/components/custom/custom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './weather/components/search/search.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [LoginGuard]
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [LoginGuard]
	},
	{
		path: 'details/:lat/:lng',
		component: DetailsComponent,
		canActivate: [LoginGuard]
	},
	{
		path: 'search',
		component: SearchComponent
	},
	{
		path: 'custom',
		component: CustomComponent,
		canActivate: [AuthGuard]
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
