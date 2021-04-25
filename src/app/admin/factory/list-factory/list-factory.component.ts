import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factorys/factory.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-factory',
  templateUrl: './list-factory.component.html',
  styleUrls: ['./list-factory.component.css']
})
export class ListFactoryComponent implements OnInit {

  totalLength : any ;
  page = 1 ; 
  constructor( private factoryService : FactoryService , private router : Router , private route : ActivatedRoute) { }
 factoryData : any ; 
  ngOnInit(): void {
     // lay all data 
     this.factoryService.getAll().subscribe(data =>{
        this.factoryData = data;
        this.totalLength = data.length;
     })
  }

  removefactory(id : any){
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
        this.factoryService.deleteFactory(id).subscribe(data=> {
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
