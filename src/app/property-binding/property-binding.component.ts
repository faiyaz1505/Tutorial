import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit{
  allowNewServer=false;
  propertyBindingvariable=true;
  eventBindingVariable="event binding works";
  twoWayBindingVariable='edit two way binding variable value';

 

  

  


  constructor(){
    setInterval(()=>{
      this.allowNewServer=true;
    },2000);
  }

  enableButton(){
    this.propertyBindingvariable=false;
  }  


  eventBinding(){
    this.eventBindingVariable='event binding stops';
  }
  
  ngOnInit(){
    
  }
  // combination of all binding//
  combination2WayVariable='';
  combinationPropertyBindingVariable=false;
  comboEventVariable='you are log out'
  comboEvent(){
    this.combinationPropertyBindingVariable=true;
    this.comboEventVariable='you are login! your username is '+this.combination2WayVariable;
  }

  // Directive
  directiveInputVariable='';
  directiveVariable=false;
  directive(){
    this.directiveVariable=true;
  }

  
  // style with ngStyle
  styleInputVariable:any;
  booleanVariable='offline';
  status=false;
  colorVariable:any;
  buttonEvent(){
    this.booleanVariable=this.styleInputVariable>=5?'online':'offline';
    this.colorVariable=this.booleanVariable=='online'?'green':'red';
    this.status=true;
  }

  

}
