import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BillComponent } from '.././bill/bill.component';


// when class does not have any own decorator and need to have a certain depedency
// like http in this case then injectable decorator is used.
// injectable means some depedency is injected in class not that class can be injected in other classes.
@Injectable()
export class Empservice implements OnInit {

  constructor(private _http:Http) { }

  private url:string = "http://localhost:2000/api/app/get_categories";
  private geturl:string = "http://localhost:2000/api/app/get_items";

  getCategories() {
        return this._http.get(this.url)
          .map((res:Response)=> res.json())
          .catch(this.errHandler);
  }

  getItemsForCategory(categoryId){
    return this._http.get(this.geturl + "/" + categoryId)
      .map((res:Response) => res.json())
      .catch(this.errHandler);
  }

  errHandler(error: Response){
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
  ngOnInit() {
  }

}
