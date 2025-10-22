import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  featuredRecipes = [
    {
      id: 1,
      title: 'Masala Dosa',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      time: '20 mins',
      difficulty: 'Medium'
    },
    {
      id: 2,
      title: 'Chocolate Cookies',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=500&fit=crop',
      time: '25 mins',
      difficulty: 'Easy'
    },
    {
      id: 3,
      title: 'Fresh Garden Salad',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=500&fit=crop',
      time: '10 mins',
      difficulty: 'Easy'
    },
    {
      id: 4,
      title: 'Vegetable Stir Fry',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=500&fit=crop',
      time: '15 mins',
      difficulty: 'Easy'
    }
  ];
}