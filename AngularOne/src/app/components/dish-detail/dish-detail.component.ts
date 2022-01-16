import { Component, OnInit,Inject } from '@angular/core';
import {Dish} from '../../shared/dish';
import {Comment} from '../../shared/comment';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DishService} from '../../services/dish.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish : Dish;
  dishIds : string[];
  prev : string;
  next : string;

  constructor(private dishService : DishService,
    private route : ActivatedRoute,
    private location : Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    
    this.dishService.getDishIds()
        .subscribe((ids) => this.dish = ids);

    this.route.params
        .pipe(switchMap((params : Params) => this.dishService.getDish(params['id'])))
        .subscribe((dish) => { this.dish = dish; this.setPrevNext(dish.id); }); 

       
  }


  setPrevNext(dishId : string){
   
    const index = this.dishIds.indexOf(dishId);
    
    
    this.prev = this.dishIds[(this.dishIds.length + index-1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index+1) % this.dishIds.length];

    
  } 

  goBack() : void{
    this.location.back();
  }


}
