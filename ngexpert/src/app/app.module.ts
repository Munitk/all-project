import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListComponent } from './list/list.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { JustdailComponent } from './justdail/justdail.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ChildItemComponent } from './child-item/child-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    ListComponent,
    IfComponent,
    SwitchComponent,
    JustdailComponent,
    ParentListComponent,
    ChildItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
