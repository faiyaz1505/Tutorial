import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
  {
    path:'tab',
    component:TabComponent
  },
  {
    path:'accordion',
    component:AccordionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
