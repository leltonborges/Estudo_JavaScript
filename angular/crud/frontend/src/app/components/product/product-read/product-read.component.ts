import { Router } from '@angular/router';
import { ProductDeleteComponent } from './../product-delete/product-delete.component';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  delete(prod: Product) {
    const dialogRef = this.dialog.open(ProductDeleteComponent, { data: prod });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        setTimeout(()=> {
          window.location.reload()
        }, 2000)
      }
    });
  }

  ngOnInit(): void {
    this.productService.read().subscribe(resp => {
      this.products = resp
    })
  }

}
