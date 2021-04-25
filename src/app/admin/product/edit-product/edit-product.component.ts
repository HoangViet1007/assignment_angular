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
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId : Number = -1 ; 
  cate : any ; 
  fac : any ; 
  editForm !: FormGroup ;
  downloadURL !: Observable<string> ;
  constructor(
    private route: ActivatedRoute , 
    private router : Router , 
    private productService : ProductService ,
    private cateService : CategoryesService,
    private factoryService : FactoryService ,
    private storage :AngularFireStorage
  ) { 
    this.editForm = this.validateForm() ;
  }

   async ngOnInit() {
      // laays id xuong 
     await this.route.params.subscribe(params => {
        this.productId = params.id ; 
        console.log(this.productId) ; 
      })

      // lay za dnah muc 
    await this.cateService.getAll().subscribe(data=>{
        this.cate = data;
    })

    // laays za fac 
    await this.factoryService.getAll().subscribe(data=>{
       this.fac = data ; 
    })

    // fill du lieu cu 
    await this.productService.getProductById(this.productId).subscribe(data=>{
      console.log(data);
        this.editForm.setValue({
             name : data.name ,
             price : data.price,
             sale : data.sale,
             quantity : data.quantity,
             description : data.description,
             categoryId : data.categoryId , 
             factoryId : data.factoryId,
             status : data.status,
             image : data.image,
             id : data.id
        }) ; 
    })
  }

  validateForm(){
    return new FormGroup({
      id: new FormControl(this.productId),
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
      ]),
      image: new FormControl('')
    });
  }

  get f(){
    return this.editForm.controls;
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
            this.editForm.value.image = url;
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

  updateProduct(event : any){
    event.preventDefault() ; 
     this.productService.updateProduct(this.editForm.value).subscribe(data => {
      Swal.fire(
        'Chỉnh sửa thành công !',
        'Chỉnh sửa thành công dữ liệu',
        'success'
      )
         this.router.navigate(['/admin/product/list-product']) ;
     })
  }




}
