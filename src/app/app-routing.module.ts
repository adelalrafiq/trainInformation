import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectDepartureComponent } from './select-departure/select-departure.component';
import { StationComponent } from './station/station.component';
import { FromstationComponent } from './fromstation/fromstation.component';
import { ShowAllComponent } from './show-all/show-all.component';


const routes: Routes = [

  { path: '', component: ShowAllComponent },
  { path: 'call', component: StationComponent },
  { path: 'input', component: FromstationComponent },
  { path: 'select', component: SelectDepartureComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   
}
