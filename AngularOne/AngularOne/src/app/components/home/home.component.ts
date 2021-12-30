import { Component, OnInit } from '@angular/core';
import {Dish} from '../../shared/dish';
import {Promotion} from '../../shared/promotion';
import { DishService } from 'src/app/services/dish.service'; 
import { PromotionService } from 'src/app/services/promotion.service';
import { LeaderService } from 'src/app/services/leader.service';
import {Leader} from 'src/app/shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dishService:DishService, private promotionService: PromotionService, private leaderService : LeaderService) { }

  dish : Dish;
  promotion : Promotion;
  leader : Leader;

  ngOnInit(): void {

    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.leader = this.leaderService.getFeaturedLeader();

  }

}
