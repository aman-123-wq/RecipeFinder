import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipeService, Recipe } from '../services/recipe.service';

// Declare jQuery
declare var $: any;

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent implements AfterViewInit {
  searchQuery: string = '';
  allRecipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  featuredDishes: Recipe[] = [];
  selectedCuisine: string = 'all';
  selectedDifficulty: string = 'all';
  selectedRecipe: string = '';

  cuisines = ['all', 'South Indian', 'North Indian', 'Chinese', 'Italian', 'Beverages', 'Desserts', 'Mughlai', 'Coastal', 'Indian Snacks', 'Soups', 'Mexican', 'Fast Food', 'Breakfast', 'Salads', 'Indian Desserts', 'Snacks'];
  difficulties = ['all', 'Easy', 'Medium', 'Hard'];

  constructor(private recipeService: RecipeService) {
    this.allRecipes = this.recipeService.getAllRecipes();
    this.filteredRecipes = this.allRecipes;
    
    // Show only 4 featured dishes with images (dishes that have images)
    this.featuredDishes = this.allRecipes
      .filter(recipe => recipe.image && recipe.image.trim() !== '')
      .slice(0, 4);

    // Test backend connection
    this.recipeService.testBackendConnection();
  }

  // JQUERY INITIALIZATION
  ngAfterViewInit(): void {
    this.initializeJQueryEffects();
  }

  // JQUERY DOM MANIPULATION - FIXED WITH ARROW FUNCTIONS
  initializeJQueryEffects(): void {
    // Add animation to featured dishes - FIXED
    $('.dish-card').hover(
      (event: any) => {
        $(event.currentTarget).css('transform', 'scale(1.05)');
      },
      (event: any) => {
        $(event.currentTarget).css('transform', 'scale(1)');
      }
    );

    // Add click counter to search button - FIXED
    let clickCount = 0;
    $('.search-input').on('keyup', () => {
      clickCount++;
      console.log(`🔍 Search input used ${clickCount} times (jQuery DOM Manipulation)`);
    });

    // Add smooth scrolling to search results - FIXED
    $('.recipe-item').click(() => {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });

    // Change background color of filters on selection - FIXED
    $('select').change((event: any) => {
      $(event.currentTarget).css('background-color', '#e8f5e8');
      setTimeout(() => {
        $(event.currentTarget).css('background-color', '');
      }, 1000);
    });

    // Add pulse animation to featured dishes title - FIXED
    $('.featured-dishes h3').hover(
      (event: any) => {
        $(event.currentTarget).css('animation', 'pulse 0.5s');
      },
      (event: any) => {
        $(event.currentTarget).css('animation', 'none');
      }
    );

    console.log('✅ jQuery DOM manipulation initialized!');
  }

  searchRecipes(): void {
    if (this.searchQuery.trim()) {
      this.filteredRecipes = this.recipeService.searchRecipes(this.searchQuery);
    } else {
      this.filteredRecipes = this.allRecipes;
    }
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = this.allRecipes;

    if (this.searchQuery.trim()) {
      filtered = this.recipeService.searchRecipes(this.searchQuery);
    }

    if (this.selectedCuisine !== 'all') {
      filtered = filtered.filter(recipe => 
        recipe.cuisine.toLowerCase() === this.selectedCuisine.toLowerCase()
      );
    }

    if (this.selectedDifficulty !== 'all') {
      filtered = filtered.filter(recipe => 
        recipe.difficulty.toLowerCase() === this.selectedDifficulty.toLowerCase()
      );
    }

    this.filteredRecipes = filtered;
  }

  onRecipeSelect(): void {
    if (this.selectedRecipe) {
      const recipe = this.allRecipes.find(r => r.id.toString() === this.selectedRecipe);
      if (recipe) {
        this.searchQuery = recipe.title;
        this.searchRecipes();
      }
    } else {
      this.searchQuery = '';
      this.searchRecipes();
    }
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCuisine = 'all';
    this.selectedDifficulty = 'all';
    this.selectedRecipe = '';
    this.filteredRecipes = this.allRecipes;
  }
}