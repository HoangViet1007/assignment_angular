import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { FactoryService } from 'src/app/services/factorys/factory.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-factory',
  templateUrl: './edit-factory.component.html',
  styleUrls: ['./edit-factory.component.css']
})
export class EditFactoryComponent implements OnInit {


  facId : Number = -1 ; 
  editFactoryForm !: FormGroup ; 

  constructor(private FactoryService : FactoryService , private router : Router, private route : ActivatedRoute) { 
     this.editFactoryForm = this.createForm() ; 
  }

  async ngOnInit() {
    await this.route.params.subscribe(params =>{
      this.facId = params.id ; 
    })

    await this.FactoryService.getFactoryById(this.facId).subscribe(data => {
      this.editFactoryForm.setValue({id: data.id, name: data.name});
    })
  }

  createForm(): FormGroup{
    return new FormGroup({
      id: new FormControl(-1),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ])
    })
  }


  get f(){
    return this.editFactoryForm.controls;
  }


  updateFactory(event : any) {
    event.preventDefault() ; 
    this.FactoryService.updateFactory(this.editFactoryForm.value).subscribe(data=>{
      Swal.fire(
        'Đã update thành công !',
        'Update thành công dữ liệu',
        'success'
      )
         this.router.navigate(['/admin/factory/list-factory']) ;
    })
  }

}
