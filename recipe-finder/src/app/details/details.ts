import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecipeService, Recipe } from '../services/recipe.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class DetailsComponent implements OnInit {
  recipe: Recipe | undefined;
  activeTab: string = 'ingredients';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = +params['id'];
      this.recipe = this.recipeService.getRecipeById(recipeId);
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  getDifficultyClass(difficulty: string): string {
    return `difficulty-${difficulty.toLowerCase()}`;
  }
}