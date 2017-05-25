import { Component } from '@angular/core';
import { Empservice } from './service/emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ Empservice ]
})

export class AppComponent {
  public title:string = 'app works!';
  }
