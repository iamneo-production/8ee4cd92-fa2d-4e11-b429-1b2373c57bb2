import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import oatMilk from "../../assets/img/Nutrition/oatMeal.jpg";
import mangoMilkshake from "../../assets/img/Nutrition/mangoMilkshake.jpg";
import chickenBriyani from "../../assets/img/Nutrition/chickenBriyani.jpg";
import peanutButterSandwich from "../../assets/img/Nutrition/peanutButterSandwich.jpg";
import rotiPaneer from "../../assets/img/Nutrition/rotiPaneer.jpg";

import "../NutritionRecommandation.css";

const NutritionWeightGainPlanTuesday = () => {
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
                  <b>Oats and Milk</b>
                </h5>
                <p>
                  Oats and milk can be a nutritious combination for weight gain
                  when prepared properly. While oats and milk can be beneficial
                  for weight gain, it's essential to have a balanced diet that
                  includes a variety of nutrients from different food sources.
                  Additionally, consider consulting a healthcare professional or
                  a registered dietitian for personalized advice based on your
                  specific dietary needs and goals.
                </p>

                <h5>
                  <b>Oats and Milk Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.In a small saucepan, combine the rolled oats and milk.
                    <br></br>
                    2.Place the saucepan on the stove over medium heat.
                    <br></br>
                    3.Bring the mixture to a boil, then reduce the heat to low.
                    <br></br>
                    4.Simmer for about 5 minutes, stirring occasionally, until
                    the oats are cooked and the mixture thickens to your desired
                    consistency.
                    <br></br>
                    5.Remove from heat and let it cool for a minute or two.
                    <br></br>
                    6.Transfer the oats to a bowl and add your preferred
                    toppings.
                    <br></br>
                    7.Stir well and enjoy your oats with milk!
                  </p>

                  <div className="dietImages">
                    <img
                      src={oatMilk}
                      alt="logo"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                <h5>
                  <b>
                    Nutrition Details of 1/2 cup of rolled oats and 1 cup of
                    whole milk
                  </b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: Approximately 300-350 calories</li>
                    <li>Protein: Around 15 grams</li>
                    <li>Carbohydrates: Roughly 40-50 grams</li>
                    <li>Fat: Approximately 10-15 grams</li>
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
                <b>Mango Milkshake</b>
              </h5>
              <p>
                Mango milkshake can be a delicious and calorie-dense option for
                weight gain.Keep in mind that if you add honey or sugar to
                sweeten the milkshake, the calorie and carbohydrate content will
                increase. To further enhance the nutritional value, you can also
                consider adding a scoop of protein powder, Greek yogurt, or a
                handful of nuts to increase the protein and healthy fat content.
              </p>

              <h5>
                <b>Mango Milkshake Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Place the diced mango, milk, honey or sugar (if using), and
                  vanilla extract (if using) into a blender.
                  <br></br>
                  2.Blend until smooth and creamy.
                  <br></br>
                  3.If desired, add a few ice cubes to the blender and blend
                  again for a chilled milkshake.
                  <br></br>
                  4.Taste and adjust the sweetness by adding more honey or sugar
                  if necessary.
                  <br></br>
                  5.Pour the mango milkshake into a glass and serve immediately.
                </p>

                <div className="dietImages">
                  <img
                    src={mangoMilkshake}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details 1 ripe mango, 1 cup of whole milk</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 250-300 calories </li>
                  <li>Protein: Around 8 grams</li>
                  <li>Carbohydrates: Roughly 40-50 grams</li>
                  <li>Fat: Approximately 8-10 grams</li>
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
                <b>Chicken Briyani</b>
              </h5>
              <p>
                Chicken Biryani can be a flavorful and calorie-rich option for
                weight gain during lunch. Remember to pair your Chicken Biryani
                with a side of vegetables or a fresh salad for added nutrients
                and fiber. It's also important to balance your meals throughout
                the day and maintain a varied and well-rounded diet for overall
                health.
              </p>

              <h5>
                <b>Chicken Briyani Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Rinse the basmati rice under cold water until the water runs
                  clear. Soak the rice in water for 30 minutes, then drain
                  <br></br>
                  2.Heat ghee or vegetable oil in a large pot over medium heat.
                  Add the whole spices (cinnamon stick, cardamom pods, cloves,
                  bay leaves) and sauté for a minute until fragrant.
                  <br></br>
                  3.Add the thinly sliced onions and cook until golden brown.
                  Add the ginger and garlic paste, and sauté for another minute.
                  <br></br>
                  4.Add the chopped tomatoes and cook until they soften. Add the
                  chicken pieces and cook until they are browned on all sides.
                  <br></br>
                  5.Add the Biryani masala powder and salt. Mix well to coat the
                  chicken evenly. Reduce the heat to low and add the plain
                  yogurt. Stir well to combine.
                  <br></br>
                  6.Add enough water to cook the rice (about 4 cups). Bring the
                  mixture to a boil. Drain the soaked basmati rice and add it to
                  the pot. Give it a gentle stir.
                  <br></br>
                  7.Cover the pot and cook on low heat until the rice is cooked
                  and the chicken is tender (around 20-25 minutes).
                  <br></br>
                  8.Once cooked, remove from heat and let it sit, covered, for
                  5-10 minutes. Garnish with chopped mint leaves and coriander
                  leaves before serving.
                </p>

                <div className="dietImages">
                  <img src={chickenBriyani} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 500-600 calories</li>
                  <li>Protein: Around 25-30 grams </li>
                  <li>Carbohydrates: Roughly 50-60 grams</li>
                  <li>Fat: Approximately 15-20 grams</li>
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
                <b>Peanut butter Sandwich</b>
              </h5>
              <p>
                A peanut butter sandwich can be a quick and satisfying snack
                option for weight gain in the evening.To enhance the nutritional
                value, you can choose whole wheat bread for added fiber and
                nutrients. Also, consider using natural peanut butter without
                added sugars or oils for a healthier option. It's important to
                remember that while a peanut butter sandwich can be
                calorie-dense, it's still essential to maintain a balanced diet
                and incorporate a variety of foods to meet your nutritional
                needs for weight gain.
              </p>

              <h5>
                <b>Peanut butter Sandwich Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Take two slices of bread and spread peanut butter evenly on
                  one side of each slice.
                  <br></br>
                  2.If desired, drizzle honey over the peanut butter or add
                  sliced bananas or a thin layer of jam on one side of the
                  bread.
                  <br></br>
                  3.Press the two slices of bread together, with the peanut
                  butter side facing inwards.
                  <br></br>
                  4.Cut the sandwich into halves or quarters for easier
                  consumption, if desired.
                </p>

                <div className="dietImages">
                  <img
                    src={peanutButterSandwich}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>
                  Nutrition Details 2 slices of whole wheat bread and 2
                  tablespoons of peanut butter
                </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 300-350 calories </li>
                  <li>Protein: Around 10-15 grams </li>
                  <li>Carbohydrates: Roughly 30-40 grams </li>
                  <li>Fat: Approximately 15-20 grams</li>
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
                <b>Rotis and Paneeer</b>
              </h5>
              <p>
                Rotis and Paneer can be a nutritious and calorie-dense
                combination for weight gain during dinner. based on the specific
                ingredients used and the cooking method.
              </p>

              <h5>
                <b>Rotis and Paneeer Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.In a mixing bowl, combine the whole wheat flour, salt, and
                  water gradually to form a soft dough. Knead the dough for a
                  few minutes until smooth.
                  <br></br>
                  2.Divide the dough into small portions and roll them out into
                  circular rotis using a rolling pin.
                  <br></br>
                  3.Heat a tawa or griddle over medium heat and cook each roti
                  until brown spots appear on both sides. Set aside.
                  <br></br>
                  4.Heat ghee or vegetable oil in a pan over medium heat. Add
                  the chopped onions and sauté until golden brown.
                  <br></br>
                  5.Add ginger-garlic paste and sauté for a minute until
                  fragrant. Add the chopped tomatoes and cook until they soften.
                  <br></br>
                  6.Add turmeric powder, cumin powder, coriander powder, garam
                  masala, and salt. Mix well. Add the paneer cubes or grated
                  paneer and gently stir to coat them with the spices.
                  <br></br>
                  7.Cook for a few minutes until the paneer is heated through and well combined with the spices.
                  <br></br>
                  8.Garnish with fresh coriander leaves.
                  
                </p>

                <div className="dietImages">
                  <img src={rotiPaneer} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of roti and panner</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 350-400 calories</li>
                  <li>Protein: Around 20-25 grams </li>
                  <li>Carbohydrates: Roughly 25-30 grams</li>
                  <li>Fat: Approximately 25-30 grams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightGainPlanTuesday;
