import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import riceMixedVegetable from "../../assets/img/Nutrition/riceMixedVegetables.jpg";
import almonds from "../../assets/img/Nutrition/almonds.jpg";
import parathasPotatoes from "../../assets/img/Nutrition/paratha.jpg";
import breadPakoras from "../../assets/img/Nutrition/breadPakaros.jpg";
import rotisFish from "../../assets/img/Nutrition/rotiFish.webp";

import "../NutritionRecommandation.css";

const NutritionWeightGainPlanFriday = () => {
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
                  <b>Rice with Mixed Vegetables</b>
                </h5>
                <p>
                  Rice with mixed vegetables can be a nutritious and filling
                  option for weight gain, especially when prepared with
                  additional ingredients to increase its calorie content. Rice
                  is a good source of carbohydrates, providing energy for your
                  body. It also contains some protein. The exact amount of
                  calories and nutrients will depend on the type of rice used
                  (e.g., white, brown, basmati). For example, 1 cup of cooked
                  white rice contains around 200 calories, 45 grams of
                  carbohydrates, and 4 grams of protein. Vegetables are rich in
                  vitamins, minerals, and dietary fiber. They provide essential
                  nutrients and contribute to overall health. The calorie
                  content will vary depending on the types and quantities of
                  vegetables used.
                </p>

                <h5>
                  <b>Rice with Mixed Vegetables Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Cook 1 cup of rice according to the package instructions
                    or your preferred method.
                    <br></br>
                    2.While the rice is cooking, prepare the mixed vegetables.
                    You can use a combination of vegetables like carrots, peas,
                    corn, bell peppers, broccoli, and cauliflower. Chop them
                    into small pieces.
                    <br></br>
                    3.In a separate pan, heat some oil or butter over medium
                    heat. Add the chopped vegetables and sauté them until they
                    are tender.
                    <br></br>
                    4.Once the rice is cooked, add it to the pan with the
                    vegetables and mix them together. You can also add some soy
                    sauce or seasonings of your choice for added flavor.
                    <br></br>
                    5.Cook for an additional few minutes until the flavors blend
                    together.
                  </p>

                  <div className="dietImages">
                    <img src={riceMixedVegetable} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition Details per cup of rice and vegetables</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: Around 200-250 calories.</li>
                    <li>Carbohydrates: Approximately 40-50 grams</li>
                    <li>Protein: Typically, 5-8 grams</li>
                    <li>Fiber: 4-6 grams of fiber.</li>
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
                <b>Almonds</b>
              </h5>
              <p>
                Almonds are a nutritious and calorie-dense snack that can be
                beneficial for weight gain. They are rich in healthy fats,
                protein, fiber, vitamins, and minerals.
              </p>

              <h5>
                <b>Almonds Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Start with raw almonds. If you prefer a roasted flavor, you
                  can roast them yourself by spreading them in a single layer on
                  a baking sheet and roasting in a preheated oven at 350°F
                  (175°C) for about 10-15 minutes, or until they become slightly
                  golden and aromatic. Be careful not to burn them.
                  <br></br>
                  2.Allow the almonds to cool before consuming.
                  <br></br>
                  3.You can store them in an airtight container for easy
                  snacking.
                  <br></br>
                  4.For additional flavor, you can season the almonds with
                  spices such as cinnamon, cayenne pepper, or a sprinkle of sea
                  salt.
                  <br></br>
                  5.Toss the almonds with the spices after roasting or mix them
                  into the raw almonds before roasting.
                </p>

                <div className="dietImages">
                  <img
                    src={almonds}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details per 1 ounce of Almonds</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 160-170 calories.</li>
                  <li>Protein: 6 grams </li>
                  <li>Carbohydrates: 6 grams</li>
                  <li>Fat: 14-15 grams of fat</li>
                  <li>
                    Vitamins and Minerals: Almonds are rich in vitamin E,
                    magnesium, phosphorus, and manganese. They also contain
                    small amounts of other vitamins and minerals like calcium,
                    iron, and B vitamins.
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
                <b>Parathas and Potatoes</b>
              </h5>
              <p>
                Stuffed parathas with potatoes can be a delicious and
                calorie-dense option for weight gain during breakfast.
              </p>

              <h5>
                <b>Parathas and Potatoes Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Stuffed parathas with potatoes can be a delicious and
                  calorie-dense option for weight gain during breakfast.
                  <br></br>
                  2.Knead the dough for a few minutes until smooth.
                  <br></br>
                  3.Divide the dough into small portions and roll them out into
                  circular discs using a rolling pin.
                  <br></br>
                  4.Take one portion of the dough and roll it out into a small
                  circular disc. Place a spoonful of the potato stuffing in the
                  center of the disc. Bring the edges of the dough together to
                  cover the stuffing and seal it properly.
                  <br></br>
                  5.Gently roll out the stuffed dough into a larger circular
                  paratha. Heat a tawa or griddle over medium heat and cook the
                  paratha on both sides until golden brown, using ghee or
                  vegetable oil.
                  <br></br>
                  6.Repeat the process with the remaining dough and potato
                  stuffing to make more stuffed parathas.
                  <br></br>
                  7.Heat a pan over medium heat and add a teaspoon of ghee or
                  vegetable oil. Add the chopped onions and green chili (if
                  using) and sauté until the onions turn golden brown.
                  <br></br>
                  8.Add ginger-garlic paste and sauté for a minute until
                  fragrant. Add turmeric powder, cumin powder, coriander powder,
                  and salt. Mix well.
                  <br></br>
                  9.Add the mashed potatoes and mix until well combined with the
                  spices. Remove from heat and let the potato stuffing cool.
                </p>

                <div className="dietImages">
                  <img
                    src={parathasPotatoes}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of  parathas and Potatoes</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 250-300 calories</li>
                  <li>Protein: Around 6-8 grams</li>
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
              <h3 className="card-title">Evening Snack</h3>
              <br></br>
              <h5>
                <b>Bread Pakoras</b>
              </h5>
              <p>
                Bread pakoras are a popular Indian snack made by deep-frying
                bread slices coated in a spiced gram flour batter. They can be a
                tasty option for weight gain, but it's important to note that
                they are high in calories and should be consumed in moderation.
              </p>

              <h5>
                <b>Bread Pakoras Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Take 4-6 slices of bread (white or whole wheat) and trim the
                  edges if desired. Cut each slice into halves diagonally to
                  create triangles.
                  <br></br>
                  2.For the batter, in a mixing bowl, combine 1 cup of gram
                  flour (besan), 1/4 cup of rice flour (optional, for extra
                  crispiness), 1/2 teaspoon of red chili powder, 1/2 teaspoon of
                  turmeric powder, 1/2 teaspoon of cumin seeds, 1/2 teaspoon of
                  carom seeds (ajwain), 1/2 teaspoon of salt (or to taste), and
                  a pinch of asafoetida (hing).
                  <br></br>
                  3.Gradually add water to the dry ingredients and whisk until
                  you achieve a smooth batter of pouring consistency. The batter
                  should coat the back of a spoon without being too thick or too
                  runny.
                  <br></br>
                  4.Heat oil in a deep pan or kadai for deep frying. Dip each
                  bread triangle into the batter, ensuring it is coated evenly
                  on both sides.
                  <br></br>
                  5.Carefully drop the coated bread triangles into the hot oil
                  and fry on medium heat until they turn golden brown and
                  crispy. Flip them occasionally for even frying.
                  <br></br>
                  6.Once fried, remove the bread pakoras using a slotted spoon
                  and place them on a paper towel-lined plate to absorb excess
                  oil.
                  <br></br>
                  7.Serve the bread pakoras hot with chutney or ketchup.
                </p>

                <div className="dietImages">
                  <img src={breadPakoras} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details per bread pakora</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 150-200 calories</li>
                  <li>Protein: 3-5 grams </li>
                  <li>Carbohydrates: 15-20 grams</li>
                  <li>
                    Vitamins and Minerals: The gram flour used in the batter
                    provides some vitamins and minerals, including folate, iron,
                    and magnesium.
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
                <b>Rotis and Fish</b>
              </h5>
              <p>
                Rotis (also known as chapatis) are a traditional Indian
                flatbread, and when combined with fish, they can create a
                nutritious and calorie-dense dinner option for weight gain.To
                increase the calorie content for weight gain, you can consider
                adding healthy fats to the meal, such as cooking the fish in oil
                or serving it with a side of avocado slices or a drizzle of
                olive oil. Additionally, you can include a variety of vegetables
                or a side dish of dal (lentils) to make the meal more nutritious
                and balanced.
              </p>

              <h5>
                <b>Rotis and Fish Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.In a mixing bowl, combine 2 cups of whole wheat flour with a
                  pinch of salt. Gradually add water to the flour while kneading
                  to form a smooth dough. Adjust the amount of water as needed.
                  <br></br>
                  2.Divide the dough into small portions and shape them into
                  balls. Roll out each ball into a thin, round roti using a
                  rolling pin and a lightly floured surface.
                  <br></br>
                  3.Heat a flat pan or tawa over medium heat and cook each roti
                  on both sides until it puffs up and develops golden brown
                  spots.
                  <br></br>
                  4.Repeat the process for the remaining dough balls. Keep the
                  cooked rotis warm by covering them with a clean cloth or
                  placing them in a covered container.
                  <br></br>
                  5.Choose your preferred type of fish, such as salmon, tilapia,
                  or cod. Clean and rinse the fish fillets under cold water. Pat
                  them dry with a paper towel.
                  <br></br>
                  6.Season the fish with salt, pepper, and any other desired
                  spices or herbs, such as paprika, garlic powder, or lemon
                  juice, to enhance the flavor.
                  <br></br>
                  7.Heat a non-stick pan or skillet over medium heat and add a
                  small amount of cooking oil or butter.
                  <br></br>
                  8.Place the fish fillets in the pan and cook them for a few
                  minutes on each side until they are cooked through and flake
                  easily with a fork. Remove the cooked fish from the pan and
                  serve hot.
                  <br></br>
                  9.Remove the cooked fish from the pan and serve hot.
                </p>

                <div className="dietImages">
                  <img
                    src={rotisFish}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of roti and Fish</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 250-350</li>
                  <li>Protein: Around 20-25 grams</li>
                  <li>Carbohydrates: 15-20 grams</li>
                  <li>
                    Vitamins and Minerals: Fish is rich in various vitamins and
                    minerals, including vitamin D, vitamin B12, selenium, and
                    iodine.
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
export default NutritionWeightGainPlanFriday;
