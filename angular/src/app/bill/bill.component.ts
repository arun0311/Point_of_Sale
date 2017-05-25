import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  @Input() buyersList;
  @Input() totalPrice;
  constructor() { }

  ngOnInit() {
  }
printbill() {
  window.print();
}

}
