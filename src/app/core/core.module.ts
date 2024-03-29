import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [ApiService]
})
export class CoreModule { }
