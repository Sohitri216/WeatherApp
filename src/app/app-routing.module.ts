import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/components/login/login.component';
import { DashboardComponent } from './weather/components/dashboard/dashboard.component';
import { DetailsComponent } from './weather/components/details/details.component';
import { CustomComponent } from './weather/components/custom/custom.component';


export const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'details/:lat/:lng',
		component: DetailsComponent
	},
	{
		path: 'custom',
		component:CustomComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
