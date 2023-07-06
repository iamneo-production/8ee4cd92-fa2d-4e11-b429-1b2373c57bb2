import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import boiledEgg from "../../assets/img/Nutrition/boiledEgg.jpg";
import chickPeas from "../../assets/img/Nutrition/chickPeas.jpg";
import spinachdal from "../../assets/img/Nutrition/spinachDalBrownrice.jpg";
import fruitSalad from "../../assets/img/Nutrition/fruitSalad.jpg";
import vegetableFry from "../../assets/img/Nutrition/vegetableFry.jpg";

import "../NutritionRecommandation.css";

const NutritionWeightLossPlanMonday = () => {
  return (
    <div>
      <header style={{ marginTop: "10px" }}>
        <Navbar />
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Morning Breakfast</h3>
                <br></br>
                <h5>
                  <b>Boiled Egg</b>
                </h5>
                <p>
                  Boiled eggs can be a healthy and nutritious option for a
                  weight loss breakfast. They are a good source of protein and
                  provide essential vitamins and minerals.Boiled eggs can be a
                  part of a balanced weight loss breakfast as they are low in
                  calories, provide satiety, and contain essential nutrients.
                  Here's a guide on how to prepare boiled eggs and some
                  nutrition details.
                </p>

                <h5>
                  <b>Boiled Egg Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Place the eggs in a single layer in a saucepan or pot.
                    <br></br>
                    2.Add enough water to the pot to cover the eggs completely.
                    <br></br>
                    3.Place the pot on the stove over medium-high heat and bring
                    the water to a boil.
                    <br></br>
                    4.Once the water reaches a rolling boil, reduce the heat to
                    low and let the eggs simmer for <br></br>
                    about 4-5 minutes for soft-boiled eggs or 8-9 minutes for
                    hard-boiled eggs.
                    <br></br>
                    5.After the desired cooking time, remove the pot from the
                    heat and drain the hot water.
                    <br></br>
                    6.Transfer the eggs to a bowl of cold water or an ice bath
                    to stop the cooking process.
                    <br></br>
                    7.Let the eggs cool for a few minutes, then gently tap them
                    on a hard surface and peel off the shell.
                  </p>

                  <div className="dietImages">
                    <img src={boiledEgg} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition Details (approximately 50 grams)</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: 78</li>
                    <li>Protein: 6.3 grams</li>
                    <li>Fat: 5.3 grams (mostly healthy fats)</li>
                    <li>Carbohydrates: 0.6 grams</li>
                    <li>Cholesterol: 186 milligrams</li>
                    <li>Sodium: 62 milligrams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Mid Morning Snack</h3>
              <br></br>
              <h5>
                <b>Roasted ChickPeas</b>
              </h5>
              <p>
                Roasted chickpeas can be a delicious and nutritious mid-morning
                snack option for weight loss. They are rich in fiber, protein,
                and various vitamins and minerals.Roasted chickpeas are a
                satisfying and nutritious snack choice for weight loss as they
                provide protein and fiber, which can help keep you full and
                prevent overeating. They are also a healthier alternative to
                traditional salty snacks like chips. However, it's important to
                practice portion control, as roasted chickpeas are still
                relatively high in calories.
              </p>

              <h5>
                <b>Roasted Chickpeas Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Start by rinsing and draining canned chickpeas or cooking
                  dried chickpeas until they are tender.
                  <br></br>
                  2.Preheat your oven to 400°F (200°C).
                  <br></br>
                  3.Pat the chickpeas dry with a paper towel to remove excess
                  moisture.
                  <br></br>
                  4.Place the chickpeas on a baking sheet lined with parchment
                  paper or a silicone mat.
                  <br></br>
                  5.Drizzle the chickpeas with a little bit of olive oil, and
                  sprinkle them with desired seasonings
                  <br></br>
                  such as salt, pepper, garlic powder, cumin, paprika, or any
                  other spices you like.
                  <br></br>
                  6.Roast the chickpeas in the preheated oven for about 25-30
                  minutes, or until they become
                  <br></br>
                  golden brown and crispy.
                  <br></br>
                  7.Remove the chickpeas from the oven and let them cool before
                  serving.
                </p>

                <div className="dietImages">
                  <img src={chickPeas} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>
                  Nutrition Details (per 1/2 cup or approximately 82 grams of
                  roasted chickpeas)
                </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 143</li>
                  <li>Protein: 7 grams</li>
                  <li>Fat: 2.7 grams (mostly healthy fats)</li>
                  <li>Carbohydrates: 25 grams</li>
                  <li>Fiber: 6 grams</li>
                  <li>Sodium: 142 milligrams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Lunch</h3>
              <br></br>
              <h5>
                <b>Spinach Daal and brown rice</b>
              </h5>
              <p>
                Spinach dal with brown rice is a nutritious and satisfying lunch
                option for weight loss. Dal is a lentil-based dish that provides
                protein and fiber, while spinach adds vitamins and minerals.
                Brown rice is a whole grain that offers additional fiber and
                nutrients.This spinach dal with brown rice provides a balanced
                combination of protein, fiber, and healthy carbohydrates. It's
                low in fat and can help keep you full and satisfied, making it
                suitable for weight loss.
              </p>

              <h5>
                <b>Spinach Dal Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Wash and rinse 1 cup of lentils (such as red lentils, green
                  lentils, or yellow lentils) thoroughly.
                  <br></br>
                  2.In a pressure cooker or a large pot, add the lentils and
                  cover them with water (about 2-3 cups).
                  <br></br>
                  3. Add spices like turmeric, cumin, coriander, and salt
                  according to your taste preferences.
                  <br></br>
                  4.Cook the lentils until they become soft and mushy. If using
                  a pressure cooker, cook for about
                  <br></br>10-12 minutes, or if using a pot, cook for
                  approximately 25-30 minutes, stirring occasionally and
                  <br></br>
                  adding more water if needed.
                  <br></br>
                  5.In a separate pan, heat a little bit of oil or ghee
                  (clarified butter) and sauté finely chopped onions,<br></br>
                  garlic, and ginger until they become golden brown.
                  <br></br>
                  6.Add chopped spinach to the pan and cook until it wilts.
                  <br></br>
                  7.Once the lentils are cooked, add the spinach mixture to the
                  lentils and simmer for a few minutes,
                  <br></br>allowing the flavors to meld together.
                </p>

                <div className="dietImages">
                    <img src={spinachdal} alt="logo" width={250} height={200} />
                  </div>
              </div>

              <h5>
                <b>Brown Rice Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Rinse 1 cup of brown rice under cold water until the water
                  runs clear.
                  <br></br>
                  2.In a saucepan, combine the rinsed rice with 2 cups of water.
                  <br></br>
                  3.Bring the water to a boil, then reduce the heat to low,
                  cover the saucepan with a lid, and let<br></br> the rice
                  simmer for about 40-45 minutes or until the rice is tender and
                  the water is absorbed.
                  <br></br>
                  4.Remove the saucepan from heat and let the rice sit, covered,
                  for about 5 minutes before
                  <br></br> fluffing it with a fork.
                </p>
              </div>

              <h5>
                <b>
                  Nutrition Details (per serving of spinach dal and brown rice,
                  approximately 1 cup each):
                </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Calories: Around 300-350 calories (may vary based on
                    specific ingredients and quantities used)
                  </li>
                  <li>Protein: Approximately 15-20 grams</li>
                  <li>
                    Fat: Around 5-10 grams (depending on the added oil or ghee)
                  </li>
                  <li>Carbohydrates: Approximately 50-60 grams</li>
                  <li>Fiber: Around 10-15 grams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Evening Snack</h3>
              <br></br>
              <h5>
                <b>Fruit Salad</b>
              </h5>
              <p>
                Fruit salad is a refreshing and nutritious option for an evening
                snack that supports weight loss. It's a great way to incorporate
                a variety of fruits into your diet, providing essential
                vitamins, minerals, and fiber.Fruit salad is an excellent choice
                for weight loss as it is low in calories and high in fiber,
                which promotes feelings of fullness. It also satisfies your
                sweet tooth in a healthy way by offering natural sugars and a
                variety of nutrients.
              </p>

              <h5>
                <b>Fruit Salad Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Choose a selection of fresh fruits that you enjoy. Some
                  popular choices include berries <br></br>(strawberries,
                  blueberries, raspberries), citrus fruits (oranges,
                  grapefruits), melons (watermelon,<br></br> cantaloupe),
                  pineapple, grapes, and any other fruits of your preference.
                  <br></br>
                  2.Wash all the fruits thoroughly under running water.
                  <br></br>
                  3.Peel and chop the fruits into bite-sized pieces. If using
                  berries or grapes, you can leave them whole.
                  <br></br>
                  4.Place all the chopped fruits into a large mixing bowl.
                  <br></br>
                  5.If desired, you can add a squeeze of lemon or lime juice to
                  prevent the fruits from browning and<br></br> add a tangy
                  flavor. Alternatively, you can also drizzle a small amount of
                  honey or a sprinkle of<br></br> cinnamon for added sweetness
                  and flavor.
                  <br></br>
                  6.Gently toss the fruits to combine all the flavors.
                  <br></br>
                  7.You can serve the fruit salad immediately or refrigerate it
                  for a while to chill before serving.
                </p>

                <div className="dietImages">
                    <img src={fruitSalad} alt="logo" width={250} height={200} />
                  </div>
              </div>

              <h5>
                <b>
                  Nutrition Details (per serving of fruit salad, approximately 1
                  cup)
                </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Calories: Varies based on the fruits used but typically
                    ranges from 60-100 calories
                  </li>
                  <li>Fiber: Approximately 2-4 grams</li>
                  <li>Fat: 2.7 grams (mostly healthy fats)</li>
                  <li>
                    Vitamins and minerals: Fruit salad provides a wide range of
                    vitamins and minerals depending on the fruits used. They are
                    particularly rich in vitamin C, potassium, and folate.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Dinner</h3>
              <br></br>
              <h5>
                <b>Vegetable Fry</b>
              </h5>
              <p>
                Vegetable fry is a flavorful and nutritious dish that can be a
                great option for a weight loss dinner. It allows you to
                incorporate a variety of vegetables into your meal, providing
                essential nutrients, fiber, and a satisfying meal.Vegetable fry
                is a fantastic option for weight loss as it allows you to
                include a generous portion of vegetables in your meal.
                Vegetables are low in calories, high in fiber, and rich in
                nutrients, making them an ideal choice for promoting satiety
                while keeping calorie intake in check.
              </p>

              <h5>
                <b>Vegetable Fry Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Choose a selection of vegetables you enjoy and that are
                  suitable for stir-frying. Common <br></br>choices include bell
                  peppers, broccoli, carrots, zucchini, cauliflower, green
                  beans, onions,
                  <br></br>and mushrooms.
                  <br></br>
                  2.Wash and chop the vegetables into bite-sized pieces. You can
                  cut them into strips, slices,<br></br> or cubes, depending on
                  your preference.
                  <br></br>
                  3.In a large skillet or wok, heat a small amount of oil over
                  medium-high heat.
                  <br></br>
                  4.Add the harder vegetables, such as carrots and broccoli, to
                  the skillet first, as they require more <br></br>cooking time.
                  Stir-fry them for a few minutes until they begin to soften.
                  <br></br>
                  5.Add the remaining vegetables, such as bell peppers,
                  zucchini, and mushrooms, to the skillet<br></br> and continue
                  stir-frying for another few minutes until all the vegetables
                  are tender-crisp.
                  <br></br>
                  6.Season with desired spices and seasonings. You can use a
                  combination of garlic, ginger, soy sauce,<br></br> chili
                  flakes, turmeric, cumin, or any other flavors you enjoy.
                  <br></br>
                  7.Stir-fry the vegetables for an additional minute or two to
                  allow the flavors to meld together.
                  <br></br>
                  8.Remove the skillet from heat and serve the vegetable fry
                  hot.
                </p>

                <div className="dietImages">
                    <img src={vegetableFry} alt="logo" width={250} height={200} />
                  </div>
              </div>

              <h5>
                <b>
                  Nutrition Details (per serving of vegetable fry, approximately
                  1 cup)
                </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Calories: Varies based on the types and quantities of
                    vegetables used, as well as the amount of oil added.
                    Generally, it ranges from 80-150 calories.
                  </li>
                  <li>
                    Fiber: Approximately 3-6 grams, depending on the vegetables
                    used.
                  </li>
                  <li>
                    Vitamins and minerals: Vegetable fry provides a wide range
                    of vitamins and minerals, including vitamins A, C, K,
                    potassium, and folate, which vary based on the vegetables
                    used.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightLossPlanMonday;
