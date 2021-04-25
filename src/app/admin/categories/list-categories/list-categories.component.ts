import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryesService } from 'src/app/services/categories/categoryes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {


  totalLength : any ; 
  page = 1 ;
  constructor(private CategoriesService : CategoryesService , private router : Router , private route : ActivatedRoute) { 
  }

  dataCate : any ; 
  ngOnInit(): void {
      this.CategoriesService.getAll().subscribe(data=>{
         this.dataCate = data;
         this.totalLength = data.length;
      })
  }

  removeCate(id : any){
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
        this.CategoriesService.deleteCate(id).subscribe(data => {
          Swal.fire(
            'Đã xoá !',
            'Xoá thành công dữ liệu',
            'success'
          )
          // xử lí load lại trang 
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
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
