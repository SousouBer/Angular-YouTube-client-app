import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { Store, StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { AdminPageComponent } from "./auth/components/admin-page/admin-page.component";
import { CoreModule } from "./core/core.module";
import { InvalidPageComponent } from "./core/pages/invalid-page/invalid-page.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { requestCards, requestItems } from "./store/reducers/reducers";
import { EffectsModule } from "@ngrx/effects";
import { ItemsEffects } from "./store/effects/loaditems.effects";
import { addCard } from "./store/actions/actions";
import { FavouritePageComponent } from "./youtube/components/favourite-page/favourite-page.component";
import { AuthguardService } from "./core/services/authguard.service";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "create-card", component: AdminPageComponent },
    { path: "favourite-page", component: FavouritePageComponent},
    { path: "login", loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule) },
    { path: "main", loadChildren: () => import("./youtube/youtube.module").then((m) => m.YoutubeModule) },
    { path: "**", component: InvalidPageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([ItemsEffects]),
        StoreModule.forFeature('youtubeItems', requestItems),
        StoreModule.forFeature('customCards', requestCards),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
