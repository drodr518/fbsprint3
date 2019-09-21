import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ]
})
export class HomeModule { }
