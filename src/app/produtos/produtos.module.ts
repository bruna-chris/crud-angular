import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProdutosComponent } from './produtos.component';
import { RouterModule } from "@angular/router";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    ProdutosComponent,
    RouterModule
  ]
})
export class ProdutosModule { }
