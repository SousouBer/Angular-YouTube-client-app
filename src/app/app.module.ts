import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { InvalidPageComponent } from "./core/pages/invalid-page/invalid-page.component";
import { YoutubeModule } from "./youtube/youtube.module";
import { AdminPageComponent } from "./auth/components/admin-page/admin-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'create-card', component: AdminPageComponent },
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
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
