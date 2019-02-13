import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserEffects } from './+state/user.effects';

import { FEATURE_KEY, initialState, searchReducer } from './+state/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_KEY, searchReducer, { initialState }),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: []
})
export class UserStateModule {}
