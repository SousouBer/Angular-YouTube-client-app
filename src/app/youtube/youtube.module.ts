import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BottomBorderDirective } from './directives/bottom-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { SearchItemDetailsComponent } from './components/search-item-details/search-item-details.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  { path: '', component: MainPageComponent, canActivate: [AuthguardService] },
  {
    path: 'detailed-information/:id',
    component: DetailedInformationPageComponent,
    canActivate: [AuthguardService]
  },
];

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    BottomBorderDirective,
    FilterPipe,
    MainPageComponent,
    DetailedInformationPageComponent,
    SearchItemDetailsComponent,
  ],
  imports: [CommonModule, CustomButtonComponent, RouterModule.forChild(routes)],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    BottomBorderDirective,
    FilterPipe,
    MainPageComponent,
    DetailedInformationPageComponent,
    RouterModule,
  ],
})
export class YoutubeModule {}
