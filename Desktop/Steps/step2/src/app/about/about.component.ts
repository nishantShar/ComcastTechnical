import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/DataService"
import 'rxjs/add/operator/map';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html',
  providers: [DataService]
})
//About component displaying and sorting according to Name
export class AboutComponent implements OnInit{
  dataset: any = {};
  isOrder: boolean = true;
  column: string = 'name';
  direction: number;
  displayArray: Array<any> = [];
  len:number;
  constructor(private _dataservice: DataService) {

  }

  ngOnInit() {
    this._dataservice.GetData().subscribe(data => {
      this.len = data.length;
      for(let i=0;i<this.len; i++) {
        if(this.dataset[data[i].name]) {
          this.dataset[data[i].name][data[i].category] = data[i].amount;
        } else  {
          this.dataset[data[i].name] = {};
          this.dataset[data[i].name]['name'] = data[i].name;
          this.dataset[data[i].name][data[i].category] = data[i].amount;
        }
      }
      this.displayArray = (<any>Object).values(this.dataset);

    });

  }
  //Passing Name as argument to sorting function to get sorted according to value passed
  sorting(column:string){
    this.isOrder = !this.isOrder; //ASCENDING or DESCENDING
    this.column = column;
    this.direction = this.isOrder ? -1 : 1;
  };

}
