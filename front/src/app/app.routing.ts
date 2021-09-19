import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { PrincipalComponent } from './principal/principal.component';
import { AgregarPostLocalComponent } from './agregar-post-local/agregar-post-local.component';
import { AgregarPostRemotoComponent } from './agregar-post-remoto/agregar-post-remoto.component';

export const AppRoutes: Routes = [
	{ path: '', component: PrincipalComponent },
	{ path: 'add', component: AgregarPostLocalComponent },
	{ path: 'add-remoto', component: AgregarPostRemotoComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes); 