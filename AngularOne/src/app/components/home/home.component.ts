import { Component, OnInit } from '@angular/core';
import {Dish} from '../../shared/dish';
import {Promotion} from '../../shared/promotion';
import { DishService } from 'src/app/services/dish.service'; 
import { PromotionService } from 'src/app/services/promotion.service';
import { LeaderService } from 'src/app/services/leader.service';
import {Leader} from 'src/app/shared/leader';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dishService:DishService, private promotionService: PromotionService, private leaderService : LeaderService,
    public dialog : MatDialog) { }

  dish : Dish;
  promotion : Promotion;
  leader : Leader;

  
  ngOnInit(): void {

    this.dishService.getFeaturedDish()
        .then((dish) => this.dish = dish);
    
    this.promotionService.getFeaturedPromotion()
        .then((promotion) => this.promotion = promotion);

    this.leaderService.getFeaturedLeader()
        .then((leader) => this.leader = leader);

  }

  popUpMenu() : void{
    this.dialog.open(PopupComponent,{width : '500px' , height : '600px'});
  }

}
