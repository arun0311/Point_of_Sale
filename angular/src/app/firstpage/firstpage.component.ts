import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  public userName;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onUserClick(name){
    if (name) {
      this.userName = name;
      this.router.navigate(['/main-page/'+ this.userName]);
    }
  }
}
