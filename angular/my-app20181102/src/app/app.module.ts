// 核心模块
import { NgModule } from '@angular/core';
// 内置模块
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// 组件模块
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
// import { PipesPipe } from './pipes.pipe';
import { DirectDirective } from './direct.directive';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    // HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    // PipesPipe,
    DirectDirective,
    // DashboardComponent,
    // HeroSearchComponent
  ],
  exports: [
    // PipesPipe
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
