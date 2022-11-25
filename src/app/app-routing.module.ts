import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';

const routes = [
  { path: '', component: HelloComponent },
  { path: ':name', component: HelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
