import { Component, OnInit , Inject} from '@angular/core';
import { Dish } from '../../shared/dish';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  dishes : Dish[];
  errMess : String;

  // selectedDish : Dish;

  constructor(private dishService : DishService,
    @Inject('BaseURL') private BaseURL) { 

  }

  ngOnInit() {
    this.dishService.getDishes()
        .subscribe((dishes) => this.dishes = dishes,
        errmes => this.errMess = <any>errmes);
  
    }

  // onSelect(dish : Dish){
  //   this.selectedDish = dish;
  //   console.log(this.selectedDish);
    
  // }



}
