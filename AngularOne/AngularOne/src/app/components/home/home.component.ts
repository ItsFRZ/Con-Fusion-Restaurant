import { Component, OnInit } from '@angular/core';
import {Dish} from '../../shared/dish';
import {Promotion} from '../../shared/promotion';
import { DishService } from 'src/app/services/dish.service'; 
import { PromotionService } from 'src/app/services/promotion.service'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dishService:DishService, private promotionService: PromotionService) { }

  dish : Dish;
  promotion : Promotion;

  ngOnInit(): void {

    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();

  }

}
