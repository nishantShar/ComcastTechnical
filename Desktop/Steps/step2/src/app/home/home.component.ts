import {Component} from '@angular/core';
import {DataService} from "../services/DataService"

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
//Displaying JSON data and filtering with name, category and amount
export class HomeComponent {
  dataset: Array<any>;
  isOrder: boolean = false;
  column: string = 'name';
  direction: number;

  constructor(private DataService: DataService) {

  }

  //subscribing to data and display on Initial state.
  ngOnInit() {
    this.DataService.GetData().subscribe(data => {
      this.dataset = data;
      })
  
  }

  //sorting data with name
  filterBy(column:string){
    console.log(column);
    this.isOrder = !this.isOrder;
    this.column = column;
    this.direction = this.isOrder ? -1 : 1;
  };

  
}
