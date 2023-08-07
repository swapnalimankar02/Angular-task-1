import { Component, OnInit } from '@angular/core';
import { ProductLists } from '../shared/product-lists.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

  getProductList : any[] = [];
  qtyArr :any[]=[];
  tableProductsArr :any[] =[];
  tTotalAmt = 0;
  constructor(private http : ProductLists){   

  }

  ngOnInit(): void {
    this.getLists();
  }
  getLists(){
    this.http.getProductsList().subscribe((res : any)=>{
      this.getProductList = res;
      console.log(this.getProductList);
      this.qtyArr = Array(this.getProductList.length).fill(1)
    })    
  }
  decrement(i:any){
    if(this.qtyArr[i] > 1){
      this.qtyArr[i]--;
    }
  }
  increment(i:any){
    this.qtyArr[i]++
  }
  addToTable(list:any, total:number, tTotal:number){
    console.log(list);
    this.tableProductsArr.push({...list, total, tTotal})
    console.log(this.tableProductsArr);
    this.tTotalAmt= this.tTotalAmt + tTotal  
   }
   resetBag(){
    this.tableProductsArr=[];
    this.tTotalAmt=0;
   }
}
