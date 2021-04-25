import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryesService } from 'src/app/services/categories/categoryes.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-list-product-clien',
  templateUrl: './list-product-clien.component.html',
  styleUrls: ['./list-product-clien.component.css']
})
export class ListProductClienComponent implements OnInit {

  constructor(private ProductService: ProductService ,private CategoryService: CategoryesService, private route : ActivatedRoute , private router : Router ) { }
  cate : any ; 

  formFilter = {
    name : "",
    order : "",
  }

  totalLength : any ; 
  page = 1  ;

  order: any[] = [
    {
      id: "1",
      name: "Giá tăng dần"
    },
    {
      id: "2",
      name: "Giá giảm dần"
    },
    {
      id: "3",
      name: "Mới nhất"
    },
    {
      id: "4",
      name: "Cũ nhất"
    }
    
  ];

  productId !: Number ; 
  productData : any ; 

  async ngOnInit() {
    // laays id treen dduowngf daanx xuoongs 
    await this.route.params.subscribe(params => {
      this.productId = params.categoryId ; 
    });
    await this.search() ;
    // laays za danh mucj 
    await this.CategoryService.getAll().subscribe(data => {
      this.cate = data ; 
    })


  }

  search(){
     this.ProductService.getProductclienList(this.productId,this.formFilter).subscribe(data => {
       this.productData = data ;
       this.totalLength = data.length ;
     })
  }

  

}
