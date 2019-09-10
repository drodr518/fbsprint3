import { NgModule } from '@angular/core';
import { 
  Routes,
  RouterModule, 
  ExtraOptions, 
  PreloadAllModules 
} from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo: 'nav', pathMatch: 'full'},
  {path:'nav', loadChildren: () => import('./nav/nav.module').then (mod => mod.NavModule)},
  {path: '**', redirectTo: 'nav'}
];

const config: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
  onSameUrlNavigation: 'reload',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
