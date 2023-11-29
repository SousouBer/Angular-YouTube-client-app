import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeCard } from 'src/app/store/actions/custom-card.actions';
import { AppState } from 'src/app/store/app-state.model';
import { CustomCard } from 'src/app/youtube/models/custom-card.model';
// import { removeCard } from 'src/app/store/actions/actions';
// import { AppState, CustomCard } from 'src/app/store/reducers/reducers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: CustomCard;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onRemoveCard(){
    this.store.dispatch(removeCard({ id: this.card.id }));
  }

}
