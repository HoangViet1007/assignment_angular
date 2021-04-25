import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutClienComponent } from "./layouts/layout-clien/layout-clien.component";
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './clien/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './admin/product/product-add/product-add.component';
import { ProductDetailComponent } from './admin/product/product-detail/product-detail.component';
import { ListCategoriesComponent } from './admin/categories/list-categories/list-categories.component';
import { CategoriesAddComponent } from './admin/categories/categories-add/categories-add.component';
import { CategoriesEditComponent } from './admin/categories/categories-edit/categories-edit.component';
import { EditFactoryComponent } from './admin/factory/edit-factory/edit-factory.component';
import { AddFactoryComponent } from './admin/factory/add-factory/add-factory.component';
import { ListFactoryComponent } from './admin/factory/list-factory/list-factory.component';
// upload file 
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';

// pagination 
import {NgxPaginationModule} from 'ngx-pagination';
import { ListProductClienComponent } from './clien/list-product-clien/list-product-clien.component';

// carosel
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailClienComponent } from './clien/product-detail-clien/product-detail-clien.component';
import { UnitProductDetailComponent } from './clien/unit-product-detail/unit-product-detail.component';
import { DashboardUnitComponent } from './admin/dashboard-unit/dashboard-unit.component';

// cusstomer pipes
import { GenderPipe } from './pipes/gender.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LayoutClienComponent,
    LayoutAdminComponent,
    ListProductComponent,
    DashboardComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ListCategoriesComponent,
    CategoriesAddComponent,
    CategoriesEditComponent,
    EditFactoryComponent,
    AddFactoryComponent,
    ListFactoryComponent,
    EditProductComponent,
    ListProductClienComponent,
    ProductDetailClienComponent,
    UnitProductDetailComponent,
    DashboardUnitComponent,
    GenderPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule , 
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
