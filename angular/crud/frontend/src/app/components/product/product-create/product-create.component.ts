import { HeaderService } from './../../template/header/header.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  }

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  priceFormControl = new FormControl('', [
    Validators.required
  ])

  constructor(
    private productService: ProductService,
    private router: Router,
    private headerService: HeaderService
  ) { 
    headerService.headerData ={
      title: 'Novo produto',
      icon: 'queue',
      routerUrl: '/products/create'
    }
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
