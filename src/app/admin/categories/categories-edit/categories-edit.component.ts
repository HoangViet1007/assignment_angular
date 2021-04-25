import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { CategoryesService } from 'src/app/services/categories/categoryes.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  constructor(private router : Router , private route : ActivatedRoute , private CategoryService : CategoryesService) {
      this.editForm = this.createForm() ; 
   }
   cateId : Number = -1 ;
   editForm !: FormGroup ; 

  async ngOnInit() {
       await this.route.params.subscribe(params =>{
         this.cateId = params.id ; 
       })

       // set lai value cho form 
       this.CategoryService.getCateById(this.cateId).subscribe(data =>{
           this.editForm.setValue({id:data.id , name:data.name}) ; 
       })
  }

  get f(){
    return this.editForm.controls;
  }

  createForm(): FormGroup{
    return new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ])
    })
  }

  saveCate(event : any){
      event.preventDefault();
      this.CategoryService.updateCate(this.editForm.value).subscribe(data =>{
        Swal.fire(
          'Đã update thành công !',
          'Update thành công dữ liệu',
          'success'
        )
           this.router.navigate(['/admin/categories/list-categories']) ;
      })
  }

}
