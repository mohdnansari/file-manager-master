import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeModule, TableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
