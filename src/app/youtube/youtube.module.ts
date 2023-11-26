import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthguardService } from "../core/services/authguard.service";
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { SearchItemDetailsComponent } from "./components/search-item-details/search-item-details.component";
import { SearchItemComponent } from "./components/search-results/search-item/search-item.component";
import { SearchResultsComponent } from "./components/search-results/search-results.component";
import { BottomBorderDirective } from "./directives/bottom-border.directive";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { DateSortPipe } from "./pipes/sort-date.pipe";
import { SortbyViewsPipe } from "./pipes/sort-views.pipe";
import { FavouritePageComponent } from './components/favourite-page/favourite-page.component';
import { FavouriteItemComponent } from './components/favourite-page/favourite-item/favourite-item.component';

const routes: Routes = [
    { path: "", component: MainPageComponent, canActivate: [AuthguardService] },
    {
        path: "detailed-information/:id",
        component: SearchItemDetailsComponent,
        canActivate: [AuthguardService],
    }
];

@NgModule({
    declarations: [
        SearchItemComponent,
        SearchResultsComponent,
        BottomBorderDirective,
        FilterPipe,
        DateSortPipe,
        SortbyViewsPipe,
        MainPageComponent,
        SearchItemDetailsComponent,
        FavouritePageComponent,
        FavouriteItemComponent,
    ],
    imports: [CommonModule, CustomButtonComponent, RouterModule.forChild(routes)],
    exports: [
        SearchItemComponent,
        SearchResultsComponent,
        MainPageComponent,
        RouterModule,
    ],
})
export class YoutubeModule {}
