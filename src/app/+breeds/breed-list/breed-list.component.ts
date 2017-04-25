import { Component } from '@angular/core';
import { BreedService } from '../breed.service';
import { Breed } from '../breeds.model';

@Component({
  selector: 'breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent {
  items: Breed[];
  search: string;
  selectedSize: string;
  sizes: string[] = [
    'All',
    'Smallest',
    'Small',
    'Medium',
    'Large',
    'Largest'
  ];
  selectedCoat: string;
  coats: string[] = [
    'All',
    'Hairless',
    'Short Hair',
    'Medium Hair',
    'Long Hair'
  ];
  selectedTemperament: string;
  temperaments: string[] = [
    'All',
    'Hypoallergenic',
    'Cutest',
    'Fluffy',
    'Best',
    'House',
    'Rare',
    'Wild',
    'Exotic'
  ];
  selectedColor: string;
  colors: string[] = [
    'All',
    'White',
    'Black',
    'Grey',
    'Blue'
  ];
  constructor(private breedService: BreedService) {

  }

  ngOnInit() {
    this.breedService.getItems().then(items => this.items = items);
  }
}
