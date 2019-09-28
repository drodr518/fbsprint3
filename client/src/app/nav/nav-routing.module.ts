import { MainComponent } from './main/main.component';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: MainComponent, children: [
        {path: 'courses', loadChildren: () => import('../courses/courses.module').then(mod => mod.CoursesModule)},
        {path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)},
        {path: 'helppage', loadChildren: () => import('../helppage/helppage.module').then(mod => mod.HelppageModule)},
        {path: 'home', loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule)},
        {path: 'security', loadChildren: () => import('../security/security.module').then(mod => mod.SecurityModule)},
        {path: 'new-course', loadChildren: () => import('../new-course/new-course.module').then(mod => mod.NewCourseModule)},
      ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NavRoutingModule {}
