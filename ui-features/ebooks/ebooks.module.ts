import { NgModule } from '@angular/core';
 import { ThemeModule } from '../../../@theme/theme.module';
// import { MiscellaneousRoutingModule, routedComponents } from '/miscellaneous-routing.module';
import { EbooksComponent } from './ebooks.component'
@NgModule({
  imports: [
    ThemeModule,
    // MiscellaneousRoutingModule,
  ],
  declarations: [
      EbooksComponent,
    // ...routedComponents,
  ],
})
export class EbooksModule { }
