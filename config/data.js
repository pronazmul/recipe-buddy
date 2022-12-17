const demoUsers = [
  {
    firstName: 'Nazmul',
    lastName: 'Huda',
    email: 'nazmul@gmail.com',
    username: 'nazmul',
    password: 'Password@01',
  },
  {
    firstName: 'Mahmood',
    lastName: 'Masud',
    email: 'mahmood@gmail.com',
    username: 'mahmood',
    password: 'Password@01',
  },
]

const demoRecipies = [
  {
    name: 'Beef steak, porterhouse, no visible fat eaten',
    unit: 'ounce',
    weight: 85.049,
    category: 'Meat, fish, and poultry',
    water: 50.68,
    calories: 173.499,
    protein: 26.084,
    fat: 7.654,
    carbohydrate: 0,
    vitaminC: 0,
    cholesterol: 76.544,
    sugars: 0,
    caloriesFromProtein: 60.137,
    caloriesFromFat: 39.706,
    caloriesFromCarbohydrate: 0,
    energy: 725.92,
    salt: 0,
  },
  {
    name: 'Coffee, prepared from grounds',
    unit: 'fluid ou',
    weight: 355.2,
    category: 'Beverages',
    water: 353.033,
    calories: 3.552,
    protein: 0.426,
    fat: 0.071,
    carbohydrate: 1.669,
    vitaminC: 0,
    cholesterol: 0,
    sugars: 0,
    caloriesFromProtein: 41.64,
    caloriesFromFat: 16.74,
    caloriesFromCarbohydrate: 41.83,
    energy: 14.862,
    salt: 0,
  },
  {
    name: 'Chocolate cake, not frosted, store bought',
    unit: 'large cupcake',
    weight: 46,
    category: 'Desserts',
    water: 21.991,
    calories: 142.178,
    protein: 2.098,
    fat: 6.393,
    carbohydrate: 20.472,
    vitaminC: 0.025,
    cholesterol: 27.526,
    sugars: 10.137,
    caloriesFromProtein: 5.563,
    caloriesFromFat: 39.642,
    caloriesFromCarbohydrate: 54.708,
    energy: 594.873,
    salt: 0,
  },
  {
    name: 'Kit Kat',
    unit: 'regular size bar - each 1.5',
    weight: 43,
    category: 'Candy, sugar, and sweets',
    water: 0.112,
    calories: 215.43,
    protein: 1.960999,
    fat: 10.776,
    carbohydrate: 29.386,
    vitaminC: 0.258,
    cholesterol: 4.73,
    sugars: 23.508,
    caloriesFromProtein: 3.368,
    caloriesFromFat: 43.517,
    caloriesFromCarbohydrate: 53.062,
    energy: 901.359,
    salt: 0,
  },
  {
    name: 'Honey Nut Cheerios (General Mills)',
    unit: 'cup',
    weight: 37,
    category: 'Grain products',
    water: 1.236,
    calories: 143.768,
    protein: 2.988,
    fat: 2.046,
    carbohydrate: 29.605,
    vitaminC: 9,
    cholesterol: 0,
    sugars: 12.198,
    caloriesFromProtein: 6.797,
    caloriesFromFat: 12.108,
    caloriesFromCarbohydrate: 81.09,
    energy: 601.525,
    salt: 0,
  },
  {
    name: 'Cheddar cheese, natural',
    unit: 'ounce',
    weight: 28.35,
    category: 'Milk, cream, cheese, and related products',
    water: 10.418,
    calories: 114.249,
    protein: 6.484,
    fat: 9.443,
    carbohydrate: 0.955,
    vitaminC: 0,
    cholesterol: 28.066,
    sugars: 0.136,
    caloriesFromProtein: 22.7,
    caloriesFromFat: 73.976,
    caloriesFromCarbohydrate: 3.3449999999999998,
    energy: 478.018,
    salt: 0,
  },
  {
    name: 'Oreo Cookies - Double Stuf (Nabisco)',
    unit: 'each',
    weight: 29,
    category: 'Desserts',
    water: 1.8050000000000002,
    calories: 144.659,
    protein: 1.26,
    fat: 6.9559999999999995,
    carbohydrate: 20.874,
    vitaminC: 0,
    cholesterol: 0,
    sugars: 13.002,
    caloriesFromProtein: 2.927,
    caloriesFromFat: 42.395,
    caloriesFromCarbohydrate: 54.696,
    energy: 605.253,
    salt: 0,
  },
  {
    name: 'Cheese Nips - Cheddar (Nabisco)',
    unit: 'each',
    weight: 30,
    category: 'Grain products',
    water: 3.637,
    calories: 144.153,
    protein: 2.983,
    fat: 6.028,
    carbohydrate: 19.206,
    vitaminC: 0,
    cholesterol: 1.732,
    sugars: 0.076,
    caloriesFromProtein: 8.366,
    caloriesFromFat: 36.93,
    caloriesFromCarbohydrate: 54.78,
    energy: 603.136,
    salt: 0,
  },
  {
    name: 'Sopaipillas',
    unit: 'piece - approx 1 3/5',
    weight: 53.6,
    category: 'Desserts',
    water: 18.675,
    calories: 197.443,
    protein: 2.582,
    fat: 12.203,
    carbohydrate: 19.46,
    vitaminC: 0,
    cholesterol: 0,
    sugars: 0.067,
    caloriesFromProtein: 5.297,
    caloriesFromFat: 54.579,
    caloriesFromCarbohydrate: 40.176,
    energy: 826.102,
    salt: 0,
  },
  {
    name: 'Guacamole (avocado dip)',
    unit: 'tablespoon',
    weight: 30,
    category: 'Vegetables and vegetable products',
    water: 24.068,
    calories: 27.615,
    protein: 0.457,
    fat: 2.123,
    carbohydrate: 2.324,
    vitaminC: 9.034,
    cholesterol: 0,
    sugars: 0.54,
    caloriesFromProtein: 5.002,
    caloriesFromFat: 64.339,
    caloriesFromCarbohydrate: 30.485,
    energy: 115.541,
    salt: 0,
  },
  {
    name: 'Kraft Thousand Island Dressing',
    unit: 'tablespoon',
    weight: 30,
    category: 'Fats, oils, and nuts',
    water: 12.916,
    calories: 123.975,
    protein: 0.231,
    fat: 12,
    carbohydrate: 4.25,
    vitaminC: 0.509,
    cholesterol: 9.999,
    sugars: 4,
    caloriesFromProtein: 0.68,
    caloriesFromFat: 85.593,
    caloriesFromCarbohydrate: 13.154,
    energy: 518.711,
    salt: 0,
  },
  {
    name: 'Omelet, with cheese',
    unit: 'large egg used - 1 whole egg or 2 egg whites',
    weight: 71,
    category: 'Eggs and related products',
    water: 52.158,
    calories: 174.213,
    protein: 9.523,
    fat: 14.781,
    carbohydrate: 1.047,
    vitaminC: 0.007,
    cholesterol: 200.484,
    sugars: 0.639,
    caloriesFromProtein: 23.165,
    caloriesFromFat: 74.452,
    caloriesFromCarbohydrate: 2.302,
    energy: 728.907,
    salt: 0,
  },
  {
    name: "McDonald's French fries",
    unit: 'medium - order',
    weight: 111,
    category: 'Vegetables and vegetable products',
    water: 47.089,
    calories: 320.02,
    protein: 3.711,
    fat: 15.217,
    carbohydrate: 43.422,
    vitaminC: 16.058,
    cholesterol: 0,
    sugars: 1.931,
    caloriesFromProtein: 3.223,
    caloriesFromFat: 42.252,
    caloriesFromCarbohydrate: 54.681,
    energy: 1338.964,
    salt: 0,
  },
  {
    name: "Fleischmann's Olive Oil Spread",
    unit: 'tablespoon',
    weight: 11,
    category: 'Fats, oils, and nuts',
    water: 4.666,
    calories: 59.95,
    protein: 0.053,
    fat: 6.001,
    carbohydrate: 0.08,
    vitaminC: 0,
    cholesterol: 0,
    sugars: 0.08,
    caloriesFromProtein: 0.352,
    caloriesFromFat: 99.091,
    caloriesFromCarbohydrate: 0.536,
    energy: 250.831,
    salt: 0,
  },
  {
    name: 'Salmon, chinook (king), cooked',
    unit: 'ounce',
    weight: 85.049,
    category: 'Meat, fish, and poultry',
    water: 55.792,
    calories: 196.462,
    protein: 21.874,
    fat: 11.379,
    carbohydrate: 0,
    vitaminC: 3.487,
    cholesterol: 72.291,
    sugars: 0,
    caloriesFromProtein: 47.543,
    caloriesFromFat: 52.246,
    caloriesFromCarbohydrate: 0,
    energy: 821.997,
    salt: 0,
  },
  {
    name: 'Apple, fresh, with skin',
    unit: 'medium - 3',
    weight: 182,
    category: 'Fruits and fruit products',
    water: 155.719,
    calories: 94.64,
    protein: 0.473,
    fat: 0.309,
    carbohydrate: 25.134,
    vitaminC: 8.372,
    cholesterol: 0,
    sugars: 18.91,
    caloriesFromProtein: 1.6800000000000002,
    caloriesFromFat: 2.7359999999999998,
    caloriesFromCarbohydrate: 95.608,
    energy: 395.974,
    salt: 0,
  },
  {
    name: 'Spaghetti noodles, spinach, cooked in unsalted water',
    unit: 'cup',
    weight: 140,
    category: 'Grain products',
    water: 95.396,
    calories: 182,
    protein: 6.412,
    fat: 0.882,
    carbohydrate: 36.61,
    vitaminC: 0,
    cholesterol: 0,
    sugars: 0.14,
    caloriesFromProtein: 13.599,
    caloriesFromFat: 4.056,
    caloriesFromCarbohydrate: 82.674,
    energy: 761.488,
    salt: 0,
  },
  {
    name: 'Baskin-Robbins Ice Cream - Strawberry Cheesecake',
    unit: 'cup',
    weight: 103,
    category: 'Milk, cream, cheese, and related products',
    water: 62.83,
    calories: 213.21,
    protein: 3.605,
    fat: 11.33,
    carbohydrate: 24.308,
    vitaminC: 0.618,
    cholesterol: 45.32,
    sugars: 21.857,
    caloriesFromProtein: 6.763,
    caloriesFromFat: 47.826,
    caloriesFromCarbohydrate: 45.604,
    energy: 892.071,
    salt: 0,
  },
  {
    name: 'Lean Pockets Garlic & Herb Seasoned Crust - Chicken Parmesan',
    unit: 'each - each 4.5 OZ',
    weight: 127,
    category: 'Commercial entrees and dinners',
    water: 68.403,
    calories: 254.124,
    protein: 10.772,
    fat: 4.961,
    carbohydrate: 40.866,
    vitaminC: 1.888,
    cholesterol: 15.057,
    sugars: 5.282,
    caloriesFromProtein: 17.242,
    caloriesFromFat: 17.267,
    caloriesFromCarbohydrate: 65.564,
    energy: 1063.255,
    salt: 0,
  },
  {
    name: 'Pistachio nuts, roasted, salted',
    unit: 'cup',
    weight: 30.75,
    category: 'Fats, oils, and nuts',
    water: 0.55,
    calories: 174.968,
    protein: 6.473,
    fat: 14.09,
    carbohydrate: 8.472,
    vitaminC: 0.923,
    cholesterol: 0,
    sugars: 2.38,
    caloriesFromProtein: 12.837,
    caloriesFromFat: 67.401,
    caloriesFromCarbohydrate: 19.706,
    energy: 732.066,
    salt: 0,
  },
  {
    name: 'French silk pie',
    unit: 'piece - single crust',
    weight: 135.75,
    category: 'Desserts',
    water: 46.803,
    calories: 558.705,
    protein: 6.153,
    fat: 41.395,
    carbohydrate: 43.097,
    vitaminC: 0.201,
    cholesterol: 108.992,
    sugars: 28.152,
    caloriesFromProtein: 4.602,
    caloriesFromFat: 64.608,
    caloriesFromCarbohydrate: 30.465,
    energy: 2337.622,
    salt: 0,
  },
  {
    name: 'Greek salad, with spinach, lettuce, feta cheese, tomatoes, cucumber, olives',
    unit: 'cup',
    weight: 105,
    category: 'Vegetables and vegetable products',
    water: 89.812,
    calories: 81.704,
    protein: 2.024,
    fat: 6.955,
    carbohydrate: 3.96,
    vitaminC: 9.737,
    cholesterol: 5.563,
    sugars: 1.861,
    caloriesFromProtein: 8.152,
    caloriesFromFat: 74.556,
    caloriesFromCarbohydrate: 17.305,
    energy: 341.85,
    salt: 0,
  },
  {
    name: 'Chicken salad sandwich',
    unit: 'sandwich',
    weight: 110,
    category: 'Meat, fish, and poultry',
    water: 66.085,
    calories: 341.866,
    protein: 16.689,
    fat: 16.925,
    carbohydrate: 29.782,
    vitaminC: 0.504,
    cholesterol: 42.03,
    sugars: 4.774,
    caloriesFromProtein: 20.249,
    caloriesFromFat: 44.402,
    caloriesFromCarbohydrate: 35.394,
    energy: 1430.367,
    salt: 0,
  },
  {
    name: 'Hot chili sauce (Sriracha)',
    unit: 'teaspoon',
    weight: 6.5,
    category: 'Miscellaneous',
    water: 4.67,
    calories: 6.045,
    protein: 0.125,
    fat: 0.06,
    carbohydrate: 1.245,
    vitaminC: 1.749,
    cholesterol: 0,
    sugars: 0.982,
    caloriesFromProtein: 8.301,
    caloriesFromFat: 9,
    caloriesFromCarbohydrate: 82.409,
    energy: 25.292,
    salt: 0,
  },
  {
    name: "Lay's Potato Chips - Flamin' Hot",
    unit: 'ounce',
    weight: 28.35,
    category: 'Grain products',
    water: 0.996,
    calories: 155.322,
    protein: 1.288,
    fat: 10.279,
    carbohydrate: 15.025,
    vitaminC: 6.298,
    cholesterol: 0,
    sugars: 0.68,
    caloriesFromProtein: 2.303,
    caloriesFromFat: 58.827,
    caloriesFromCarbohydrate: 38.979,
    energy: 649.867,
    salt: 0,
  },
  {
    name: 'Jolly Time Microwave Popcorn - Blast O Butter',
    unit: 'cup',
    weight: 28.286,
    category: 'Grain products',
    water: 0.471,
    calories: 138.081,
    protein: 1.83,
    fat: 10.071,
    carbohydrate: 11,
    vitaminC: 0,
    cholesterol: 0,
    sugars: 0.123,
    caloriesFromProtein: 3.618,
    caloriesFromFat: 64.254,
    caloriesFromCarbohydrate: 32.105,
    energy: 577.731,
    salt: 0,
  },
  {
    name: 'Wonton soup, with pork',
    unit: 'cup',
    weight: 241,
    category: 'Soups, gravy, and sauces',
    water: 185.503,
    calories: 226.532,
    protein: 13.383,
    fat: 3.942,
    carbohydrate: 33.505,
    vitaminC: 0.703,
    cholesterol: 51.695,
    sugars: 0.853,
    caloriesFromProtein: 23.945,
    caloriesFromFat: 15.525,
    caloriesFromCarbohydrate: 60.65,
    energy: 947.81,
    salt: 0,
  },
  {
    name: 'Rockstar Punched',
    unit: 'fluid ounce',
    weight: 372,
    category: 'Beverages',
    water: 324.043,
    calories: 179.112,
    protein: 0,
    fat: 0,
    carbohydrate: 46.922,
    vitaminC: 0,
    cholesterol: 0,
    sugars: 46.839,
    caloriesFromProtein: 0,
    caloriesFromFat: 0,
    caloriesFromCarbohydrate: 99.989,
    energy: 749.405,
    salt: 0,
  },
  {
    name: 'Carrots, raw',
    unit: 'cup',
    weight: 110,
    category: 'Vegetables and vegetable products',
    water: 97.119,
    calories: 45.1,
    protein: 1.023,
    fat: 0.264,
    carbohydrate: 10.538,
    vitaminC: 6.49,
    cholesterol: 0,
    sugars: 5.214,
    caloriesFromProtein: 6.306,
    caloriesFromFat: 4.9,
    caloriesFromCarbohydrate: 89.725,
    energy: 188.698,
    salt: 0,
  },
  {
    name: 'Chobani Blended Non-Fat Greek Yogurt - vanilla',
    unit: 'ounce',
    weight: 170.097,
    category: 'Milk, cream, cheese, and related products',
    water: 136.801,
    calories: 130.528,
    protein: 14.539,
    fat: 0.56,
    carbohydrate: 16.488,
    vitaminC: 0,
    cholesterol: 7.132,
    sugars: 14.933,
    caloriesFromProtein: 44.554,
    caloriesFromFat: 3.864,
    caloriesFromCarbohydrate: 49.15,
    energy: 546.129,
    salt: 0,
  },
]

module.exports = {
  demoRecipies,
  demoUsers,
}