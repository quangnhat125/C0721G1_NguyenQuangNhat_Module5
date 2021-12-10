import { YoutubePlaylistComponent } from "./youtube-playlist/youtube-playlist.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimelinesComponent } from "./timelines/timelines.component";
import { YoutubePlayerComponent } from "./youtube-player/youtube-player.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductCreateComponent } from "./product/product-create/product-create.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";

const routes: Routes = [
  {
    path: "timelines",
    component: TimelinesComponent,
  },
  {
    path: "youtube",
    component: YoutubePlaylistComponent,

    children: [
      {
        path: ":id",
        component: YoutubePlayerComponent,
      },
    ],
  },
  { path: "product/list", component: ProductListComponent },
  {
    path: "product/create",
    component: ProductCreateComponent,
  },
  {
    path: "dictionary", component: DictionaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
