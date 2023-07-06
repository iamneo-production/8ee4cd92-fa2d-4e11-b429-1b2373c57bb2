import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import wheatParathaPaneer from "../../assets/img/Nutrition/wheatParathaPaneer.jpg";
import mixedNutsBanana from "../../assets/img/Nutrition/mixedNutsBanana.jpg";
import riceDal from "../../assets/img/Nutrition/riceDal.webp";
import vegetableSamosa from "../../assets/img/Nutrition/vegetableSamosa.jpg";
import rotiChicken from "../../assets/img/Nutrition/rotiChicken.jpg";

import "../NutritionRecommandation.css";

const NutritionWeightGainPlanMonday = () => {
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
                  <b>Wheat parathas and Paneer</b>
                </h5>
                <p>
                  Wheat parathas are a popular Indian breakfast option that can
                  be made with whole wheat flour. Paneer bhurji is a flavorful
                  dish made with crumbled paneer (cottage cheese). It's a
                  protein-rich option that can be enjoyed with parathas.
                </p>

                <h5>
                  <b>Wheat parathas and Paneer Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    <p>
                      <b>Wheat Parathas</b>
                    </p>
                    1.In a mixing bowl, combine the whole wheat flour and salt.
                    Gradually add water and knead the dough until it becomes
                    smooth and pliable. The dough should not be too dry or too
                    sticky.
                    <br></br>
                    2.Divide the dough into small portions and roll each portion
                    into a ball. Take one dough ball, flatten it, and roll it
                    into a circle using a rolling pin.
                    <br></br>
                    3.Heat a tawa (flat griddle) or a non-stick pan over medium
                    heat. Place the rolled paratha on the heated pan and cook
                    for a minute or until small bubbles appear.
                    <br></br>
                    4.Flip the paratha and apply ghee or oil on the cooked side.
                    Cook the other side until golden brown spots appear,
                    pressing gently with a spatula.
                    <br></br>
                    5.Remove from heat and repeat the process with the remaining
                    dough balls. Serve the parathas hot with a side of paneer
                    bhurji or any other preferred accompaniment.
                    <br></br>
                    <p>
                      <b>Paneer</b>
                    </p>
                    1.Heat ghee or oil in a pan over medium heat. Add cumin
                    seeds and allow them to splutter.
                    <br></br>
                    2.Add the chopped onions and sauté until they become
                    translucent. Add the green chili and sauté for another
                    minute.
                    <br></br>
                    3.Add the chopped tomatoes and cook until they become soft
                    and mushy. Add turmeric powder, red chili powder, garam
                    masala, and salt. Mix well.
                    <br></br>
                    4.Add the crumbled paneer and mix gently to combine with the
                    spices. Cook for 2-3 minutes, stirring occasionally, until
                    the paneer is heated through.
                    <br></br>
                    5.Remove from heat and garnish with fresh coriander leaves.
                    Serve the paneer bhurji hot alongside wheat parathas.
                    <br></br>
                  </p>

                  <div className="dietImages">
                    <img src={wheatParathaPaneer} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition Details of 1 Paratha and 100g Paneer</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: Approximately 400-450 kcal</li>
                    <li>Carbohydrates: Around 30-35 grams</li>
                    <li>Protein: About 20-24 grams</li>
                    <li>Fat: Approximately 15-20 grams</li>
                    <li>Fiber: Around 4-6 grams</li>
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
                <b>Mixed nuts and Banana</b>
              </h5>
              <p>
                Mixed nuts and a banana can make for a nutritious and convenient
                mid-morning snack option to support weight gain.Mixed nuts can
                include a variety of nuts such as almonds, cashews, walnuts, and
                peanuts. You can either purchase a pre-mixed assortment or
                create your own mix according to your preference.Bananas are a
                great source of carbohydrates, vitamins, and minerals. They are
                easily portable and can be enjoyed on their own or incorporated
                into various recipes.
              </p>

              <h5>
                <b>Mixed nuts and Banana Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Purchase a selection of raw or roasted nuts of your choice.
                  <br></br>
                  2.Measure out a portion of mixed nuts suitable for your
                  calorie and macronutrient needs. A handful (approximately 1/4
                  to 1/2 cup) is a common serving size.
                  <br></br>
                  3.You can either consume the nuts as is or lightly roast them
                  in a dry pan for added flavor, if desired.
                  <br></br>
                  4.Enjoy the mixed nuts as a snack on their own or pair them
                  with a fresh banana for added nutrition.
                  <br></br>
                  5.Choose a ripe banana that suits your preference for
                  sweetness and texture. Peel the banana and enjoy it as a
                  standalone snack.
                  <br></br>
                  6.If you prefer a more filling option, you can slice the
                  banana and top it with a spoonful of peanut butter or almond
                  butter for added calories and healthy fats.
                </p>

                <div className="dietImages">
                  <img src={mixedNutsBanana} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details 1/2 cup Mixed Nuts and 1 Banana</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 400-420 kcal</li>
                  <li>Carbohydrates: Around 35-40 grams</li>
                  <li>Protein: About 7-12 grams</li>
                  <li>Fat: Approximately 12-25 grams</li>
                  <li>Fiber: Around 6-8 grams</li>
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
                <b>Rice and dal (1cup)</b>
              </h5>
              <p>
                Rice and dal (lentils) are a common combination in Indian
                cuisine and can be a nutritious option for mid-morning lunch to
                support weight gain.Keep in mind that the specific nutritional
                values may vary depending on the type of rice and dal used.
                Additionally, the nutritional content can be influenced by the
                cooking method, portion sizes, and any added ingredients or
                seasonings.
              </p>

              <h5>
                <b>Rice and Dal Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Rinse the rice and dal separately under running water.
                  <br></br>
                  2.In a pressure cooker or a large pot, combine the rice and
                  dal.
                  <br></br>
                  3.Add water to the rice and dal mixture. The amount of water
                  needed may vary depending on the type of rice and dal. As a
                  general guideline, use approximately 2-3 cups of water for 1
                  cup of rice and 1 cup of dal.
                  <br></br>
                  4.Add salt to taste and any desired spices or seasonings, such
                  as turmeric, cumin, or garlic (optional).
                  <br></br>
                  5.If using a pressure cooker, close the lid and cook on medium
                  heat until you hear the whistle. Reduce the heat and cook for
                  about 10-15 minutes. If using a pot, cover with a lid and cook
                  on medium-low heat until the rice and dal are cooked and soft,
                  usually around 20-30 minutes.
                  <br></br>
                  6.Once cooked, allow the pressure to release naturally or
                  carefully release the pressure from the cooker.
                  <br></br>
                  7.Stir the rice and dal mixture gently to combine.
                  <br></br>
                  8.Serve the rice and dal hot, accompanied by a serving of
                  vegetable curry, a side of yogurt, or any other preferred
                  accompaniments.
                </p>

                <div className="dietImages">
                  <img src={riceDal} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details (rice and dal 1 cup each):</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 550-600 kcal</li>
                  <li>Carbohydrates: Around 70-80 grams</li>
                  <li>Protein: About 15-20 grams</li>
                  <li>Fat: Approximately 1-2 grams</li>
                  <li>Fiber: Around 10-12 grams</li>
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
                <b>Vegetable Samosa</b>
              </h5>
              <p>
                Vegetable samosas are a popular Indian snack that can be enjoyed
                during the evening. They are typically stuffed with a savory
                mixture of vegetables and spices and deep-fried until crispy.
              </p>

              <h5>
                <b>Vegetable Samosa Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.In a pan, heat oil over medium heat. Add cumin seeds and let
                  them splutter. Add onions, ginger, and garlic. Sauté until the
                  onions turn translucent.
                  <br></br>
                  2.Add carrots, green beans, and peas. Cook for a few minutes
                  until the vegetables are tender. Add mashed potatoes,
                  coriander powder, turmeric powder, red chili powder, and salt.
                  Mix well and cook for another few minutes.
                  <br></br>
                  3.Remove the filling from heat and let it cool. In a mixing
                  bowl, combine all-purpose flour, salt, and vegetable oil for
                  the dough. Mix well.
                  <br></br>
                  4.Gradually add water to the flour mixture and knead until a
                  smooth dough is formed. Cover the dough and let it rest for 20
                  minutes. Divide the dough into small balls. Roll each ball
                  into a thin circle and cut it into two halves.
                  <br></br>
                  5.Take one half and fold it into a cone shape, sealing the
                  edges with water. Fill the cone-shaped dough with the
                  vegetable filling and seal the top edge with water.
                  <br></br>
                  6.Repeat the process with the remaining dough and filling.
                  Heat vegetable oil in a deep pan or deep fryer. Fry the
                  samosas on medium heat until they turn golden brown and
                  crispy.
                  <br></br>
                  7.Remove the samosas from the oil and drain them on a paper
                  towel to remove excess oil. Serve the vegetable samosas hot
                  with chutney or sauce of your choice.
                </p>

                <div className="dietImages">
                  <img src={vegetableSamosa} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details per Samosa</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 150-200 kcal</li>
                  <li>Carbohydrates: Around 15-20 grams </li>
                  <li>Protein: About 2-4 grams </li>
                  <li>Fat: Approximately 8-12 grams</li>
                  <li>Fiber: Around 2-3 grams </li>
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
                <b>Rotis and Chicken</b>
              </h5>
              <p>
                Rotis, also known as chapatis or Indian bread, are a common
                staple in Indian cuisine. They can be paired with a protein-rich
                chicken preparation for a nutritious and weight-gain-friendly
                dinner.The nutrition information for rotis and chicken can vary
                based on the specific ingredients used and the cooking method.
              </p>

              <h5>
                <b>Rotis and Chicken Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.In a mixing bowl, combine the whole wheat flour and salt.
                  Gradually add water and knead the dough until it becomes
                  smooth and pliable. The dough should not be too dry or too
                  sticky.
                  <br></br>
                  2.Divide the dough into small portions and roll each portion
                  into a ball. Take one dough ball, flatten it, and roll it into
                  a circle using a rolling pin.
                  <br></br>
                  3.Heat a tawa (flat griddle) or a non-stick pan over medium
                  heat. Place the rolled roti on the heated pan and cook for a
                  minute or until small bubbles appear.
                  <br></br>
                  4.Flip the roti and cook the other side until golden brown
                  spots appear, pressing gently with a spatula. Remove from heat
                  and apply ghee or oil on the cooked side.
                  <br></br>
                  5.Repeat the process with the remaining dough balls to make
                  more rotis. Serve the rotis hot with the chicken preparation.
                  <br></br>
                  6.Heat oil in a pan over medium heat. Add chopped onions and
                  sauté until they turn golden brown.
                  <br></br>
                  7.Add ginger-garlic paste and cook for a minute until the raw
                  smell disappears. Add tomato puree and cook until the oil
                  starts to separate from the mixture.
                  <br></br>
                  8.Add turmeric powder, red chili powder, cumin powder,
                  coriander powder, and salt. Mix well. Add the chicken pieces
                  to the pan and cook until they are well coated with the
                  spices.
                  <br></br>
                  9.Cover the pan and cook on low heat until the chicken is
                  tender and cooked through. Stir occasionally. Sprinkle garam
                  masala over the cooked chicken and mix well.
                  <br></br>
                  10.Remove from heat and garnish with fresh coriander leaves.
                  Serve the chicken preparation hot alongside the rotis.
                </p>

                <div className="dietImages">
                  <img src={rotiChicken} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of 1 roti and 100g of chicken</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 300-350 kcal</li>
                  <li>Carbohydrates: Around 20-25 grams</li>
                  <li>Protein: About 30-35 grams</li>
                  <li>Fat: Approximately 6-8 grams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightGainPlanMonday;
