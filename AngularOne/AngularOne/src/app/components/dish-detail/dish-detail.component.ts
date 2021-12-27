import { Component, OnInit, Input } from '@angular/core';
import {Dish} from '../../shared/dish';
import {Comment} from '../../shared/comment';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  dish : Dish;


}
