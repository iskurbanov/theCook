
import image2 from '../images/Avocado-Radish-Salad-Recipe.jpg';
import image3 from '../images/Asparagus-and-Mushroom.jpg';
import image4 from '../images/Greek-Salad.jpg';
import avatar2 from '../avatars/avatar2.png';
import avatar3 from '../avatars/avatar3.png';
import avatar4 from '../avatars/avatar4.png';


const CartData = [
    {
        "id": "2",
        "image": image2,
        "avatar": avatar2,
        "name": "Tyler",
        "title": "Avocado Radish Salad",
        "description": "This Avocado Radish Salad makes for a crisp, flavorful side dish or vegetarian entree with beautiful pops of color from the radish and a luscious creaminess from the avocado. It pairs well with chicken, fish, or beef and also travels well for lunch if the avocado and dressing are kept in the same container, but separate from the rest of the salad.",
        "ingredients": 
            [
                "2 whole avocado (chopped)",
                "2 whole green onion (chopped)",
                "1 cup orange juice",
                "1/2 cup extra virgin olive oil",
                "6 tablespoons lime juice",
                "1/4 cup cilantro (chopped)",
                "1/2 teaspoon sea salt",
                "1/2 teaspoon ground ginger",
                "4 cups mixed greens (chopped)",
                "4 whole radishes (sliced)"
            ],
        "instructions": 
        [
            "Combine all ingredients except the filets in a medium-sized baking dish.",
            "Add the salmon and marinate in the refrigerator for 1 hour.",
            "Preheat the oven to 375F and cover the baking dish with an oven-safe-lid or foil.",
            "Bake 35-45 minutes, until tender and opaque."
        ],
    },
    {
        "id": "3",
        "image": image3,
        "avatar": avatar3,
        "name": "Sarah",
        "title": "Sweet and Sour Asparagus",
        "description": "Dates may seem like a strange thing to include in a veggie stir-fry, but the little bursts of sweetness add a wonderful depth to this Sweet and Sour Asparagus! Think of them as a stand-in for the brown sugar you might find in a more traditional stir-fry sauce or Asian marinade. You can substitute half a tablespoon of raisins per date if you’d prefer (golden raisins would work too). Whichever route you choose to take, this dish is a wonderful way to get your family to eat their greens!        ",
        "ingredients": 
            [
                "1 bundle asparagus (chopped)",
                "8 ounces mushroom",
                "3 tablespoons coconut oil",
                "3 tablespoons lemon juice",
                "1 tablespoon dried thyme",
                "1 tablespoon dried rosemary",
                "1/4 teaspoon sea salt",
                "1/4 teaspoon ground black pepper (omit for AIP)",
                "3 pitted dates (chopped)",
                "2 tablespoons coconut aminos",
                "1/4 teaspoon fish sauce"
            ],
        "instructions": 
        [
            "Saute the asparagus and mushrooms in the oil over medium heat until thoroughly cooked, about 10-15 minutes.",
            "Toss with the lemon juice, thyme, rosemary, salt, and pepper.",
            "Meanwhile, puree the dates, aminos, and fish sauce until smooth. Pour over asparagus and serve."

        ],
    },
    {
        "id": "4",
        "image": image4,
        "avatar": avatar4,
        "name": "Amy",
        "title": "Simple Green Salad",
        "description": "This Greek Salad makes for an incredible main dish and can also be served as a side salad if you omit the chicken. It’s autoimmune protocol compliant, meaning it has no dairy or nightshades like a more traditional Greek Salad would, and it’s just drowning in flavor. You won’t miss the feta or tomatoes at all, I promise! This is one of my favorite salads to throw together for a quick lunch, with or without the meat.",
        "ingredients": 
            [
                "1 pound chicken (cooked and chopped)",
                "8 cups mixed greens (chopped)",
                "4 ounces black olive (sliced)",
                "1 cup cucumber (sliced)",
                "1 whole red onion (chopped)",
                "3/4 cup extra virgin olive oil",
                "1/3 cup lemon juice (omit for low-histamine)",
                "1 1/3 tablespoons apple cider vinegar",
                "1/2 tablespoon dried oregano",
                "2 cloves garlic (minced)",
                "3/4 teaspoons dried basil",
                "1/4 teaspoon sea salt",
                "1/4 teaspoon ground ginger"
            ],
        "instructions": 
        [
            "Combine the chicken, lettuce, olives, cucumber, and red onion in a large bowl.",
            "Separately, combine the remaining ingredients, then pour over the salad just before serving."
        ],
    },
]

export default CartData;