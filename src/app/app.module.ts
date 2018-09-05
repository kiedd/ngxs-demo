import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { TableState } from './state/TableState';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    AddRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgxsModule.forRoot([ TableState ]),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
