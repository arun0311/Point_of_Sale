import { Component, OnInit, Input } from '@angular/core';
import { Empservice } from '.././service/emp.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userName;
  categoryList = [];
  activeCategory;
  errMsg: string;
  itemList = [];
  pay = [];
  count = 1;
  buyList = [];
  courses = [];
  public totalPrice = 0;
  public billdisplay:boolean = false;
  public display:boolean = true;
  constructor(private _empservice: Empservice, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._empservice.getCategories().subscribe(res => {
    this.courses = res.body;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
        this.userName = params['userName'];
      });
  }

  selectCategory(item){
    this.activeCategory = item.category;
    this._empservice.getItemsForCategory(item.category).subscribe(res => {
    this.itemList = res.body;
    });
  }

  selectItem(item){
    console.log(item.name)
       var buyItem;
       var itemArray = this.buyList.filter(function(single){
         return (single.name == item.name);
       });

       if(itemArray.length > 0){
          buyItem = itemArray[0];
          buyItem.quantity++;
       }else {
           buyItem = {
             no: this.count,
             name: item.name,
             quantity: 1,
             price: item.price
           };
           this.count++;
           this.buyList.push(buyItem);
        }
        this.totalPrice = this.totalPrice + item.price;
    }

    billPay(){
      this.billdisplay = true;
      this.display = false;

    }

}
