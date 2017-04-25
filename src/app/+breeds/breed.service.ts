import { Injectable } from '@angular/core';

import { Breed } from './breeds.model';
import { BREEDS } from './mock-breeds';

@Injectable()
export class BreedService {
  getItems(): Promise<Breed[]> {
    return Promise.resolve(BREEDS);
  }

  getItem(id: number | string) {
    return this.getItems()
      .then(
        items => items.find(item => item.id === +id)
      )
  }
}
