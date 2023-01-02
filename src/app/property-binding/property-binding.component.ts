import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit{
  allowNewServer=false;
  disableBox=true;
  count:number=0;
  variable=false;

  constructor(){
    setInterval(()=>{
      this.allowNewServer=true;
    },2000);
  }

  enableButton(){
    this.disableBox=false;
  }  

  increaseCount(){
    this.count+=1
    this.disableBox=true;
  }
  decreaseCount(){
    this.count-=1
    this.disableBox=true;
  }
  reset(){
    this.count=0;
    this.disableBox=false;
  }
  
  ngOnInit(){
    
  }

}
