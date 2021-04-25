import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAddComponent } from './admin/categories/categories-add/categories-add.component';
import { CategoriesEditComponent } from './admin/categories/categories-edit/categories-edit.component';
import { ListCategoriesComponent } from './admin/categories/list-categories/list-categories.component';
import { DashboardUnitComponent } from './admin/dashboard-unit/dashboard-unit.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddFactoryComponent } from './admin/factory/add-factory/add-factory.component';
import { EditFactoryComponent } from './admin/factory/edit-factory/edit-factory.component';
import { ListFactoryComponent } from './admin/factory/list-factory/list-factory.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ProductAddComponent } from './admin/product/product-add/product-add.component';
import { ProductDetailComponent } from './admin/product/product-detail/product-detail.component';
import { HomeComponent } from './clien/home/home.component';
import { ListProductClienComponent } from './clien/list-product-clien/list-product-clien.component';
import { ProductDetailClienComponent } from './clien/product-detail-clien/product-detail-clien.component';
import { UnitProductDetailComponent } from './clien/unit-product-detail/unit-product-detail.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClienComponent } from './layouts/layout-clien/layout-clien.component';

const routes: Routes = [
     {
       path : "",
       component : LayoutClienComponent ,
       children : [
        {
          path: "",
          redirectTo: "home",
          pathMatch: "full"
        },
         {
           path : "home",
           component : HomeComponent,
         },
         {
           path : "product-detail/:id",
           component : ProductDetailClienComponent ,
         },
         {
            path : "list-product/:categoryId",
            component : ListProductClienComponent
         },

         {
          path : "list-product",
          component : ListProductClienComponent
       }
       ]
      
     },
     {
      path : "admin",
      component : LayoutAdminComponent , // con cuar admin 
      children : [
        {
          path: "",
          redirectTo: "dashboard",
          pathMatch: "full"
        },
        {
          path: "dashboard",
          component: DashboardComponent
        },

        ////// demo routes

        {
          path: "demo",
          component: DashboardUnitComponent
        },


        // phan product
        {
          path : "product/list-product",
          component : ListProductComponent
        },
        {
          path : "product/add-product",
          component : ProductAddComponent
        },
        {
          path : "product/edit-product/:id",
          component : EditProductComponent 

        },
        {
          path : "product/product-detail/:id",
          component : ProductDetailComponent
        },

        // phan category 
        {
          path : "categories/list-categories",
          component : ListCategoriesComponent
        },
        {
          path : "categories/categories-add",
          component : CategoriesAddComponent
        }
        ,
        {
          path : "categories/categories-edit/:id",
          component : CategoriesEditComponent
        },

        // phan factory 
        {
          path : "factory/list-factory",
          component : ListFactoryComponent
        },
        {
          path : "factory/add-factory",
          component : AddFactoryComponent
        },
        {
          path : "factory/edit-factory/:id",
          component : EditFactoryComponent
        },
        //
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
