import { NgModule } from '@angular/core';
import {MatToolbarModule,MatSidenavModule,MatMenuModule,MatButtonModule,MatIconModule,
  MatTabsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatTableModule, MatSortModule,
  MatListModule,MatPaginatorModule, MatProgressBarModule, MatCheckboxModule,MatSelectModule,
  MatProgressSpinnerModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule , 
  MatDialogModule} from '@angular/material'

const MaterialComponents = [MatTabsModule,MatToolbarModule, MatSidenavModule,MatMenuModule,
          MatButtonModule,MatIconModule,MatToolbarModule,MatTabsModule,MatCardModule,
          MatFormFieldModule,MatInputModule,MatTableModule, MatSortModule,MatDialogModule,
          MatListModule,MatPaginatorModule, MatProgressBarModule, MatCheckboxModule,MatSelectModule,
          MatProgressSpinnerModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule ]

@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]   
  
})
export class MaterialModule { }
