import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house/house.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {HouseListOfHost} from './house-list-of-host/houseListOfHost';
import {HouseDetails} from '../../home-detail/house-details/houseDetails';
import {CategoryHouse} from '../../category-house/data-category/categoryHouse';


@Component({
  selector: 'app-list-house-of-host',
  templateUrl: './list-house-of-host.component.html',
  styleUrls: ['./list-house-of-host.component.css']
})
export class ListHouseOfHostComponent implements OnInit {
  private info: any = {};
  id: number;
  pageActual = 1;
  houseListOfHost: HouseListOfHost;
  house: HouseDetails;
  category: CategoryHouse;

  constructor(private houseService: HouseService,
              private token: TokenStorageService,
              private router: Router,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCategoryList();
    this.getHouseOfHost();
    this.info = {
      id: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  private getHouseOfHost() {
    this.houseService.getListHouseOfHost().subscribe(result => {
      this.houseListOfHost = result;
      console.log('>>>>>houseList of host' + JSON.stringify(this.houseListOfHost));
    });
  }

  private getCategoryList() {
    this.houseService.getListCategory().subscribe(result => {
      this.category = result;
    });
  }
}
