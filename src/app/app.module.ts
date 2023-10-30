import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CustomButtonComponent } from "./custom-button/custom-button.component";
import { BottomBorderDirective } from "./directives/bottom-border.directive";
import { FilteringCriteriaComponent } from "./filtering-criteria/filtering-criteria.component";
import { HeaderComponent } from "./header/header.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { SearchComponent } from "./search/search.component";
import { SearchItemComponent } from "./search/search-item/search-item.component";
import { SearchResultsComponent } from "./search/search-results/search-results.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
        SearchItemComponent,
        SearchResultsComponent,
        BottomBorderDirective,
        FilterPipe,
        FilteringCriteriaComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CustomButtonComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
