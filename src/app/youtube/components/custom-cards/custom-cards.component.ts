import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCardItems } from 'src/app/store/selectors/selectors';
import { CustomCard } from '../../models/custom-card.model';
import { AppState } from 'src/app/store/app-state.model';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.scss'],
})
export class CustomCardsComponent implements OnInit {
  cards$: Observable<CustomCard[]>;

  constructor(private store: Store<AppState>) {
    this.cards$ = this.store.select(selectCardItems)
  }

  ngOnInit(): void {}
}
