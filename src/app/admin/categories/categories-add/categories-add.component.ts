import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryesService } from 'src/app/services/categories/categoryes.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {

  constructor( private router : Router, private categoryService : CategoryesService) {
    this.cateForm = this.createForm() ; 
   }

  cateForm !: FormGroup ; 
  ngOnInit(): void {
  }

  createForm(){
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    });
  }

  get f(){
    return this.cateForm.controls;
  }

  saveCate(event: any){
     event.preventDefault();
     this.categoryService.addCate(this.cateForm.value).subscribe(data =>{
      Swal.fire(
        'Đã thêm thành công !',
        'Thêm thành công dữ liệu',
        'success'
      )
         this.router.navigate(['/admin/categories/list-categories']) ;
     })
  }

}
