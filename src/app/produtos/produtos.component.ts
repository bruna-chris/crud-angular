import { Component } from '@angular/core';
import { Ecommerce } from './model/ecommerce';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from "@angular/router";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    MatTableModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  produtos: Ecommerce [] = [];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.produtos = [];
  }

}
