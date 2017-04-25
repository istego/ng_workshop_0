import { Component, Input } from '@angular/core';
import { Breed } from '../../breeds.model';

@Component({
  selector: 'breed-item',
  styleUrls: ['./breed-item.component.scss'],
  templateUrl: './breed-item.component.html'
})
export class BreedItemComponent {
  @Input() item: Breed;
}
