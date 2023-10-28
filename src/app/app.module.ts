import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { SearchItemComponent } from "./search/search-item/search-item.component";
import { SearchResultsComponent } from "./search/search-results/search-results.component";
import { bottomBorder } from "./directives/bottom-border.directive";
import { FilterPipe } from "./pipes/filter.pipe";
import { FilteringCriteriaComponent } from './filtering-criteria/filtering-criteria.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
        SearchItemComponent,
        SearchResultsComponent,
        bottomBorder,
        FilterPipe,
        FilteringCriteriaComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
