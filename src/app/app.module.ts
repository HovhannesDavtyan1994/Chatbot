import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { Infographic1 } from './Infographics/infographic1/infographic1.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    Infographic1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
