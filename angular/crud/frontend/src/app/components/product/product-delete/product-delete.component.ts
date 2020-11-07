import { Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  prod: Product

  constructor(
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) private data: Product,
    private dialogRef: MatDialogRef<ProductDeleteComponent>
  ) {
    this.prod = data
  }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso")
    })
  }

  close() {
    this.dialogRef.close()
  }

}
