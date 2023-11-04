import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FilteringCriteriaComponent } from "./components/filtering-criteria/filtering-criteria.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeaderPageComponent } from "./pages/header-page/header-page.component";
import { InvalidPageComponent } from "./pages/invalid-page/invalid-page.component";

@NgModule({
    declarations: [HeaderComponent, FilteringCriteriaComponent, HeaderPageComponent, InvalidPageComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [HeaderComponent, FilteringCriteriaComponent, HeaderPageComponent, InvalidPageComponent]
})
export class CoreModule { }
