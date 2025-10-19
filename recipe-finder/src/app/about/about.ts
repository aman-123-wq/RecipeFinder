import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  features = [
    {
      icon: '🔍',
      title: 'Easy Search',
      description: 'Find recipes by name, ingredients, or cuisine with our powerful search engine.'
    },
    {
      icon: '⏱️',
      title: 'Save Time',
      description: 'Filter by cooking time and difficulty to find recipes that fit your schedule.'
    },
    {
      icon: '🍳',
      title: 'Step-by-Step',
      description: 'Clear, detailed instructions to guide you through every recipe successfully.'
    },
    {
      icon: '⭐',
      title: 'Quality Recipes',
      description: 'Curated collection of delicious, tested recipes from various cuisines.'
    }
  ];
}