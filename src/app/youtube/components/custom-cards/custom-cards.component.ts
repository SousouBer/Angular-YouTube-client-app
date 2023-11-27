import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, CustomCard } from 'src/app/store/reducers/reducers';
import { selectCardItems } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.scss'],
})
export class CustomCardsComponent implements OnInit {
  // cards: CustomCard[] = [
  //   {
  //     id: 'fasfasfsaf',
  //     title: 'First card',
  //     description: 'lorem loremlorem loremlorem loremlorem loremloremdasd asfasas s fsa g s gsd gdgdsg mm, s. sadhsajf asI amd eifnitely dong to do it a lot like that ,than toy bery jych!!! ',
  //     imgLink: 'https://www.matthiasmeier.io/static/8eed1a632a61fa3f71c8a433ad42fe9f/e015f/rxjs_angular.jpg',
  //     videoLink: 'Video Link',
  //     creationDate: '2015-05-03',
  //   }
  // ];

  cards$: Observable<CustomCard[]>;

  constructor(private store: Store<AppState>) {
    this.cards$ = this.store.select(selectCardItems)
  }

  ngOnInit(): void {}
}
