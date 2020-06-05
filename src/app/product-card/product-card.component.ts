import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
  @Input()
  title = '';
  @Input()
  text = '';
  @Input()
  img_url = '';

  constructor() { }

  ngOnInit(): void {
  }

}