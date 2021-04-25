import { Component, OnInit } from '@angular/core';
import { CategoryesService } from 'src/app/services/categories/categoryes.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  dataProduct !: any[] ; 
    // pagination 
  totalLength : any ; 
  page = 1  ;

  filterObject = {
    keyword: "",
    orderBy: "0",
    cate : "0"
  }

  orderCondition: any[] = [
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
      name: "Giá cao nhất"
    },
    {
      id: "4",
      name: "Giá thấp nhất"
    }
    
  ];

  cate : any ; 

  constructor(private ProductService : ProductService , private CategoryService : CategoryesService) { }
  ngOnInit(): void {
      this.search() ; 

      // laays za cacs cate 
      this.CategoryService.getAll().subscribe(data => {
           this.cate = data ; 
      })
  }

  search(){
     this.ProductService.getAllProduct(this.filterObject).subscribe(data =>{
        this.dataProduct = data ; 
        this.totalLength = data.length ; 
     })
  }

}
 