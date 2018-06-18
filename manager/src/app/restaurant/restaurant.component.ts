import { Component, OnInit  } from '@angular/core';
import { RestaurantService } from '../restaurant.service';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [RestaurantService]
})
export class RestaurantComponent implements OnInit {
  restaurantData: any;
  allRestaurant: any;
  constructor(private _restaurant: RestaurantService) {
    
   }

  ngOnInit() {
    this.restaurantData = this._restaurant.getConfig()
    this.restaurantData.subscribe((data)=>{
      console.log(data)
      this.allRestaurant = data
    });
  }

}
