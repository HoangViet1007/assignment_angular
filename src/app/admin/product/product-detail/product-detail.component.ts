import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : any  ;
  productId : any ; 
  constructor(private route: ActivatedRoute , private ProductService : ProductService , private router : Router) { }
  async ngOnInit() {
      await this.route.params.subscribe(params => {
         this.productId = params['id'] ; 
         console.log(this.productId) ; 
      });

      await this.ProductService.getProductById(this.productId).subscribe(data => {
        this.product = data; 
        console.log(this.product) ; 
      });      
  }

  removeProduct(){
    Swal.fire({
      title: 'Bạn có chắc muốn xoá không !',
      text: 'Nếu xoá sẽ không khôi phục được dữ liệu !',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Huỷ bỏ'
    }).then((result) => {
      if (result.value) {
        // thưc hiện xoá ở đây
        this.ProductService.removeProduct(this.productId).subscribe(data=>{
          Swal.fire(
            'Đã xoá !',
            'Xoá thành công dữ liệu',
            'success'
          )
            this.router.navigate(['/admin/product/list-product']);
        })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Đã huỷ',
          'Huỷ thao tác xoá dữ liệu !',
          'error'
        )
      }
    })
  }

}
