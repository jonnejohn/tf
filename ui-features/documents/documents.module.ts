import { NgModule } from '@angular/core';
 import { ThemeModule } from '../../../@theme/theme.module';
// import { MiscellaneousRoutingModule, routedComponents } from '/miscellaneous-routing.module';
import { DocumentsComponent } from './documents.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    FormsModule
    // MiscellaneousRoutingModule,
  ],
  declarations: [
      DocumentsComponent,
    // ...routedComponents,
  ],
})
export class DocumentsModule { }
