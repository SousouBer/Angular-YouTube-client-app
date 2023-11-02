import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';
import { Routes, RouterModule } from '@angular/router';
import { InvalidPageComponent } from './core/pages/invalid-page/invalid-page.component';
import { LoginComponent } from './auth/components/login/login.component';
import { DetailedInformationPageComponent } from './youtube/pages/detailed-information-page/detailed-information-page.component';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';
import { AuthguardService } from './youtube/services/authguard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main',loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule)},
  { path: '**', component: InvalidPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    YoutubeModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  // exports:
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
