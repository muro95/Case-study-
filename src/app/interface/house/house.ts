import {DataHouseList} from '../house-list/dataHouseList';
import {DataHouseDetails} from '../../components/home-detail/house-details/dataHouseDetails';


export class House {
  // success: boolean;
  // message: string;
  // tslint:disable-next-line:variable-name
  // private _dataHouseDetails: Array<DataHouseDetails>;
  // tslint:disable-next-line:variable-name
  private _data: Array<DataHouseList>;

  // get dataHouseDetail(): Array<DataHouseDetails> {
  //   return this._dataHouseDetails;
  // }
  //
  // set dataHouseDetail(value: Array<DataHouseDetails>) {
  //   this._dataHouseDetails = value;
  // }


  // tslint:disable-next-line:variable-name

  get data(): Array<DataHouseList> {
    return this._data;
  }

  set data(value: Array<DataHouseList>) {
    this._data = value;
  }
}
