import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule,MatMenuModule,MatButtonModule,MatIconModule} from '@angular/material'

const MaterialComponents = [MatTabsModule,MatToolbarModule, MatSidenavModule,MatMenuModule,
          MatButtonModule,MatIconModule]

@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]   
  
})
export class MaterialModule { }
