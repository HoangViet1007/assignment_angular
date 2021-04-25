import { Component, OnInit } from '@angular/core';
import { CategoryesService } from 'src/app/services/categories/categoryes.service';
import { FactoryService } from 'src/app/services/factorys/factory.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ProductService : ProductService , private CategoryService : CategoryesService , private FactoryService : FactoryService) { }

  demoInput = 1 ; 
  count_cate : any ; 
  count_pro : any ; 
  count_fac : any ; 
  ngOnInit(): void {
    // dem cate 
    this.CategoryService.getAll().subscribe(data => {
       this.count_cate = data.length ; 
    })
    // dem fac 
    this.FactoryService.getAll().subscribe(data => {
      this.count_fac = data.length ; 
    })

    // dem pro 
    this.ProductService.getAll().subscribe(data => {
      this.count_pro = data.length ; 
    })
  }

  ConsoleLog(event :any){
       console.log(event) ; 
  }

}
