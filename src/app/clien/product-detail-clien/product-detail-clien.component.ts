import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detail-clien',
  templateUrl: './product-detail-clien.component.html',
  styleUrls: ['./product-detail-clien.component.css']
})
export class ProductDetailClienComponent implements OnInit {

  constructor(private ProductService: ProductService , private route : ActivatedRoute , private router : Router) { }
  
  product : any ; 
  productid : any ;
  productCate : any ; 
  idCate !: Number ; 
  async ngOnInit() {
     // laays id 
     await this.route.params.subscribe(data => {
        this.productid = data.id ; 
     })

     // lay data  
     await this.ProductService.getProductById(this.productid).subscribe(data => {
       this.product = data ; 
       this.idCate = data.categoryId ;
       console.log(this.idCate);
          this.ProductService.getProductByCategory(this.idCate).subscribe(data => {
            this.productCate = data;
            console.log(this.productCate);
          })
     })
     this.getproduct(this.productid);

     // lấy za liên quan 

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 15,
    pullDrag: true,
    dots: true,
    navSpeed: 900,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
 
  getproduct(id : Number){
     this.ProductService.getProductById(id).subscribe(data => {
       this.product = data ; 
     })
  }



}
