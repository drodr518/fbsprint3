import { MainComponent } from './main/main.component';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: MainComponent, children: [
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NavRoutingModule {}