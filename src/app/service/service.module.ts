import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
//import 
import { HttpClientModule } from '@angular/common/http';
//import
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ]
})
export class ServiceModule { }
