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
  menu = {};
  public firstname?: string;
    public lastname?: string;
    public address?: string;
    public city?: string;
    public state?: string;
    public postalcode?: string
  constructor(private _restaurant: RestaurantService) {
    
   }

  ngOnInit() {
    this.menu = {
        "name": "google"
    };
    this.restaurantData = this._restaurant.getConfig()
    this.restaurantData.subscribe((data)=> {
      console.log(data)
      this.allRestaurant = data
    });
  }

}
