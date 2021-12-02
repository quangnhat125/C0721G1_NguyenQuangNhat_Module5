import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontSizeEditorComponent } from "./font-size-editor/font-size-editor.component";
import { AngularShowPetInfoComponent } from "./angular-show-pet-info/angular-show-pet-info.component";
import { FormsModule } from "@angular/forms";
import { AngularUsingBootstrapComponent } from './angular-using-bootstrap/angular-using-bootstrap.component';
import { ProductComponent } from './product/product.component';
import { AngularCalculatorAppComponent } from './angular-calculator-app/angular-calculator-app.component';
import { CollorPickerComponent } from './collor-picker/collor-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    AngularShowPetInfoComponent,
    AngularUsingBootstrapComponent,
    ProductComponent,
    AngularCalculatorAppComponent,
    CollorPickerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
