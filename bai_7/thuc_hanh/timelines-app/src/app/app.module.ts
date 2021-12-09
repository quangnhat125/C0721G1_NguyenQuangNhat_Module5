import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TimelinesComponent } from "./timelines/timelines.component";
import { ProductManagementComponent } from "./product-management/product-management.component";
import { YoutubePlaylistComponent } from "./youtube-playlist/youtube-playlist.component";
import { YoutubePlayerComponent } from "./youtube-player/youtube-player.component";
import { ProductManagementAppComponent } from "./product-management-app/product-management-app.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductCreateComponent } from "./product/product-create/product-create.component";

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    ProductManagementComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductManagementAppComponent,
    ProductListComponent,
    ProductCreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
