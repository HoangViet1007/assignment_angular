import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { CategoryesService } from 'src/app/services/categories/categoryes.service';
import { FactoryService } from 'src/app/services/factorys/factory.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute , 
    private router : Router , 
    private productService : ProductService ,
    private cateService : CategoryesService,
    private factoryService : FactoryService ,
    private storage :AngularFireStorage) { 
        this.createForm = this.validateForm() ; 
     }


  createForm !: FormGroup ; 
  downloadURL !: Observable<string> ; 


  cate : any ; 
  fac : any ; 
  ngOnInit(): void {
    // lay za cate 
    this.cateService.getAll().subscribe(data =>{
        this.cate = data ; 
    })
    // lay za fac 
    this.factoryService.getAll().subscribe(data =>{
       this.fac = data ; 
    })

  }



  upload(event : any){
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `Uploads/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Uploads/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            this.createForm.value.image = url;
            console.log(url);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  validateForm(){
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      sale: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      quantity: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(20)
      ]),
      categoryId: new FormControl('', [
        Validators.required
      ]),
      factoryId: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ])
      ,
      image: new FormControl('')
    });
  }

  get f(){
    return this.createForm.controls;
  }

  createProduct(event:any){
      this.productService.createProduct(this.createForm.value).subscribe(data=>{
        Swal.fire(
          'Đã thêm thành công !',
          'Thêm thành công dữ liệu',
          'success'
        )
           this.router.navigate(['/admin/product/list-product']) ;
      })
  }

  
}
