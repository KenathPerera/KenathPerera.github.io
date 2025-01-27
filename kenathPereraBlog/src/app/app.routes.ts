import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { CustomAuthDotnetComponent } from './components/projects/custom-auth-dotnet/custom-auth-dotnet.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'custom-auth-dotnet', component: CustomAuthDotnetComponent },
];

