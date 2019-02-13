import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatInputModule,
  MatAutocompleteModule,
  MatCardModule,
  MatPaginatorModule,
  MatGridListModule,
  MatDividerModule,
  MatIconModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class MatModule { }