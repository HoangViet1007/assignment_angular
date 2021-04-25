import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { FactoryService } from 'src/app/services/factorys/factory.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-factory',
  templateUrl: './add-factory.component.html',
  styleUrls: ['./add-factory.component.css']
})
export class AddFactoryComponent implements OnInit {

  constructor(private FactoryService : FactoryService , private router : Router , private route : ActivatedRoute) { 
    this.factoryForm = this.createForm() ; 
  }

  factoryForm !: FormGroup ; 
  ngOnInit(): void {

  }
  
  createForm(){
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ])
    });
  }

  get f(){
    return this.factoryForm.controls;
  }

  saveFactory(event:any){
     event.preventDefault();
     this.FactoryService.addFactory(this.factoryForm.value).subscribe(data =>{
      Swal.fire(
        'Thêm dữ liệu thành công !',
        'Thêm thành công dữ liệu',
        'success'
      )
         this.router.navigate(['/admin/factory/list-factory']) ;
     })
  }

}
