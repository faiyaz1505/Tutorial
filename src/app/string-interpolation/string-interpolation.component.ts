import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  myname:String="faiyaz";
  age:number=23;
  
  myself(){
    return this.age;
  }
}

