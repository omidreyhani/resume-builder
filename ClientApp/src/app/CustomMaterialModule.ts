import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatCardModule,MatFormFieldModule,MatProgressSpinnerModule, MatInputModule],
  exports: [  MatButtonModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatProgressSpinnerModule, MatInputModule],
})
export class CustomMaterialModule { }
