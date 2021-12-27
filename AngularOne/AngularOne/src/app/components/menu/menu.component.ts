import { Component, OnInit } from '@angular/core';
import { Dish } from '../../shared/dish';
const DISHES : Dish[] = [{
  id : "1",
  name : "Samosa",
  image : '/assets/images/samosa.jpg',
  category : "Cuisine",
  featured : false,
  label : "Hot",
  price : "10rs",
  description : "Garam Samosa"
},
{
  id : "2",
  name : "Idli",
  image : "/assets/images/idli.jpg",
  category : "Breakfast",
  featured : false,
  label : "Hot",
  price : "20rs",
  description : "South Indian Special"
},{
  id : "3",
  name : "Pakoda",
  image : "/assets/images/pakoda.jpg",
  category : "Lunch",
  featured : false,
  label : "Hot",
  price : "25rs",
  description : "Maharashtra Special"
},{
  id : "4",
  name : "Samosa",
  image : "/assets/images/samosa.jpg",
  category : "Lunch",
  featured : false,
  label : "Hot",
  price : "25rs",
  description : "Maharashtra Special"
}];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  dishes : Dish[] = DISHES;

  selectedDish : Dish = DISHES[0];

  constructor() { }

  ngOnInit(): void {
  }



}
