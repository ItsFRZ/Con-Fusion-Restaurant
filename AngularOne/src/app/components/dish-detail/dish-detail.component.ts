import { Component, OnInit } from '@angular/core';
import {Dish} from '../../shared/dish';
import {Comment} from '../../shared/comment';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DishService} from '../../services/dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish : Dish;

  constructor(private dishService : DishService,
    private route : ActivatedRoute,
    private location : Location) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id)
        .then((dish) => this.dish = dish); 

  }

  goBack() : void{
    this.location.back();
  }


}
