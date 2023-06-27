import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Pepperoni Pizza',
      'Traditional pepperoni pizza with small crust.',
      'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=4x3&$p$f=eceb3e7'
    ),
    new Recipe(
      'Sushi',
      'Salmon sushi',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggcx1H_iT4vTBkXJLj-T__RUoLFLe3K-vsJ5ZG6nLq1ZDCHfrs8M40wHFSndP5Zhvcx4b6_QwukYkDUzE1nAlQlR8mmmgpRH1iFrO5IDJV0urT5z_hRWUU0Pi6o3979x2cdJQJ-7iPJ2WIDeOhU6egT8-IbkzLRsDxUlWqpFSJkR4Nrn8ZT7u3b1Mk/s2000/receita-de-sushi.jpg'
    ),
  ];
}
