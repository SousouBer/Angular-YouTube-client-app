import { Component, Input, OnInit } from '@angular/core';
import { CustomCard } from 'src/app/store/reducers/reducers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: CustomCard;

  constructor() { }

  ngOnInit(): void {
  }

}
