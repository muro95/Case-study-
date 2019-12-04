import {Component, OnInit} from '@angular/core';
import {House} from '../../interface/house/house';
import {TokenStorageService} from '../../auth/token-storage.service';
import {HouseService} from '../../services/house.service';

@Component({
  selector: 'app-home-list-for-guest',
  templateUrl: './home-list-for-guest.component.html',
  styleUrls: ['./home-list-for-guest.component.css']
})
export class HomeListForGuestComponent implements OnInit {
  private info: any;

  house: House;

  constructor(private token: TokenStorageService,
              private houseService: HouseService) {
  }

  ngOnInit() {
    this.getHouseList();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
  }

  private getHouseList() {
    this.houseService.getList().subscribe(result => {
      this.house = result;
      console.log('>>>>House list:' + JSON.stringify(this.house));
    });
  }

}