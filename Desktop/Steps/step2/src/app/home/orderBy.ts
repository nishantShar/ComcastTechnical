import {Pipe, PipeTransform} from "@angular/core";

@Pipe({  name: 'orderBy' })

//Custom Pipe to sort data
export class OrderByPipe implements PipeTransform {

  transform(dataset: Array<any>, args?: any): any {
    console.log(args.direction)
    if (dataset !== undefined) {
      return dataset.sort(function(a, b){
         console.log(a);
          console.log(b);
          console.log(a[args.column]);

        if(a[args.column] < b[args.column]){
        
          console.log(a);
          console.log(b);
          
          return -1 * args.direction;
        }
        else if( a[args.column] > b[args.column]){
           console.log(a);
          console.log(b);
          return 1 * args.direction;
        }
        else{
          return 0;
        }
      });
    } else {
      return dataset;
    }
  };
}