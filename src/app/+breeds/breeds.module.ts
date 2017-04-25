import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { FormsModule } from '@angular/forms';

import { routes } from './breeds.routes';
import { BreedListComponent, BreedItemComponent } from './breed-list';
import { BreedService } from "./breed.service";

@NgModule({
  declarations: [
    BreedListComponent,
    BreedItemComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ],
  providers: [
    BreedService
  ]
})
export class BreedsModule {
  public static routes = routes;
}
