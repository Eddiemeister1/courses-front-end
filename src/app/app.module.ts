import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCatalogComponent } from './components/course-catalog/course-catalog.component';

import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { CoursesEffects } from './effects/courses.effects';
@NgModule({
  declarations: [
    AppComponent,
    CourseCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    EffectsModule.forRoot([AppEffects, CoursesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
