import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './components/search/search.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { BottomBorderDirective } from './directives/bottom-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { CustomButtonComponent } from '../custom-button/custom-button.component';


@NgModule({
  declarations: [SearchComponent, SearchItemComponent, SearchResultsComponent, BottomBorderDirective, FilterPipe],
  imports: [
    CommonModule,
    CustomButtonComponent
  ],
  exports: [SearchComponent, SearchItemComponent, SearchResultsComponent, BottomBorderDirective, FilterPipe]
})
export class YoutubeModule { }
