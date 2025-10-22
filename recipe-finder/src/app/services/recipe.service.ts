import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  difficulty: string;
  cuisine: string;
  rating: number;
  price?: number;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    // DISHES 1-4 WITH IMAGES
    {
      id: 1,
      title: 'Masala Dosa',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      description: 'Crispy rice crepe with spiced potato filling.',
      ingredients: [
        '2 cups dosa batter',
        '4 medium potatoes',
        '1 large onion',
        '2 green chilies',
        '1 tsp mustard seeds',
        '1 tsp cumin seeds',
        '10-12 curry leaves',
        '1/2 tsp turmeric powder',
        '1 tbsp oil',
        'Salt to taste'
      ],
      instructions: [
        'Heat oil and add mustard seeds, cumin seeds, curry leaves.',
        'Add onions and green chilies. Sauté until translucent.',
        'Add turmeric and mashed potatoes. Mix well.',
        'Cook potato masala for 2-3 minutes.',
        'Spread dosa batter on hot tawa.',
        'Cook until golden brown, add masala, fold and serve.'
      ],
      cookingTime: 20,
      difficulty: 'Medium',
      cuisine: 'South Indian',
      rating: 4.7,
      price: 120
    },
    {
      id: 2,
      title: 'Chocolate Cookies', 
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=500&fit=crop',
      description: 'Soft, chewy chocolate cookies with rich flavor.',
      ingredients: [
        '2 cups all-purpose flour',
        '1 cup butter',
        '1 cup brown sugar',
        '1/2 cup white sugar',
        '2 eggs',
        '2 cups chocolate chips',
        '1 tsp vanilla extract',
        '1 tsp baking soda',
        '1/2 tsp salt'
      ],
      instructions: [
        'Preheat oven to 350°F (175°C).',
        'Cream butter and sugars until fluffy.',
        'Beat in eggs and vanilla extract.',
        'Mix flour, baking soda, and salt in separate bowl.',
        'Combine wet and dry ingredients.',
        'Fold in chocolate chips.',
        'Drop spoonfuls onto baking sheet.',
        'Bake for 10-12 minutes until golden.'
      ],
      cookingTime: 25,
      difficulty: 'Easy',
      cuisine: 'Dessert',
      rating: 4.8,
      price: 150
    },
    {
      id: 3,
      title: 'Fresh Garden Salad',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=500&fit=crop',
      description: 'Healthy mixed greens with fresh vegetables.',
      ingredients: [
        '4 cups mixed greens',
        '1 cucumber, sliced',
        '2 tomatoes, chopped',
        '1 bell pepper, sliced',
        '1/2 red onion, thinly sliced',
        '1/4 cup olives',
        '2 tbsp olive oil',
        '1 tbsp lemon juice',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Wash and dry all vegetables thoroughly.',
        'Chop vegetables into bite-sized pieces.',
        'Combine all vegetables in large bowl.',
        'Whisk olive oil, lemon juice, salt and pepper.',
        'Pour dressing over salad and toss gently.',
        'Serve immediately for freshness.'
      ],
      cookingTime: 10,
      difficulty: 'Easy',
      cuisine: 'Salads',
      rating: 4.5,
      price: 180
    },
    {
      id: 4, 
      title: 'Vegetable Stir Fry',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=500&fit=crop',
      description: 'Colorful vegetables stir-fried in savory sauce.',
      ingredients: [
        '2 cups mixed vegetables',
        '1 tbsp ginger, minced',
        '2 cloves garlic, minced',
        '2 tbsp soy sauce',
        '1 tbsp oyster sauce',
        '1 tsp sesame oil',
        '2 tbsp vegetable oil',
        '1 tsp sugar',
        'Spring onions for garnish'
      ],
      instructions: [
        'Heat oil in wok or large pan.',
        'Add ginger and garlic, stir-fry for 30 seconds.',
        'Add vegetables and stir-fry on high heat.',
        'Add soy sauce, oyster sauce, and sugar.',
        'Cook until vegetables are tender-crisp.',
        'Drizzle with sesame oil and garnish.',
        'Serve hot with rice or noodles.'
      ],
      cookingTime: 15,
      difficulty: 'Easy',
      cuisine: 'Chinese',
      rating: 4.6,
      price: 200
    },

    // DISHES 5-50 WITHOUT IMAGES
    {
      id: 5,
      title: 'Butter Chicken',
      image: '',
      description: 'Creamy tomato-based curry with tender chicken.',
      ingredients: [
        '500g chicken pieces',
        '1 cup yogurt',
        '2 tbsp ginger-garlic paste',
        '1 cup tomato puree',
        '1/2 cup fresh cream',
        '2 tbsp butter',
        '1 tsp garam masala',
        '1 tsp red chili powder',
        'Salt to taste'
      ],
      instructions: [
        'Marinate chicken in yogurt and spices.',
        'Grill chicken until cooked.',
        'Prepare tomato-based gravy.',
        'Add chicken to gravy and simmer.',
        'Finish with fresh cream and butter.',
        'Garnish with coriander leaves.'
      ],
      cookingTime: 45,
      difficulty: 'Medium',
      cuisine: 'North Indian',
      rating: 4.8,
      price: 350
    },
    {
      id: 6,
      title: 'Paneer Butter Masala',
      image: '',
      description: 'Soft paneer in rich creamy tomato gravy.',
      ingredients: [
        '250g paneer cubes',
        '2 cups tomato puree',
        '1/4 cup cashew paste',
        '2 tbsp butter',
        '1/2 cup fresh cream',
        '1 tsp garam masala',
        '1 tsp sugar',
        'Salt to taste'
      ],
      instructions: [
        'Soak paneer in warm water.',
        'Prepare tomato-cashew gravy.',
        'Add paneer and simmer.',
        'Add cream and butter.',
        'Garnish with fresh coriander.'
      ],
      cookingTime: 35,
      difficulty: 'Medium',
      cuisine: 'North Indian',
      rating: 4.7,
      price: 280
    },
    {
      id: 7,
      title: 'Biryani',
      image: '',
      description: 'Fragrant rice dish with spices and meat/vegetables.',
      ingredients: [
        '2 cups basmati rice',
        '500g chicken/mutton',
        '2 large onions, sliced',
        '1 cup yogurt',
        '2 tbsp biryani masala',
        'Whole spices',
        'Saffron strands',
        'Mint leaves',
        'Oil and ghee'
      ],
      instructions: [
        'Marinate meat with yogurt and spices.',
        'Fry onions until golden brown.',
        'Cook rice until 70% done.',
        'Layer rice and meat in pot.',
        'Dum cook for 20-25 minutes.',
        'Serve hot with raita.'
      ],
      cookingTime: 60,
      difficulty: 'Hard',
      cuisine: 'Mughlai',
      rating: 4.9,
      price: 400
    },
    {
      id: 8,
      title: 'Chole Bhature',
      image: '',
      description: 'Spicy chickpeas with fluffy fried bread.',
      ingredients: [
        '2 cups chickpeas',
        '3 tomatoes, pureed',
        '2 onions, chopped',
        '2 tbsp chole masala',
        '2 cups flour',
        '1/2 cup yogurt',
        'Oil for frying',
        'Salt to taste'
      ],
      instructions: [
        'Soak and pressure cook chickpeas.',
        'Prepare spicy tomato gravy.',
        'Knead soft dough for bhature.',
        'Fry bhature until puffed.',
        'Serve chole hot with bhature.'
      ],
      cookingTime: 40,
      difficulty: 'Medium',
      cuisine: 'North Indian',
      rating: 4.6,
      price: 220
    },
    {
      id: 9,
      title: 'Palak Paneer',
      image: '',
      description: 'Soft paneer in creamy spinach gravy.',
      ingredients: [
        '250g paneer cubes',
        '4 cups spinach leaves',
        '1 onion, chopped',
        '2 tomatoes',
        '1 tbsp cream',
        '1 tsp garam masala',
        '2 green chilies',
        'Salt to taste'
      ],
      instructions: [
        'Blanch and puree spinach.',
        'Prepare onion-tomato base.',
        'Add spinach puree and cook.',
        'Add paneer cubes and simmer.',
        'Finish with cream and spices.'
      ],
      cookingTime: 30,
      difficulty: 'Medium',
      cuisine: 'North Indian',
      rating: 4.5,
      price: 250
    },
    {
      id: 10,
      title: 'Dal Makhani',
      image: '',
      description: 'Creamy black lentils slow-cooked with butter.',
      ingredients: [
        '1 cup black lentils',
        '1/4 cup kidney beans',
        '2 tomatoes, pureed',
        '2 tbsp butter',
        '1 tbsp cream',
        '1 tsp ginger-garlic paste',
        '1 tsp garam masala',
        'Salt to taste'
      ],
      instructions: [
        'Soak and cook lentils until soft.',
        'Prepare tomato-onion gravy.',
        'Combine lentils and gravy.',
        'Slow cook for rich flavor.',
        'Add butter and cream before serving.'
      ],
      cookingTime: 50,
      difficulty: 'Medium',
      cuisine: 'North Indian',
      rating: 4.7,
      price: 180
    },
    {
      id: 11,
      title: 'Fish Curry',
      image: '',
      description: 'Fish cooked in spicy coconut gravy.',
      ingredients: [
        '500g fish pieces',
        '1 cup coconut milk',
        '2 tbsp coconut oil',
        '2 onions, sliced',
        '1 tbsp red chili powder',
        '1 tsp turmeric',
        'Tamarind extract',
        'Curry leaves'
      ],
      instructions: [
        'Marinate fish with turmeric and salt.',
        'Prepare coconut-based gravy.',
        'Add fish and simmer gently.',
        'Add tamarind for tanginess.',
        'Garnish with curry leaves.'
      ],
      cookingTime: 35,
      difficulty: 'Medium',
      cuisine: 'Coastal',
      rating: 4.6,
      price: 320
    },
    {
      id: 12,
      title: 'Chicken Tikka',
      image: '',
      description: 'Marinated chicken pieces grilled to perfection.',
      ingredients: [
        '500g chicken pieces',
        '1 cup yogurt',
        '2 tbsp ginger-garlic paste',
        '1 tbsp red chili powder',
        '1 tsp garam masala',
        '2 tbsp oil',
        'Lemon juice',
        'Salt to taste'
      ],
      instructions: [
        'Marinate chicken for 4-6 hours.',
        'Skewer chicken pieces.',
        'Grill until charred and cooked.',
        'Baste with butter while grilling.',
        'Serve with mint chutney.'
      ],
      cookingTime: 30,
      difficulty: 'Medium',
      cuisine: 'Mughlai',
      rating: 4.8,
      price: 380
    },
    {
      id: 13,
      title: 'Vegetable Fried Rice',
      image: '',
      description: 'Fragrant rice stir-fried with mixed vegetables.',
      ingredients: [
        '2 cups cooked rice',
        '2 cups mixed vegetables',
        '2 eggs, beaten',
        '3 tbsp soy sauce',
        '2 tbsp oil',
        'Spring onions',
        'Salt and pepper'
      ],
      instructions: [
        'Heat oil in wok.',
        'Scramble eggs and set aside.',
        'Stir-fry vegetables until crisp.',
        'Add rice and toss well.',
        'Add soy sauce and seasonings.',
        'Mix in eggs and serve hot.'
      ],
      cookingTime: 20,
      difficulty: 'Easy',
      cuisine: 'Chinese',
      rating: 4.4,
      price: 160
    },
    {
      id: 14,
      title: 'Noodles',
      image: '',
      description: 'Stir-fried noodles with vegetables and sauces.',
      ingredients: [
        '200g noodles',
        '2 cups mixed vegetables',
        '3 tbsp soy sauce',
        '1 tbsp chili sauce',
        '2 tbsp oil',
        'Garlic, minced',
        'Spring onions'
      ],
      instructions: [
        'Boil noodles until al dente.',
        'Heat oil, add garlic.',
        'Stir-fry vegetables.',
        'Add noodles and sauces.',
        'Toss everything together.',
        'Garnish and serve.'
      ],
      cookingTime: 15,
      difficulty: 'Easy',
      cuisine: 'Chinese',
      rating: 4.3,
      price: 140
    },
    {
      id: 15,
      title: 'Manchurian',
      image: '',
      description: 'Crispy vegetable balls in tangy sauce.',
      ingredients: [
        '2 cups mixed vegetables',
        '1/2 cup flour',
        '1/4 cup corn flour',
        'Soy sauce',
        'Chili sauce',
        'Vinegar',
        'Garlic and ginger'
      ],
      instructions: [
        'Make vegetable balls.',
        'Deep fry until golden.',
        'Prepare tangy sauce.',
        'Combine balls with sauce.',
        'Serve hot garnished.'
      ],
      cookingTime: 25,
      difficulty: 'Medium',
      cuisine: 'Indo-Chinese',
      rating: 4.5,
      price: 190
    },
    {
      id: 16,
      title: 'Pizza Margherita',
      image: '',
      description: 'Classic pizza with tomato, mozzarella, and basil.',
      ingredients: [
        'Pizza base',
        '1/2 cup pizza sauce',
        '1 1/2 cups mozzarella',
        'Fresh basil leaves',
        'Olive oil',
        'Oregano',
        'Salt'
      ],
      instructions: [
        'Preheat oven to 220°C.',
        'Spread sauce on base.',
        'Add cheese and basil.',
        'Bake until golden.',
        'Drizzle olive oil.'
      ],
      cookingTime: 20,
      difficulty: 'Easy',
      cuisine: 'Italian',
      rating: 4.7,
      price: 300
    },
    {
      id: 17,
      title: 'Pasta Alfredo',
      image: '',
      description: 'Creamy pasta with parmesan and butter sauce.',
      ingredients: [
        '200g pasta',
        '1 cup heavy cream',
        '1/2 cup parmesan',
        '2 tbsp butter',
        'Garlic, minced',
        'Salt and pepper',
        'Parsley'
      ],
      instructions: [
        'Cook pasta al dente.',
        'Prepare creamy sauce.',
        'Combine pasta and sauce.',
        'Garnish with parsley.',
        'Serve immediately.'
      ],
      cookingTime: 15,
      difficulty: 'Easy',
      cuisine: 'Italian',
      rating: 4.6,
      price: 280
    },
    {
      id: 18,
      title: 'Garlic Bread',
      image: '',
      description: 'Crispy bread with garlic butter and herbs.',
      ingredients: [
        'French bread loaf',
        '1/2 cup butter',
        '4 cloves garlic',
        'Parsley, chopped',
        'Oregano',
        'Salt'
      ],
      instructions: [
        'Mix garlic with butter.',
        'Spread on bread slices.',
        'Bake until crispy.',
        'Sprinkle herbs.',
        'Serve hot.'
      ],
      cookingTime: 10,
      difficulty: 'Easy',
      cuisine: 'Italian',
      rating: 4.4,
      price: 120
    },
    {
      id: 19,
      title: 'French Fries',
      image: '',
      description: 'Crispy golden potato fries.',
      ingredients: [
        '4 large potatoes',
        'Oil for frying',
        'Salt',
        'Pepper',
        'Paprika (optional)'
      ],
      instructions: [
        'Cut potatoes into strips.',
        'Soak in cold water.',
        'Dry thoroughly.',
        'Fry until golden.',
        'Season and serve.'
      ],
      cookingTime: 20,
      difficulty: 'Easy',
      cuisine: 'Snacks',
      rating: 4.5,
      price: 100
    },
    {
      id: 20,
      title: 'Onion Rings',
      image: '',
      description: 'Crispy battered onion rings.',
      ingredients: [
        '2 large onions',
        '1 cup flour',
        '1/2 cup corn flour',
        '1 cup buttermilk',
        'Oil for frying',
        'Salt and spices'
      ],
      instructions: [
        'Slice onions into rings.',
        'Prepare batter.',
        'Coat rings in batter.',
        'Deep fry until crispy.',
        'Drain and season.'
      ],
      cookingTime: 15,
      difficulty: 'Easy',
      cuisine: 'Snacks',
      rating: 4.3,
      price: 130
    },
    {
      id: 21,
      title: 'Spring Rolls',
      image: '',
      description: 'Crispy rolls with vegetable filling.',
      ingredients: [
        'Spring roll wrappers',
        '2 cups mixed vegetables',
        '2 tbsp soy sauce',
        '1 tsp ginger-garlic',
        'Oil for frying',
        'Salt and pepper'
      ],
      instructions: [
        'Prepare vegetable filling.',
        'Wrap in spring roll sheets.',
        'Seal edges with paste.',
        'Deep fry until golden.',
        'Serve with sauce.'
      ],
      cookingTime: 25,
      difficulty: 'Medium',
      cuisine: 'Chinese',
      rating: 4.4,
      price: 150
    },
    {
      id: 22,
      title: 'Samosa',
      image: '',
      description: 'Crispy pastry with spiced potato filling.',
      ingredients: [
        '2 cups flour',
        '4 potatoes, boiled',
        '1/2 cup peas',
        'Spices and herbs',
        'Oil for frying',
        'Salt to taste'
      ],
      instructions: [
        'Prepare dough for covering.',
        'Make spiced potato filling.',
        'Shape samosas.',
        'Deep fry until golden.',
        'Serve with chutney.'
      ],
      cookingTime: 40,
      difficulty: 'Medium',
      cuisine: 'Indian Snacks',
      rating: 4.7,
      price: 80
    },
    {
      id: 23,
      title: 'Pakora',
      image: '',
      description: 'Vegetable fritters in chickpea batter.',
      ingredients: [
        '2 cups chickpea flour',
        '2 cups mixed vegetables',
        '1 tbsp spices',
        'Water for batter',
        'Oil for frying',
        'Salt to taste'
      ],
      instructions: [
        'Prepare thick batter.',
        'Coat vegetables in batter.',
        'Deep fry until crispy.',
        'Drain excess oil.',
        'Serve hot with chutney.'
      ],
      cookingTime: 20,
      difficulty: 'Easy',
      cuisine: 'Indian Snacks',
      rating: 4.5,
      price: 90
    },
    {
      id: 24,
      title: 'Chicken Soup',
      image: '',
      description: 'Hearty chicken soup with vegetables.',
      ingredients: [
        '500g chicken',
        '2 carrots, chopped',
        '2 celery stalks',
        '1 onion, chopped',
        'Herbs and spices',
        'Salt and pepper'
      ],
      instructions: [
        'Boil chicken with bones.',
        'Add vegetables and herbs.',
        'Simmer for 1-2 hours.',
        'Strain and season.',
        'Serve hot.'
      ],
      cookingTime: 90,
      difficulty: 'Easy',
      cuisine: 'Soups',
      rating: 4.6,
      price: 180
    },
    {
      id: 25,
      title: 'Tomato Soup',
      image: '',
      description: 'Creamy tomato soup with herbs.',
      ingredients: [
        '1 kg tomatoes',
        '1 onion, chopped',
        '2 tbsp cream',
        'Herbs and spices',
        'Salt and pepper',
        'Butter'
      ],
      instructions: [
        'Cook tomatoes and onion.',
        'Puree until smooth.',
        'Strain if desired.',
        'Add cream and butter.',
        'Serve with croutons.'
      ],
      cookingTime: 25,
      difficulty: 'Easy',
      cuisine: 'Soups',
      rating: 4.4,
      price: 120
    },
    {
      id: 26,
      title: 'Mushroom Soup',
      image: '',
      description: 'Creamy mushroom soup with herbs.',
      ingredients: [
        '500g mushrooms',
        '1 onion, chopped',
        '2 cups vegetable stock',
        '1/2 cup cream',
        'Herbs and spices',
        'Butter'
      ],
      instructions: [
        'Sauté mushrooms and onion.',
        'Add stock and simmer.',
        'Puree until smooth.',
        'Add cream and herbs.',
        'Serve hot.'
      ],
      cookingTime: 30,
      difficulty: 'Easy',
      cuisine: 'Soups',
      rating: 4.5,
      price: 160
    },
    {
      id: 27,
      title: 'Corn Soup',
      image: '',
      description: 'Sweet corn soup with vegetables.',
      ingredients: [
        '2 cups corn kernels',
        '1 carrot, chopped',
        '1/2 cup cream',
        'Corn flour for thickening',
        'Salt and pepper',
        'Spring onions'
      ],
      instructions: [
        'Cook corn and vegetables.',
        'Prepare stock base.',
        'Thicken with corn flour.',
        'Add cream and season.',
        'Garnish and serve.'
      ],
      cookingTime: 20,
      difficulty: 'Easy',
      cuisine: 'Chinese',
      rating: 4.3,
      price: 140
    },
    {
      id: 28,
      title: 'Mango Lassi',
      image: '',
      description: 'Refreshing yogurt-based mango drink.',
      ingredients: [
        '1 cup mango pulp',
        '1 cup yogurt',
        '1/2 cup milk',
        '2-3 tbsp sugar',
        'Cardamom powder',
        'Ice cubes'
      ],
      instructions: [
        'Combine all ingredients.',
        'Blend until smooth.',
        'Adjust sweetness.',
        'Chill and serve.',
        'Garnish as desired.'
      ],
      cookingTime: 5,
      difficulty: 'Easy',
      cuisine: 'Beverages',
      rating: 4.8,
      price: 80
    },
    {
      id: 29,
      title: 'Masala Chai',
      image: '',
      description: 'Spiced Indian tea with milk.',
      ingredients: [
        '2 cups water',
        '1 cup milk',
        '2 tsp tea leaves',
        '1 inch ginger',
        '2-3 cardamoms',
        'Sugar to taste'
      ],
      instructions: [
        'Boil water with spices.',
        'Add tea leaves and milk.',
        'Simmer for 2-3 minutes.',
        'Strain and serve hot.',
        'Adjust sweetness.'
      ],
      cookingTime: 10,
      difficulty: 'Easy',
      cuisine: 'Beverages',
      rating: 4.7,
      price: 40
    },
    {
      id: 30,
      title: 'Cold Coffee',
      image: '',
      description: 'Chilled coffee with milk and ice cream.',
      ingredients: [
        '2 cups cold milk',
        '2 tbsp coffee powder',
        '2 scoops vanilla ice cream',
        'Sugar to taste',
        'Ice cubes',
        'Chocolate syrup'
      ],
      instructions: [
        'Brew strong coffee and cool.',
        'Blend with milk and sugar.',
        'Add ice cream and ice.',
        'Blend until frothy.',
        'Serve chilled.'
      ],
      cookingTime: 5,
      difficulty: 'Easy',
      cuisine: 'Beverages',
      rating: 4.6,
      price: 120
    },
    {
      id: 31,
      title: 'Lemonade',
      image: '',
      description: 'Refreshing lemon drink with mint.',
      ingredients: [
        '4 lemons, juiced',
        '4 cups water',
        '1/2 cup sugar',
        'Mint leaves',
        'Ice cubes',
        'Salt (optional)'
      ],
      instructions: [
        'Dissolve sugar in water.',
        'Add lemon juice.',
        'Add mint and ice.',
        'Stir well and chill.',
        'Serve cold.'
      ],
      cookingTime: 5,
      difficulty: 'Easy',
      cuisine: 'Beverages',
      rating: 4.4,
      price: 60
    },
    {
      id: 32,
      title: 'Fruit Juice',
      image: '',
      description: 'Fresh mixed fruit juice.',
      ingredients: [
        '2 apples',
        '2 oranges',
        '1 pomegranate',
        '1 cup grapes',
        'Sugar if needed',
        'Ice cubes'
      ],
      instructions: [
        'Extract juice from fruits.',
        'Mix all juices together.',
        'Add sugar if desired.',
        'Chill with ice.',
        'Serve fresh.'
      ],
      cookingTime: 10,
      difficulty: 'Easy',
      cuisine: 'Beverages',
      rating: 4.5,
      price: 100
    },
    {
      id: 33,
      title: 'Milkshake',
      image: '',
      description: 'Creamy milkshake with favorite flavors.',
      ingredients: [
        '2 cups milk',
        '2 scoops ice cream',
        'Flavor of choice',
        'Sugar if needed',
        'Ice cubes',
        'Toppings'
      ],
      instructions: [
        'Combine all ingredients.',
        'Blend until smooth.',
        'Adjust consistency.',
        'Add toppings.',
        'Serve immediately.'
      ],
      cookingTime: 5,
      difficulty: 'Easy',
      cuisine: 'Beverages',
      rating: 4.6,
      price: 140
    },
    {
      id: 34,
      title: 'Ice Cream',
      image: '',
      description: 'Creamy frozen dessert in various flavors.',
      ingredients: [
        '2 cups heavy cream',
        '1 cup milk',
        '3/4 cup sugar',
        'Flavorings',
        'Stabilizers',
        'Egg yolks (optional)'
      ],
      instructions: [
        'Mix all ingredients.',
        'Churn in ice cream maker.',
        'Freeze until set.',
        'Scoop and serve.',
        'Add toppings.'
      ],
      cookingTime: 240,
      difficulty: 'Medium',
      cuisine: 'Desserts',
      rating: 4.8,
      price: 120
    },
    {
      id: 35,
      title: 'Gulab Jamun',
      image: '',
      description: 'Soft milk balls in sugar syrup.',
      ingredients: [
        '1 cup milk powder',
        '1/4 cup flour',
        '1/4 tsp baking soda',
        '2 tbsp ghee',
        'Milk for kneading',
        'Sugar syrup'
      ],
      instructions: [
        'Make soft dough.',
        'Shape into balls.',
        'Fry until golden.',
        'Soak in warm syrup.',
        'Serve warm or cold.'
      ],
      cookingTime: 40,
      difficulty: 'Medium',
      cuisine: 'Indian Desserts',
      rating: 4.7,
      price: 100
    },
    {
      id: 36,
      title: 'Rasgulla',
      image: '',
      description: 'Soft cheese balls in light syrup.',
      ingredients: [
        '1 liter milk',
        '2 tbsp lemon juice',
        '1 cup sugar',
        '4 cups water',
        'Cardamom powder'
      ],
      instructions: [
        'Prepare chenna from milk.',
        'Knead until smooth.',
        'Shape into balls.',
        'Cook in sugar syrup.',
        'Chill and serve.'
      ],
      cookingTime: 50,
      difficulty: 'Medium',
      cuisine: 'Indian Desserts',
      rating: 4.6,
      price: 90
    },
    {
      id: 37,
      title: 'Jalebi',
      image: '',
      description: 'Crispy swirls in sugar syrup.',
      ingredients: [
        '1 cup flour',
        '2 tbsp corn flour',
        '1/2 cup yogurt',
        'Sugar for syrup',
        'Saffron strands',
        'Oil for frying'
      ],
      instructions: [
        'Prepare fermented batter.',
        'Make swirls in hot oil.',
        'Fry until crispy.',
        'Soak in warm syrup.',
        'Serve warm.'
      ],
      cookingTime: 30,
      difficulty: 'Medium',
      cuisine: 'Indian Desserts',
      rating: 4.5,
      price: 80
    },
    {
      id: 38,
      title: 'Kheer',
      image: '',
      description: 'Rice pudding with nuts and cardamom.',
      ingredients: [
        '1/2 cup rice',
        '1 liter milk',
        '1/2 cup sugar',
        'Mixed nuts',
        'Cardamom powder',
        'Saffron strands'
      ],
      instructions: [
        'Cook rice in milk.',
        'Simmer until thick.',
        'Add sugar and nuts.',
        'Flavor with cardamom.',
        'Serve chilled.'
      ],
      cookingTime: 45,
      difficulty: 'Easy',
      cuisine: 'Indian Desserts',
      rating: 4.7,
      price: 110
    },
    {
      id: 39,
      title: 'Cake',
      image: '',
      description: 'Soft sponge cake with frosting.',
      ingredients: [
        '2 cups flour',
        '1 cup sugar',
        '1/2 cup butter',
        '3 eggs',
        '1 cup milk',
        'Baking powder'
      ],
      instructions: [
        'Cream butter and sugar.',
        'Add eggs one by one.',
        'Fold in dry ingredients.',
        'Bake until done.',
        'Cool and frost.'
      ],
      cookingTime: 60,
      difficulty: 'Medium',
      cuisine: 'Desserts',
      rating: 4.6,
      price: 200
    },
    {
      id: 40,
      title: 'Brownie',
      image: '',
      description: 'Rich chocolate brownies with nuts.',
      ingredients: [
        '1 cup chocolate',
        '1/2 cup butter',
        '1 cup sugar',
        '3 eggs',
        '1 cup flour',
        '1/2 cup walnuts'
      ],
      instructions: [
        'Melt chocolate and butter.',
        'Mix with sugar and eggs.',
        'Add flour and nuts.',
        'Bake until set.',
        'Cool and cut.'
      ],
      cookingTime: 40,
      difficulty: 'Easy',
      cuisine: 'Desserts',
      rating: 4.8,
      price: 180
    },
    {
      id: 41,
      title: 'Pancakes',
      image: '',
      description: 'Fluffy pancakes with maple syrup.',
      ingredients: [
        '2 cups flour',
        '2 eggs',
        '1 1/2 cups milk',
        '2 tbsp sugar',
        '2 tsp baking powder',
        'Butter for cooking'
      ],
      instructions: [
        'Mix dry ingredients.',
        'Add wet ingredients.',
        'Cook on hot griddle.',
        'Flip when bubbly.',
        'Serve with syrup.'
      ],
      cookingTime: 20,
      difficulty: 'Easy',
      cuisine: 'Breakfast',
      rating: 4.5,
      price: 150
    },
    {
      id: 42,
      title: 'Waffles',
      image: '',
      description: 'Crispy waffles with toppings.',
      ingredients: [
        '2 cups flour',
        '2 eggs',
        '1 3/4 cups milk',
        '1/2 cup oil',
        '1 tbsp sugar',
        'Baking powder'
      ],
      instructions: [
        'Mix all ingredients.',
        'Preheat waffle iron.',
        'Pour batter and cook.',
        'Cook until golden.',
        'Serve with toppings.'
      ],
      cookingTime: 15,
      difficulty: 'Easy',
      cuisine: 'Breakfast',
      rating: 4.4,
      price: 160
    },
    {
      id: 43,
      title: 'Omelette',
      image: '',
      description: 'Fluffy eggs with fillings.',
      ingredients: [
        '3 eggs',
        '2 tbsp milk',
        'Salt and pepper',
        'Fillings of choice',
        'Butter for cooking',
        'Herbs'
      ],
      instructions: [
        'Beat eggs with milk.',
        'Season with salt.',
        'Cook in buttered pan.',
        'Add fillings.',
        'Fold and serve.'
      ],
      cookingTime: 10,
      difficulty: 'Easy',
      cuisine: 'Breakfast',
      rating: 4.6,
      price: 80
    },
    {
      id: 44,
      title: 'Sandwich',
      image: '',
      description: 'Toasted bread with various fillings.',
      ingredients: [
        'Bread slices',
        'Butter',
        'Fillings of choice',
        'Cheese slices',
        'Vegetables',
        'Sauces'
      ],
      instructions: [
        'Butter bread slices.',
        'Add fillings and cheese.',
        'Toast until golden.',
        'Cut and serve.',
        'Add sauces.'
      ],
      cookingTime: 10,
      difficulty: 'Easy',
      cuisine: 'Snacks',
      rating: 4.3,
      price: 120
    },
    {
      id: 45,
      title: 'Burger',
      image: '',
      description: 'Juicy patty in bun with toppings.',
      ingredients: [
        'Burger buns',
        'Patty of choice',
        'Lettuce leaves',
        'Tomato slices',
        'Cheese slice',
        'Sauces'
      ],
      instructions: [
        'Toast burger buns.',
        'Cook patty properly.',
        'Assemble with toppings.',
        'Add sauces.',
        'Serve immediately.'
      ],
      cookingTime: 15,
      difficulty: 'Easy',
      cuisine: 'Fast Food',
      rating: 4.5,
      price: 200
    },
    {
      id: 46,
      title: 'Hot Dog',
      image: '',
      description: 'Sausage in bun with condiments.',
      ingredients: [
        'Hot dog buns',
        'Sausages',
        'Mustard sauce',
        'Ketchup',
        'Chopped onions',
        'Relish'
      ],
      instructions: [
        'Cook sausages.',
        'Warm the buns.',
        'Place sausage in bun.',
        'Add condiments.',
        'Serve hot.'
      ],
      cookingTime: 10,
      difficulty: 'Easy',
      cuisine: 'Fast Food',
      rating: 4.2,
      price: 140
    },
    {
      id: 47,
      title: 'Tacos',
      image: '',
      description: 'Crispy shells with spicy fillings.',
      ingredients: [
        'Taco shells',
        'Ground meat/beans',
        'Lettuce',
        'Tomatoes',
        'Cheese',
        'Sour cream'
      ],
      instructions: [
        'Prepare filling.',
        'Warm taco shells.',
        'Assemble with toppings.',
        'Add sauces.',
        'Serve immediately.'
      ],
      cookingTime: 20,
      difficulty: 'Easy',
      cuisine: 'Mexican',
      rating: 4.4,
      price: 180
    },
    {
      id: 48,
      title: 'Nachos',
      image: '',
      description: 'Crispy chips with cheese and toppings.',
      ingredients: [
        'Tortilla chips',
        'Cheese sauce',
        'Jalapeños',
        'Sour cream',
        'Salsa',
        'Guacamole'
      ],
      instructions: [
        'Arrange chips on plate.',
        'Pour cheese sauce.',
        'Add other toppings.',
        'Bake until melted.',
        'Serve immediately.'
      ],
      cookingTime: 15,
      difficulty: 'Easy',
      cuisine: 'Mexican',
      rating: 4.3,
      price: 160
    },
    {
      id: 49,
      title: 'Quesadilla',
      image: '',
      description: 'Toasted tortilla with cheese filling.',
      ingredients: [
        'Tortillas',
        'Cheese blend',
        'Fillings of choice',
        'Butter/oil',
        'Sour cream',
        'Salsa'
      ],
      instructions: [
        'Place filling on tortilla.',
        'Top with cheese.',
        'Cover with second tortilla.',
        'Cook until golden.',
        'Cut and serve.'
      ],
      cookingTime: 10,
      difficulty: 'Easy',
      cuisine: 'Mexican',
      rating: 4.4,
      price: 170
    },
    {
      id: 50,
      title: 'Burrito',
      image: '',
      description: 'Large tortilla wrapped with fillings.',
      ingredients: [
        'Large tortillas',
        'Rice',
        'Beans',
        'Meat/vegetables',
        'Cheese',
        'Sauces'
      ],
      instructions: [
        'Warm tortilla.',
        'Layer fillings.',
        'Fold properly.',
        'Toast if desired.',
        'Serve with sides.'
      ],
      cookingTime: 15,
      difficulty: 'Easy',
      cuisine: 'Mexican',
      rating: 4.5,
      price: 220
    }
  ];
 constructor(private http: HttpClient) { }
  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  searchRecipes(query: string): Recipe[] {
    if (!query) return this.recipes;
    const lowerQuery = query.toLowerCase();
    return this.recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(lowerQuery) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(lowerQuery)
      ) ||
      recipe.cuisine.toLowerCase().includes(lowerQuery) ||
      recipe.description.toLowerCase().includes(lowerQuery)
    );
  }

    getRecipesByCuisine(cuisine: string): Recipe[] {
    if (cuisine === 'all') return this.recipes;
    return this.recipes.filter(recipe => 
      recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
    );
  }

  testBackendConnection(): void {
    this.http.get('http://localhost:3000/api/recipes').subscribe({
      next: (data: any) => console.log('✅ Backend connected:', data),
      error: (error: any) => console.log('❌ Backend not available, using local data')
    });
  }
}  