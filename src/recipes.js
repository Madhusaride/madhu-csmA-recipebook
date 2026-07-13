const recipes = [
  //  VEG
  {
    id: 1,
    name: "Tomato Soup",
    category: "Veg",
    subCategory: "Soup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4ipBap_Uksz5JD0fZuJgbG-2HUcxIVg3WSp81aIRQA&s=10",
    ingredients: [
      "Tomatoes - 4",
      "Onion - 1",
      "Garlic Cloves - 3",
      "Butter - 1 tbsp",
      "Black Pepper Powder - 1 tsp",
      "Salt - To Taste",
      "Water - 2 Cups",
    ],

    steps: [
      "Wash and chop the tomatoes and onion.",
      "Boil tomatoes, onion and garlic for 10 minutes.",
      "Blend into a smooth puree.",
      "Heat butter in a pan.",
      "Pour the puree and cook for 5 minutes.",
      "Add pepper powder and salt.",
      "Serve hot.",
    ],
  },
  {
    id: 2,
    name: "Sweet Corn Soup",
    category: "Veg",
    subCategory: "Soup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoh-HvewT0Gx2t6OVruuba2QCt2xNZZWoBM-Ti2EHa6A&s=10",
    ingredients: [
      "Sweet Corn - 1 Cup",
      "Carrot - 1",
      "Beans - 5",
      "Corn Flour - 1 tbsp",
      "Black Pepper - 1 tsp",
      "Salt - To Taste",
      "Water - 3 Cups",
    ],

    steps: [
      "Boil sweet corn and vegetables.",
      "Grind half of the corn into a paste.",
      "Mix the paste with boiled vegetables.",
      "Add corn flour mixed with water.",
      "Cook until thick.",
      "Add pepper and salt.",
      "Serve hot.",
    ],
  },
  {
    id: 3,
    name: "Veg Spring Roll",
    category: "Veg",
    subCategory: "Starter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjX01TiL5q1y2s6HqyZFKKJv8EVucRlTCraNSP03sdwQ&s=10",
    ingredients: [
      "Spring Roll Sheets - 6",
      "Cabbage - 1 Cup",
      "Carrot - 1",
      "Capsicum - 1",
      "Pepper Powder - 1 tsp",
      "Salt - To Taste",
      "Oil - For Frying",
    ],

    steps: [
      "Chop all vegetables finely.",
      "Saute vegetables for 5 minutes.",
      "Add pepper and salt.",
      "Place stuffing inside the sheet.",
      "Roll tightly and seal the edges.",
      "Deep fry until golden brown.",
      "Serve with sauce.",
    ],
  },
  {
    id: 4,
    name: "Paneer Tikka",
    category: "Veg",
    subCategory: "Starter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEdhDNgWgE5mp3tDJVmidEElMUnz4hCdeMGDvAnelrg&s=10",
    ingredients: [
      "Paneer - 250 g",
      "Curd - 1 Cup",
      "Red Chilli Powder - 1 tsp",
      "Turmeric - 1/2 tsp",
      "Garam Masala - 1 tsp",
      "Capsicum - 1",
      "Onion - 1",
      "Salt - To Taste",
    ],

    steps: [
      "Mix curd and all spices.",
      "Add paneer cubes and vegetables.",
      "Marinate for 30 minutes.",
      "Arrange on skewers.",
      "Grill for 15 minutes.",
      "Serve with mint chutney.",
    ],
  },
  {
    id: 5,
    name: "Veg Biryani",
    category: "Veg",
    subCategory: "Main Course",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0Gpii3cekCL5PD06djZzDenKQOXW4sz5ydtDw08Xyw&s=10",
    ingredients: [
      "Basmati Rice - 2 Cups",
      "Mixed Vegetables - 2 Cups",
      "Onion - 2",
      "Tomato - 2",
      "Biryani Masala - 2 tbsp",
      "Ginger Garlic Paste - 1 tbsp",
      "Mint Leaves - 1/2 Cup",
      "Salt - To Taste",
    ],

    steps: [
      "Cook basmati rice until 70% done.",
      "Saute onions until golden.",
      "Add ginger garlic paste.",
      "Add tomatoes and vegetables.",
      "Mix biryani masala.",
      "Layer rice over vegetables.",
      "Cook on low flame for 20 minutes.",
      "Serve hot with raita.",
    ],
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    category: "Veg",
    subCategory: "Main Course",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXI0QC_4xk-vSo0L-xPJouSKPcDloalaKfkbhsgrfAUg&s=10",
    ingredients: [
      "Paneer - 250 g",
      "Butter - 2 tbsp",
      "Tomatoes - 3",
      "Onion - 1",
      "Fresh Cream - 3 tbsp",
      "Garam Masala - 1 tsp",
      "Red Chilli Powder - 1 tsp",
      "Salt - To Taste",
    ],

    steps: [
      "Saute onions and tomatoes.",
      "Blend into a smooth gravy.",
      "Heat butter in a pan.",
      "Add gravy and spices.",
      "Add paneer cubes.",
      "Mix fresh cream.",
      "Cook for 5 minutes.",
      "Serve with naan or roti.",
    ],
  },
  {
    id: 7,
    name: "Jeera Rice",
    category: "Veg",
    subCategory: "Side Dish",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ86_MN8o6fOki__tw3wFRaIoE6UbLy3FUNlJOz2PSEw&s=10",
    ingredients: [
      "Cooked Rice - 2 Cups",
      "Jeera - 2 tsp",
      "Ghee - 2 tbsp",
      "Green Chilli - 2",
      "Coriander Leaves - 2 tbsp",
      "Salt - To Taste",
    ],

    steps: [
      "Heat ghee in a pan.",
      "Add jeera and allow it to splutter.",
      "Add green chillies.",
      "Mix cooked rice.",
      "Add salt.",
      "Garnish with coriander leaves.",
      "Serve hot.",
    ],
  },
  {
    id: 8,
    name: "Raita",
    category: "Veg",
    subCategory: "Side Dish",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftlcp-tDEwqIefoG5e3D4ufCpt302DKCuqFF6HDDIYg&s=10",
    ingredients: [
      "Curd - 2 Cups",
      "Onion - 1",
      "Cucumber - 1",
      "Green Chilli - 1",
      "Coriander Leaves - 2 tbsp",
      "Salt - To Taste",
    ],

    steps: [
      "Chop onion and cucumber finely.",
      "Add to curd.",
      "Mix green chilli and coriander.",
      "Add salt.",
      "Mix well.",
      "Serve chilled.",
    ],
  },

  //  NON VEG
  {
    id: 9,
    name: "Chicken Soup",
    category: "Non Veg",
    subCategory: "Soup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJKjEu0DBsPGWLLFNTSH_28MtsxpTGlLzeuFJo6mWQw&s=10",
    ingredients: [
      "Curd - 2 Cups",
      "Onion - 1",
      "Cucumber - 1",
      "Green Chilli - 1",
      "Coriander Leaves - 2 tbsp",
      "Salt - To Taste",
    ],

    steps: [
      "Chop onion and cucumber finely.",
      "Add to curd.",
      "Mix green chilli and coriander.",
      "Add salt.",
      "Mix well.",
      "Serve chilled.",
    ],
  },
  {
    id: 10,
    name: "Mutton Soup",
    category: "Non Veg",
    subCategory: "Soup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4zD4GFfmWbFLPlb8NngXrnvC_KLYTd5YBbOW833hEw&s=10",
    ingredients: [
      "Mutton - 300 g",
      "Onion - 1",
      "Garlic - 5 cloves",
      "Ginger - 1 inch",
      "Pepper Powder - 1 tsp",
      "Coriander Leaves - 2 tbsp",
      "Salt - To Taste",
    ],

    steps: [
      "Pressure cook mutton with water.",
      "Add onion, ginger and garlic.",
      "Cook until mutton becomes soft.",
      "Add pepper powder.",
      "Mix salt.",
      "Garnish with coriander.",
      "Serve hot.",
    ],
  },
  {
    id: 11,
    name: "Chicken 65",
    category: "Non Veg",
    subCategory: "Starter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxK8cBXbVhg3Wyu9_XAI5bnCM1ZjZqpC8ydJkF0av0Q&s=10",
    ingredients: [
      "Chicken - 500 g",
      "Corn Flour - 2 tbsp",
      "Maida - 2 tbsp",
      "Red Chilli Powder - 2 tsp",
      "Ginger Garlic Paste - 1 tbsp",
      "Egg - 1",
      "Salt - To Taste",
      "Oil - For Frying",
    ],

    steps: [
      "Mix chicken with all ingredients.",
      "Marinate for 30 minutes.",
      "Heat oil.",
      "Deep fry chicken until crispy.",
      "Drain excess oil.",
      "Serve hot.",
    ],
  },
  {
    id: 12,
    name: "Prawns Fry",
    category: "Non Veg",
    subCategory: "Starter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_n8QzKmTCVXqPWS66mxaXECSHrGZSK4OD-XpccCsbsg&s=10",
    ingredients: [
      "Prawns - 300 g",
      "Red Chilli Powder - 1 tsp",
      "Turmeric - 1/2 tsp",
      "Ginger Garlic Paste - 1 tbsp",
      "Lemon Juice - 1 tbsp",
      "Salt - To Taste",
      "Oil - 2 tbsp",
    ],

    steps: [
      "Clean the prawns.",
      "Marinate with spices.",
      "Keep aside for 20 minutes.",
      "Heat oil.",
      "Fry prawns until golden.",
      "Serve hot.",
    ],
  },
  {
    id: 13,
    name: "Chicken Biryani",
    category: "Non Veg",
    subCategory: "Main Course",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LnqS1-P1FaOWBk_wME2GHeVa3DFewHQrLAQIbTlzbQ&s=10",
    ingredients: [
      "Chicken - 500 g",
      "Basmati Rice - 2 Cups",
      "Onions - 2",
      "Tomatoes - 2",
      "Biryani Masala - 2 tbsp",
      "Mint Leaves - 1/2 Cup",
      "Curd - 1/2 Cup",
      "Salt - To Taste",
    ],

    steps: [
      "Marinate chicken with curd and spices.",
      "Cook basmati rice until 70% done.",
      "Prepare chicken masala.",
      "Layer rice over chicken.",
      "Cook on dum for 20 minutes.",
      "Serve with raita.",
    ],
  },
  {
    id: 14,
    name: "Mutton Curry",
    category: "Non Veg",
    subCategory: "Main Course",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvcungMBpyJD0RjE36sufqsFOI9sexy3jhuMcM2i48w&s=10",
    ingredients: [
      "Mutton - 500 g",
      "Onions - 2",
      "Tomatoes - 2",
      "Ginger Garlic Paste - 1 tbsp",
      "Red Chilli Powder - 1 tsp",
      "Garam Masala - 1 tsp",
      "Salt - To Taste",
      "Oil - 2 tbsp",
    ],

    steps: [
      "Pressure cook mutton until soft.",
      "Fry onions until golden.",
      "Add ginger garlic paste.",
      "Add tomatoes and spices.",
      "Mix cooked mutton.",
      "Cook for 15 minutes.",
      "Serve hot.",
    ],
  },
  {
    id: 15,
    name: "Fish Fry",
    category: "Non Veg",
    subCategory: "Side Dish",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qW9OZ60M28BAyzahjDUwIYa_eosSGRMORYbxwXFAvg&s=10",
    ingredients: [
      "Fish Pieces - 500 g",
      "Red Chilli Powder - 1 tsp",
      "Turmeric - 1/2 tsp",
      "Lemon Juice - 1 tbsp",
      "Ginger Garlic Paste - 1 tbsp",
      "Salt - To Taste",
      "Oil - For Frying",
    ],

    steps: [
      "Wash fish pieces.",
      "Marinate with spices.",
      "Rest for 30 minutes.",
      "Heat oil.",
      "Fry both sides until golden.",
      "Serve hot.",
    ],
  },
  {
    id: 16,
    name: "Egg Curry",
    category: "Non Veg",
    subCategory: "Side Dish",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SPnjh2tQ-KydMqhMljsCOZJyZ92elXY1HQCM50X9hg&s=10",
    ingredients: [
      "Boiled Eggs - 4",
      "Onions - 2",
      "Tomatoes - 2",
      "Ginger Garlic Paste - 1 tbsp",
      "Turmeric - 1/2 tsp",
      "Garam Masala - 1 tsp",
      "Salt - To Taste",
      "Oil - 2 tbsp",
    ],

    steps: [
      "Boil and peel the eggs.",
      "Fry onions until golden.",
      "Add ginger garlic paste.",
      "Add tomatoes and spices.",
      "Add boiled eggs.",
      "Cook for 10 minutes.",
      "Serve hot with rice or roti.",
    ],
  },

  //  DESSERTS
  {
    id: 17,
    name: "Gulab Jamun",
    category: "Desserts",
    subCategory: "Indian Sweet",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ0g7olF76WAujYglhd6bBLtRjXoT1zx8PQ98ZqGWXw&s=10",
    ingredients: [
      "Gulab Jamun Mix - 1 Cup",
      "Milk - 1/4 Cup",
      "Sugar - 2 Cups",
      "Water - 2 Cups",
      "Cardamom Powder - 1/2 tsp",
      "Oil/Ghee - For Frying",
    ],

    steps: [
      "Prepare soft dough using mix and milk.",
      "Make small balls.",
      "Heat oil and fry until golden brown.",
      "Prepare sugar syrup.",
      "Add cardamom powder.",
      "Soak fried jamuns in syrup for 2 hours.",
      "Serve warm.",
    ],
  },
  {
    id: 18,
    name: "Rasmalai",
    category: "Desserts",
    subCategory: "Indian Sweet",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDSoyT7Qz8c_cNKHwKI8nJBpqlcdq0F3pbqQOgGlVRg&s=10",
    ingredients: [
      "Rasmalai Patties - 8",
      "Milk - 1 Litre",
      "Sugar - 1/2 Cup",
      "Cardamom Powder - 1/2 tsp",
      "Pistachios - 2 tbsp",
      "Saffron - Few Strands",
    ],

    steps: [
      "Boil milk until slightly thick.",
      "Add sugar and cardamom.",
      "Add saffron.",
      "Place rasmalai patties in milk.",
      "Cook for 5 minutes.",
      "Garnish with pistachios.",
      "Serve chilled.",
    ],
  },
  {
    id: 19,
    name: "Chocolate Cake",
    category: "Desserts",
    subCategory: "Cake",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXK5KK4n__ZohvKsG0uy10UQA27_khnjjgKzm8oI84DQ&s=10",
    ingredients: [
      "Maida - 2 Cups",
      "Cocoa Powder - 1/2 Cup",
      "Sugar - 1 Cup",
      "Milk - 1 Cup",
      "Butter - 1/2 Cup",
      "Baking Powder - 1 tsp",
      "Vanilla Essence - 1 tsp",
    ],

    steps: [
      "Mix dry ingredients.",
      "Add butter and milk.",
      "Prepare smooth batter.",
      "Pour into cake tin.",
      "Bake at 180°C for 35 minutes.",
      "Cool completely.",
      "Decorate with chocolate frosting.",
    ],
  },
  {
    id: 20,
    name: "Red Velvet Cake",
    category: "Desserts",
    subCategory: "Cake",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5VkeRDXwxUGqOimHe10tlah3UjbUHwVlwuP3Sgp9jg&s=10",
    ingredients: [
      "Maida - 2 Cups",
      "Sugar - 1 Cup",
      "Butter - 1/2 Cup",
      "Milk - 1 Cup",
      "Red Food Colour - 1 tsp",
      "Vanilla Essence - 1 tsp",
      "Baking Powder - 1 tsp",
    ],

    steps: [
      "Mix flour and baking powder.",
      "Add butter, sugar and milk.",
      "Mix red food colour.",
      "Pour batter into cake tin.",
      "Bake for 35 minutes.",
      "Cool completely.",
      "Decorate with cream cheese frosting.",
    ],
  },
  {
    id: 21,
    name: "Vanilla Ice Cream",
    category: "Desserts",
    subCategory: "Ice Cream",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1VBuhtuE--sCuEE1NFQwhPk9gnsPQtbFstPfKQ6tcQ&s=10",
    ingredients: [
      "Milk - 2 Cups",
      "Fresh Cream - 1 Cup",
      "Sugar - 1/2 Cup",
      "Vanilla Essence - 1 tsp",
      "Corn Flour - 1 tbsp",
    ],

    steps: [
      "Boil milk.",
      "Add corn flour mixture.",
      "Cool completely.",
      "Add cream and vanilla.",
      "Blend well.",
      "Freeze for 6 hours.",
      "Serve chilled.",
    ],
  },
  {
    id: 22,
    name: "Chocolate Ice Cream",
    category: "Desserts",
    subCategory: "Ice Cream",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZviJUydyAHc0DYNsOGR_YDLFmH7AmMSqRGk3OxE0OFA&s=10",
    ingredients: [
      "Milk - 2 Cups",
      "Fresh Cream - 1 Cup",
      "Cocoa Powder - 3 tbsp",
      "Sugar - 1/2 Cup",
      "Corn Flour - 1 tbsp",
    ],

    steps: [
      "Boil milk.",
      "Add cocoa powder.",
      "Mix corn flour slurry.",
      "Cool completely.",
      "Add fresh cream.",
      "Freeze for 6 hours.",
      "Serve chilled.",
    ],
  },
  {
    id: 23,
    name: "Brownie",
    category: "Desserts",
    subCategory: "Bakery",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK1SqVWdQ2tRZk2IdpJCySX05TpHCws4e4c2Q7Z-InA&s=10",
    ingredients: [
      "Dark Chocolate - 100 g",
      "Butter - 100 g",
      "Sugar - 1 Cup",
      "Maida - 1 Cup",
      "Eggs - 2",
      "Vanilla Essence - 1 tsp",
    ],

    steps: [
      "Melt butter and chocolate.",
      "Add sugar and eggs.",
      "Mix flour.",
      "Pour into baking tray.",
      "Bake at 180°C for 25 minutes.",
      "Cool and cut into squares.",
    ],
  },
  {
    id: 24,
    name: "Cupcake",
    category: "Desserts",
    subCategory: "Bakery",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0YB2E-f8w6cM5fS1Caom-vqWWhC0E6PxgV1W5DyhbA&s=10",
    ingredients: [
      "Maida - 1½ Cups",
      "Sugar - 1 Cup",
      "Butter - 1/2 Cup",
      "Milk - 1/2 Cup",
      "Vanilla Essence - 1 tsp",
      "Baking Powder - 1 tsp",
    ],

    steps: [
      "Prepare cake batter.",
      "Fill cupcake liners.",
      "Bake at 180°C for 20 minutes.",
      "Cool completely.",
      "Decorate with frosting.",
      "Serve.",
    ],
  },
  //  MILKSHAKES
  {
    id: 25,
    name: "Mango Milkshake",
    category: "Milkshakes",
    subCategory: "Fruit",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GcxoQxY800SHP7mDWTRi6S320sfcOC1TWR2p6-C5ig&s=10",
    ingredients: [
      "Maida - 1½ Cups",
      "Sugar - 1 Cup",
      "Butter - 1/2 Cup",
      "Milk - 1/2 Cup",
      "Vanilla Essence - 1 tsp",
      "Baking Powder - 1 tsp",
    ],

    steps: [
      "Prepare cake batter.",
      "Fill cupcake liners.",
      "Bake at 180°C for 20 minutes.",
      "Cool completely.",
      "Decorate with frosting.",
      "Serve.",
    ],
  },
  {
    id: 26,
    name: "Banana Milkshake",
    category: "Milkshakes",
    subCategory: "Fruit",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuPZLgrGbfQBoIQsdHwB8FScRNgTR_JXY1Gm7JP5UGQ&s=10",
    ingredients: [
      "Banana - 2",
      "Chilled Milk - 2 Cups",
      "Sugar - 2 tbsp",
      "Honey - 1 tbsp",
      "Ice Cubes - 4",
    ],

    steps: [
      "Peel and slice bananas.",
      "Add bananas, milk, sugar and honey to a blender.",
      "Blend until creamy.",
      "Add ice cubes.",
      "Serve immediately.",
    ],
  },
  {
    id: 27,
    name: "Oreo Milkshake",
    category: "Milkshakes",
    subCategory: "Chocolate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNY-C0cwXM5yxK4uWNHA6IKCVrhkUpWjOIKD06uxAc1Q&s=10",
    ingredients: [
      "Oreo Biscuits - 8",
      "Chilled Milk - 2 Cups",
      "Vanilla Ice Cream - 2 Scoops",
      "Sugar - 1 tbsp",
      "Chocolate Syrup - 2 tbsp",
    ],

    steps: [
      "Break Oreo biscuits into pieces.",
      "Add biscuits, milk, ice cream and sugar into a blender.",
      "Blend until smooth.",
      "Drizzle chocolate syrup inside the glass.",
      "Pour the milkshake.",
      "Serve chilled.",
    ],
  },
  {
    id: 28,
    name: "Chocolate Milkshake",
    category: "Milkshakes",
    subCategory: "Chocolate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuhnwjdyvmCEwkst-8RphDiIirBAM2xh9aQcyj5u-uQ&s=10",
    ingredients: [
      "Chilled Milk - 2 Cups",
      "Chocolate Ice Cream - 2 Scoops",
      "Cocoa Powder - 2 tbsp",
      "Sugar - 2 tbsp",
      "Chocolate Syrup - 2 tbsp",
    ],

    steps: [
      "Add milk, cocoa powder, sugar and ice cream into a blender.",
      "Blend well.",
      "Pour into a glass.",
      "Top with chocolate syrup.",
      "Serve chilled.",
    ],
  },
  {
    id: 29,
    name: "Strawberry Milkshake",
    category: "Milkshakes",
    subCategory: "Berry",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIh1zCuluF2LhhFuVChMNjA_QngDivfN2lhMrKWzr1mQ&s=10",
    ingredients: [
      "Fresh Strawberries - 8",
      "Chilled Milk - 2 Cups",
      "Sugar - 2 tbsp",
      "Vanilla Ice Cream - 1 Scoop",
      "Ice Cubes - 4",
    ],

    steps: [
      "Wash the strawberries.",
      "Add strawberries, milk, sugar and ice cream into a blender.",
      "Blend until smooth.",
      "Pour into a glass.",
      "Serve chilled.",
    ],
  },
  {
    id: 30,
    name: "Blueberry Milkshake",
    category: "Milkshakes",
    subCategory: "Berry",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8H0qwKwfNZy6c4BazCVUShFotQJwP370-UExe4At2g&s=10",
    ingredients: [
      "Blueberries - 1 Cup",
      "Chilled Milk - 2 Cups",
      "Sugar - 2 tbsp",
      "Vanilla Ice Cream - 1 Scoop",
      "Ice Cubes - 4",
    ],

    steps: [
      "Wash the blueberries.",
      "Blend blueberries, milk, sugar and ice cream.",
      "Blend until creamy.",
      "Pour into a glass.",
      "Serve chilled.",
    ],
  },
  {
    id: 31,
    name: "Dry Fruit Milkshake",
    category: "Milkshakes",
    subCategory: "Special",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITJuximT1qq5k0RVjN4dJEOmyxexESW8ujAwDU1nqXg&s=10",
    ingredients: [
      "Almonds - 10",
      "Cashews - 10",
      "Pistachios - 10",
      "Dates - 4",
      "Chilled Milk - 2 Cups",
      "Sugar - 2 tbsp",
    ],

    steps: [
      "Soak the dry fruits for 30 minutes.",
      "Add all ingredients into a blender.",
      "Blend until smooth.",
      "Pour into a glass.",
      "Garnish with chopped nuts.",
      "Serve chilled.",
    ],
  },
  {
    id: 32,
    name: "Kesar Badam Milkshake",
    category: "Milkshakes",
    subCategory: "Special",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1B-KXH0gzNZKbtGIu8mO87AgvYnxuAbd9-qvHS75X0w&s=10",
    ingredients: [
      "Almonds - 15",
      "Chilled Milk - 2 Cups",
      "Sugar - 2 tbsp",
      "Saffron Strands - 8",
      "Cardamom Powder - 1/4 tsp",
    ],

    steps: [
      "Soak almonds and peel the skin.",
      "Blend almonds with milk.",
      "Add sugar, saffron and cardamom.",
      "Blend again until smooth.",
      "Pour into a glass.",
      "Serve chilled.",
    ],
  },
];

export default recipes;
