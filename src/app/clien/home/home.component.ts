import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ProductService: ProductService) { }
  pro : any ; 
  pro2 : any ; 
  aoCate : any ; 
  allCate : any ; 

  formShirt = {} ;
  ngOnInit(): void {
    this.search2(100) ;
      // lấy za danh mục áo  
      // this.ProductService.getcateClien().subscribe(data =>{
      //    this.aoCate = data ;
      // })
      this.ProductService.getProductStatus().subscribe(data =>{
        this.pro = data ;
      })
      

      this.ProductService.getcateClien2().subscribe(data =>{
        this.allCate = data ;
      })
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

  // search1(filter : Number){
  //     this.ProductService.getProductclien(filter).subscribe(data => {
  //         this.pro = data ; 
  //     })
  // }
  search2(filter : Number){
    this.ProductService.getProductclien2(filter).subscribe(data =>{
       this.pro2 = data ; 
    })
  }

}
