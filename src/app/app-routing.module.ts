import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
  {
    path:'tab',
    component:TabComponent
  },
  {
    path:'accordion',
    component:AccordionComponent
  },{
    path:'flexbox',
    component:FlexboxComponent
  },{
    path:'string-interpolation',
    component:StringInterpolationComponent
  },{
    path:'property-binding',
    component:PropertyBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
