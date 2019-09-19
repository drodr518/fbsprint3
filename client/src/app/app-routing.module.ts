import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ExtraOptions,
  PreloadAllModules
} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'nav/dashboard', pathMatch: 'full'},
  {path: 'nav', loadChildren: () => import('./nav/nav.module').then (mod => mod.NavModule), runGuardsAndResolvers: 'always'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)},
  {path: 'security', loadChildren: () => import('./security/security.module').then(mod => mod.SecurityModule)},
  {path: '**', redirectTo: 'nav/dashboard'}
];

const config: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  preloadingStrategy: PreloadAllModules,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
