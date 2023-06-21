import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import brownBread from "../../assets/img/Nutrition/brownBread.jpg";
import fruitSalad from "../../assets/img/Nutrition/fruitSalad.jpg";
import grilledChicken from "../../assets/img/Nutrition/grilledChicken.jpg";
import vegetableSoup from "../../assets/img/Nutrition/vegetableSoup.jpg";
import palakRoti from "../../assets/img/Nutrition/palakRoti.jpg";

import "../NutritionRecommandation.css";

const NutritionWeightLossPlanTuesday = () => {
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
                  <b>Brown Bread</b>
                </h5>
                <p>
                  Brown bread is a popular choice for a healthier alternative to
                  white bread, often recommended for weight loss due to its
                  higher fiber content.Remember, while brown bread can be a
                  healthier option compared to white bread, it's essential to
                  incorporate a balanced diet with a variety of nutrients to
                  support weight loss goals.
                </p>

                <h5>
                  <b>Brown Bread Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.In a small bowl, dissolve the yeast in lukewarm water and
                    let it sit for about 5 minutes until it becomes frothy.
                    <br></br>
                    2.In a large mixing bowl, combine the whole wheat flour and
                    salt. Make a well in the center.
                    <br></br>
                    3.Pour the yeast mixture, olive oil, and honey (or maple
                    syrup) into the well. Stir until the dough comes together.
                    <br></br>
                    4.Transfer the dough onto a floured surface and knead it for
                    about 8-10 minutes until it becomes smooth and elastic.
                    <br></br>
                    5.Place the dough in a greased bowl, cover it with a clean
                    cloth, and let it rise in a warm place for about 1-2 hours
                    until it doubles in size.
                    <br></br>
                    6.Preheat the oven to 180°C (350°F).
                    <br></br>
                    7.Bake the bread in the preheated oven for about 30-35
                    minutes until it turns golden brown and sounds hollow when
                    tapped on the bottom.
                    <br></br>
                    8.Remove the bread from the oven and let it cool on a wire
                    rack before slicing.
                  </p>

                  <div className="dietImages">
                    <img src={brownBread} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition Details (per slice, approximately)</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: 80-100 calories</li>
                    <li>Carbohydrates: 15-20 grams</li>
                    <li>Fiber: 2-4 grams</li>
                    <li>Protein: 3-5 grams</li>
                    <li>Fat: 1-2 grams</li>
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
              <h3 className="card-title">Lunch</h3>
              <br></br>
              <h5>
                <b>Grilled Chicken</b>
              </h5>
              <p>
                Grilled chicken is a lean protein option that can be a great
                addition to a weight loss meal plan.Grilled chicken can be
                paired with a variety of healthy side dishes such as steamed
                vegetables, salad, or quinoa to create a balanced meal. Remember
                to consider the overall calorie intake and include a variety of
                nutrients to support your weight loss goals.
              </p>

              <h5>
                <b>Grilled Chicken Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Preheat the grill to medium-high heat or preheat a grill pan
                  on the stovetop.
                  <br></br>
                  2.In a small bowl, mix together the olive oil, salt, black
                  pepper, garlic powder, paprika, and any additional herbs or
                  spices.
                  <br></br>
                  3.Brush both sides of the chicken breasts with the prepared
                  seasoning mixture.
                  <br></br>
                  4.Place the chicken breasts on the preheated grill or grill
                  pan.
                  <br></br>
                  5.Grill the chicken for about 6-8 minutes per side, or until
                  the internal temperature reaches 165°F (75°C) using a meat
                  thermometer.
                  <br></br>
                  6.Remove the chicken from the grill and let it rest for a few
                  minutes before slicing or serving.
                  <br></br>
                </p>

                <div className="dietImages">
                  <img
                    src={grilledChicken}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition details (per 4-ounce serving, approximately)</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 150-180 calories</li>
                  <li>Protein: 25-30 grams</li>
                  <li>Fat: 4-8 grams</li>
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
                <b>Vegetable Soup</b>
              </h5>
              <p>
                Vegetable soup is a nutritious and low-calorie option for an
                evening snack that can support weight loss goals.Adjust the
                ingredients and portion sizes according to your preferences and
                dietary needs. To make the vegetable soup more filling, you can
                add lean protein sources
              </p>

              <h5>
                <b>Vegetable Soup Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Heat the olive oil in a large pot over medium heat.
                  <br></br>
                  2.Add the diced onion and minced garlic to the pot and sauté
                  until they become translucent and fragrant.
                  <br></br>
                  3.Add the mixed vegetables to the pot and cook for a few
                  minutes, stirring occasionally.
                  <br></br>
                  4.Pour in the vegetable broth and bring the mixture to a boil
                  <br></br>
                  5.Reduce the heat to low and let the soup simmer for about
                  20-30 minutes until the vegetables are tender.
                  <br></br>
                  6.Season the soup with salt, pepper, and any herbs or spices
                  of your choice.
                  <br></br>
                  7.Use an immersion blender or transfer the soup to a blender
                  to puree until desired consistency. You can leave some chunks
                  for texture if preferred.
                  <br></br>
                  8.Return the soup to the pot and heat it through before
                  serving.
                </p>

                <div className="dietImages">
                  <img
                    src={vegetableSoup}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 80-100 calories</li>
                  <li>Carbohydrates: 10-15 grams</li>
                  <li>Fiber: 3-5 grams</li>
                  <li>Protein: 2-4 grams</li>
                  <li>Fat: 3-5 grams</li>
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
                <b>Palak And Roti</b>
              </h5>
              <p>
                Palak (spinach) and roti (Indian flatbread) can make for a
                healthy and nutritious dinner option that supports weight loss
                goals.Serve the palak curry with the roti for a balanced and
                satisfying dinner. Remember to control portion sizes and pair
                the meal with a side of salad or other vegetables for added
                nutrients.
              </p>

              <h5>
                <b>Palak Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Heat oil in a pan over medium heat. Add cumin seeds and let
                  them splutter.
                  <br></br>
                  2.Add minced garlic, grated ginger, and chopped green chili.
                  Sauté for a minute.
                  <br></br>
                  3.Add chopped onions and cook until they turn translucent.
                  <br></br>
                  4.Add chopped tomatoes and cook until they soften and release
                  their juices.
                  <br></br>
                  5.Add turmeric powder, red chili powder, and salt. Mix well.
                  <br></br>
                  6.Add the chopped spinach leaves and cook until they wilt
                  down.
                  <br></br>
                  7.Using a blender or immersion blender, blend the mixture to
                  your desired consistency.
                  <br></br>
                  8.Return the mixture to the pan and simmer for a few minutes
                  until flavors are well combined.
                </p>

                <div className="dietImages">
                  <img src={palakRoti} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of Palak</b>
              </h5>

              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 50-70 calories</li>
                  <li>Carbohydrates: 5-8 grams</li>
                  <li>Protein: 2-3 grams</li>
                  <li>Fat: 2-3 grams</li>
                  <li>Fiber: 2-3 grams</li>
                </ul>
              </div>


              <h5>
                <b>Roti Preparation</b>
              </h5>

              <div className="rotiStyle">
                <p>
                  1.In a mixing bowl, add whole wheat flour and salt (if
                  desired). Mix well.
                  <br></br>
                  2.Slowly add water and knead the flour to form a smooth dough.
                  The consistency should not be too soft or too hard.
                  <br></br>
                  3.Divide the dough into small portions and shape them into
                  balls.
                  <br></br>
                  4.Roll out each ball into a thin, round roti using a rolling
                  pin and a lightly floured surface..
                  <br></br>
                  5.Heat a tawa (flat griddle) or a non-stick pan over
                  medium-high heat.
                  <br></br>
                  6.Place the rolled roti on the hot tawa and cook until small
                  bubbles start to form on the surface.
                  <br></br>
                  7.Flip the roti and cook the other side until it puffs up and
                  has golden spots.
                  <br></br>
                  8.Remove the roti from the pan and repeat the process for the
                  remaining dough.
                </p>

                <h5>
                  <b>Nutrition Details per Roti</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: 70-90 calories</li>
                    <li>Carbohydrates: 15-20 grams</li>
                    <li>Protein: 3-4 grams</li>
                    <li>Fat: 1-2 grams</li>
                    <li>Fiber: 2-3 grams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightLossPlanTuesday;
