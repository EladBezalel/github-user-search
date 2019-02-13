import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from './material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { NumberComponent } from './components/user/number/number.component';
import { UserComponent } from './components/user/user.component';
import { SearchComponent } from './components/search/search.component';
import { UserStateModule } from './user-state.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModule,
    FormsModule, 
    ReactiveFormsModule, 
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    UserStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
