import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryesService } from 'src/app/services/categories/categoryes.service';

@Component({
  selector: 'app-layout-clien',
  templateUrl: './layout-clien.component.html',
  styleUrls: ['./layout-clien.component.css']
})
export class LayoutClienComponent implements OnInit {

  constructor( private router: Router , private route : ActivatedRoute , private CategoryesService : CategoryesService) { }
  cateData : any ; 
  ngOnInit(): void {
     this.CategoryesService.getAll().subscribe(data => {
        this.cateData = data ; 
     })
  }

}
