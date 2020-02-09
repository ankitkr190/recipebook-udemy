import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetaisComponent } from "./recipes/recipe-detais/recipe-detais.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeItemsComponent } from "./recipes/recipe-list/recipe-items/recipe-items.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetaisComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
