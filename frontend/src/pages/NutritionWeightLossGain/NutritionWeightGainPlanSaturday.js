import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import upmaMixedVegetable from "../../assets/img/Nutrition/upmaMixedVegetables.jpg";
import mangoLassi from "../../assets/img/Nutrition/mangoLassi.jpg";
import parathasChickpeas from "../../assets/img/Nutrition/parathasChickpeas.jpg";
import cheeseVegSandwich from "../../assets/img/Nutrition/cheeseVegSandwich.jpg";
import rotisPaneerButter from "../../assets/img/Nutrition/rotiPaneerButter.jpg";

import "../NutritionRecommandation.css";
import { UpdateModeEnum } from "chart.js";

const NutritionWeightGainPlanSaturday = () => {
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
                  <b>Upma with Mixed Vegetables</b>
                </h5>
                <p>
                  Upma with mixed vegetables is a nutritious and filling
                  breakfast option that can support weight gain when prepared
                  with additional ingredients to increase its calorie content.
                </p>

                <h5>
                  <b>Upma with Mixed Vegetables Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Heat 2 tablespoons of cooking oil in a pan or kadai over
                    medium heat.
                    <br></br>
                    2.Add 1 teaspoon of mustard seeds and let them splutter.
                    <br></br>
                    3.Add 1 teaspoon of urad dal (split black gram) and 1
                    teaspoon of chana dal (split Bengal gram) to the pan. Sauté
                    until they turn golden brown.
                    <br></br>
                    4.Add 1 medium-sized onion (finely chopped) and cook until
                    it becomes translucent.
                    <br></br>
                    5.Add 1 cup of mixed vegetables like carrots, peas, beans,
                    bell peppers, and corn. Sauté them for a few minutes until
                    they are partially cooked.
                    <br></br>
                    6.Add 1 cup of semolina (rava or sooji) and roast it in the
                    pan until it turns golden and fragrant.
                    <br></br>
                    7.Add 2.5 cups of water, salt to taste, and mix well. Cover
                    the pan and let it cook on low heat for about 5-7 minutes
                    until the semolina absorbs the water and becomes fluffy.
                    <br></br>
                    8.Garnish with chopped coriander leaves and a squeeze of
                    lemon juice (optional).
                  </p>

                  <div className="dietImages">
                    <img
                      src={upmaMixedVegetable}
                      alt="logo"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                <h5>
                  <b>Nutrition Details per cup of Upma and vegetables</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: Approximately 150-200 calories</li>
                    <li>Carbohydrates: 25-30 grams of carbohydrates</li>
                    <li>Protein: 5-10 grams </li>
                    <li>Fiber: 2-4 grams</li>
                    <li>Fat: 5-10 grams</li>
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
                <b>Mango Lassi with Yogurt</b>
              </h5>
              <p>
                Mango lassi is a delicious and creamy yogurt-based beverage that
                can be a satisfying mid-morning snack for weight gain. It
                combines the sweetness of mangoes with the tanginess of yogurt.
              </p>

              <h5>
                <b>Mango Lassi with Yogurt Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Take 1 ripe mango, peel it, and cut the flesh into small
                  pieces. You can use fresh mango or frozen mango chunks.
                  <br></br>
                  2.In a blender, add the mango pieces, 1 cup of plain yogurt
                  (Greek yogurt or regular yogurt), and 1/2 cup of milk. Adjust
                  the amount of milk based on the desired consistency.
                  <br></br>
                  3.Optionally, you can add a sweetener like honey, sugar, or
                  maple syrup to enhance the sweetness, depending on your
                  preference.
                  <br></br>
                  4.Blend all the ingredients until smooth and creamy.
                  <br></br>
                  5.Taste the lassi and adjust the sweetness or thickness by
                  adding more mango, yogurt, milk, or sweetener as desired.
                  <br></br>
                  6.Pour the mango lassi into glasses and serve chilled.
                  Optionally, you can garnish with a sprinkle of ground cardamom
                  or a mango slice.
                </p>

                <div className="dietImages">
                  <img src={mangoLassi} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 150-200 calories</li>
                  <li>Protein: 5-10 </li>
                  <li>Carbohydrates: 25-35 grams</li>
                  <li>Fat: 2-6 grams of fat</li>
                  <li>
                    Vitamins and Minerals: Mangoes are rich in vitamins A and C,
                    while yogurt contributes calcium, phosphorus, and probiotics
                    (beneficial bacteria). The specific amounts will depend on
                    the types and quantities of ingredients used.
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
                <b>Parathas and ChickPeas</b>
              </h5>
              <p>
                Parathas with chickpeas (also known as chole) is a delicious and
                nutritious combination for a weight gain lunch. Parathas are
                Indian flatbreads, and chickpeas are a good source of
                plant-based protein and fiber.
              </p>

              <h5>
                <b>Parathas and ChickPeas Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.In a mixing bowl, combine 2 cups of whole wheat flour with a
                  pinch of salt. Gradually add water and knead the flour to form
                  a smooth dough. Adjust the amount of water as needed.
                  <br></br>
                  2.Divide the dough into small portions and shape them into
                  balls. Roll out each ball into a round circle using a rolling
                  pin and a lightly floured surface.
                  <br></br>
                  3.Heat a flat pan or tawa over medium heat. Cook each paratha
                  on the heated pan, applying a little oil or ghee (clarified
                  butter) on both sides. Cook until golden brown spots appear on
                  the surface. Repeat the process for the remaining dough balls.
                  <br></br>
                  4.Soak 1 cup of chickpeas overnight or for at least 8 hours.
                  Drain and rinse them. In a pressure cooker or large pot, add
                  the soaked chickpeas, enough water to cover them, and a pinch
                  of salt. 5.Gently roll out the stuffed dough into a larger
                  circular paratha. Heat a tawa or griddle over medium heat and
                  cook the paratha on both sides until golden brown, using ghee
                  or vegetable oil.
                  <br></br>
                  5.Pressure cook the chickpeas until they are tender. If using
                  a pot, simmer until the chickpeas are soft (approximately 45
                  minutes to 1 hour). In a separate pan, heat 2 tablespoons of
                  cooking oil.
                  <br></br>
                  6.Add 1 teaspoon of cumin seeds and let them sizzle. Add 1
                  finely chopped onion and sauté until it turns golden brown.
                  <br></br>
                  7.Add 2 teaspoons of ginger-garlic paste and cook for a minute
                  until fragrant. Add 2 teaspoons of chole masala or a mix of
                  spices like coriander, cumin, turmeric, red chili powder, and
                  garam masala. Stir well.
                  <br></br>
                  8.Add the cooked chickpeas, along with the cooking liquid, to
                  the pan. Mix well and simmer for a few minutes. Adjust the
                  seasoning with salt and add a squeeze of lemon juice for extra
                  flavor.
                </p>

                <div className="dietImages">
                  <img
                    src={parathasChickpeas}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of parathas and Potatoes</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 400-450 calories</li>
                  <li>Protein: Around 8-12 grams</li>
                  <li>Carbohydrates: Roughly 50-60 grams</li>
                  <li>Fat: Approximately 10-12 grams</li>
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
                <b>Cheese and Vegetable Sandwich</b>
              </h5>
              <p>
                A cheese and vegetable sandwich can be a delicious and filling
                option for weight gain during evening.
              </p>

              <h5>
                <b>Cheese and Vegetable Sandwich Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Take two slices of bread of your choice. Whole wheat bread
                  or multigrain bread can provide additional fiber and
                  nutrients.
                  <br></br>
                  2.Spread a layer of your preferred condiment on one or both
                  slices of bread. Options include mayonnaise, mustard, hummus,
                  or any other spread you enjoy.
                  <br></br>
                  3.Layer slices of cheese on one slice of bread. You can use
                  cheddar, Swiss, mozzarella, or any other cheese you like.
                  <br></br>
                  4.Add a variety of sliced or shredded vegetables to the
                  sandwich. Some popular choices include lettuce, tomato slices,
                  cucumber slices, bell peppers, grated carrots, or sprouts.
                  <br></br>
                  5.Sprinkle some salt, pepper, or other desired spices for
                  extra flavor.
                  <br></br>
                  6.Optionally, you can add additional ingredients like avocado
                  slices, cooked chicken or turkey, or bacon for more protein
                  and calories.
                  <br></br>
                  7.Close the sandwich by placing the other slice of bread on
                  top. If desired, lightly butter the outer sides of the
                  sandwich.
                  <br></br>
                  8.Heat a skillet or pan over medium heat and place the
                  sandwich on it. Cook for a few minutes on each side until the
                  bread turns golden brown and the cheese melts.
                  <br></br>
                  9.Remove from the heat and let it cool for a minute before
                  slicing.
                </p>

                <div className="dietImages">
                  <img src={cheeseVegSandwich} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 250-300 calories</li>
                  <li>Protein: 10-15 grams </li>
                  <li>Carbohydrates: 25-30 grams</li>
                  <li>Fiber:3-5 grams</li>
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
                <b>Rotis and Paneer Butter Masala</b>
              </h5>
              <p>
                Rotis (Indian flatbreads) and Paneer Butter Masala make for a
                tasty and satisfying dinner option for weight gain.Serve the
                Rotis with a side of ghee or butter for extra calories and
                healthy fats. Add extra paneer cubes to the Paneer Butter Masala
                for more protein and calories. Include a side of dal (lentil
                curry) or vegetable curry along with the Rotis and Paneer Butter
                Masala to increase the overall nutrient intake and calorie
                content.
              </p>

              <h5>
                <b>Rotis and Paneer Butter Masala Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.In a mixing bowl, combine 2 cups of whole wheat flour with a
                  pinch of salt. Gradually add water and knead the flour to form
                  a soft and pliable dough. Adjust the amount of water as
                  needed.
                  <br></br>
                  2.Divide the dough into small portions and shape them into
                  balls. Roll out each ball into a round circle using a rolling
                  pin and a lightly floured surface.
                  <br></br>
                  3.Heat a flat pan or tawa over medium heat. Cook each roti on
                  the heated pan, flipping it over when small bubbles start to
                  form on the surface. Press down lightly with a spatula to
                  ensure even cooking. Cook until both sides have light golden
                  brown spots.
                  <br></br>
                  4.Remove the roti from the pan and brush it with ghee or
                  butter (optional).
                  <br></br>
                  5.Heat 2 tablespoons of cooking oil or ghee in a pan over
                  medium heat. Add 1 teaspoon of cumin seeds and let them
                  sizzle.
                  <br></br>
                  6.Add 1 finely chopped onion and sauté until it turns golden
                  brown. Add 2 teaspoons of ginger-garlic paste and cook for a
                  minute until fragrant.
                  <br></br>
                  7.Add 2 large tomatoes (pureed or finely chopped) and cook
                  until the tomatoes are soft and well cooked. Add 1 teaspoon of
                  turmeric powder, 1 teaspoon of red chili powder, 1 teaspoon of
                  coriander powder, and salt to taste. Mix well.
                  <br></br>
                  8.Add 200 grams of paneer (cubed or crumbled) to the pan and
                  mix gently to coat it with the masala. Stir in 1/4 cup of
                  heavy cream or cashew cream for richness and creaminess.
                  <br></br>
                  9.Cover the pan and simmer for 5-10 minutes to allow the
                  flavors to meld together. Garnish with freshly chopped
                  coriander leaves.
                </p>

                <div className="dietImages">
                  <img src={rotisPaneerButter} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of Roti and paneer butter masala</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 400-500</li>
                  <li>Protein: Around 10-15 grams</li>
                  <li>Carbohydrates: 15-20 grams</li>
                  <li>Fat: 15-20 grams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightGainPlanSaturday;
