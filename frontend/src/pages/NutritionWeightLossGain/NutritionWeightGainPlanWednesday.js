import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import parathasPotatoes from "../../assets/img/Nutrition/parathasPotato.jpg";
import cashewNuts from "../../assets/img/Nutrition/cashewNuts.jpg";
import riceRajma from "../../assets/img/Nutrition/riceRajma.jpg";
import cutlets from "../../assets/img/Nutrition/vegetableCutlets.jpg";
import rotisMutton from "../../assets/img/Nutrition/rotiMutton.webp";

import "../NutritionRecommandation.css";

const NutritionWeightGainPlanWednesday = () => {
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
                  <b>Stuffed parathas and Potatoes</b>
                </h5>
                <p>
                  Stuffed parathas with potatoes can be a delicious and
                  calorie-dense option for weight gain during breakfast.
                </p>

                <h5>
                  <b>Stuffed parathas and Potatoes Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Stuffed parathas with potatoes can be a delicious and
                    calorie-dense option for weight gain during breakfast.
                    <br></br>
                    2.Knead the dough for a few minutes until smooth.
                    <br></br>
                    3.Divide the dough into small portions and roll them out
                    into circular discs using a rolling pin.
                    <br></br>
                    4.Take one portion of the dough and roll it out into a small
                    circular disc. Place a spoonful of the potato stuffing in
                    the center of the disc. Bring the edges of the dough
                    together to cover the stuffing and seal it properly.
                    <br></br>
                    5.Gently roll out the stuffed dough into a larger circular
                    paratha. Heat a tawa or griddle over medium heat and cook
                    the paratha on both sides until golden brown, using ghee or
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
                    fragrant. Add turmeric powder, cumin powder, coriander
                    powder, and salt. Mix well.
                    <br></br>
                    9.Add the mashed potatoes and mix until well combined with
                    the spices. Remove from heat and let the potato stuffing
                    cool.
                  </p>

                  <div className="dietImages">
                    <img src={parathasPotatoes} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition Details of Stuffed parathas and Potatoes</b>
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
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Mid Morning Snack</h3>
              <br></br>
              <h5>
                <b>Cashew nuts</b>
              </h5>
              <p>
                Cashew nuts are a nutritious and calorie-dense snack option for
                weight gain during a mid-morning snack.Cashew nuts also provide
                various vitamins and minerals, including vitamin E, vitamin K,
                magnesium, copper, and phosphorus. They are also a good source
                of antioxidants and fiber. While cashew nuts can be beneficial
                for weight gain due to their calorie density, it's essential to
                consume them in moderation. A serving size of 1 ounce (28 grams)
                is recommended, as exceeding your calorie needs can lead to
                unwanted weight gain. Additionally, consider including a variety
                of other nutrient-dense foods in your diet to ensure you're
                meeting your overall nutritional requirements.
              </p>

              <h5>
                <b>Cashew nuts Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Cashew nuts are typically consumed raw or roasted. However,
                  they can also be used in various dishes or added to snacks for
                  additional flavor and texture.
                  <br></br>
                  2.To enjoy cashew nuts as a mid-morning snack, you can consume
                  them plain, roasted, or incorporate them into homemade trail
                  mixes, granola bars, or energy balls
                  <br></br>
                  3.They can also be sprinkled over salads or added to
                  stir-fries for an extra crunch.
                  <br></br>
                  4.When purchasing cashew nuts, opt for unsalted varieties to
                  control your sodium intake, especially if you're concerned
                  about cardiovascular health.
                </p>

                <div className="dietImages">
                  <img
                    src={cashewNuts}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details 1 ounce of cashew nuts</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 150-160 calories</li>
                  <li>Protein: Around 4-5 grams</li>
                  <li>Carbohydrates: Roughly 9-10 grams</li>
                  <li>Fat: Approximately 12-13 grams</li>
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
                <b>Rice and Rajma</b>
              </h5>
              <p>
                Rice and Rajma (kidney beans) can be a nutritious and
                calorie-dense combination for weight gain during lunch.To
                enhance the nutritional value of your lunch, consider adding a
                side of mixed vegetables or a fresh salad for added fiber,
                vitamins, and minerals. It's important to maintain a balanced
                diet and incorporate a variety of foods to meet
              </p>

              <h5>
                <b>Rice and Rajma Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Rinse the basmati rice under cold water until the water runs
                  clear. In a pot, add the rice and water in a 1:2 ratio (1 cup
                  of rice to 2 cups of water).
                  <br></br>
                  2.Bring the water to a boil, then reduce the heat to low,
                  cover the pot, and let the rice simmer for about 15-20 minutes
                  or until it is cooked and fluffy. Once cooked, fluff the rice
                  with a fork and set it aside.
                  <br></br>
                  3.Heat ghee or vegetable oil in a pressure cooker or a deep
                  pan over medium heat. Add cumin seeds and let them splutter.
                  <br></br>
                  4.Add the chopped onions and sauté until golden brown. Add
                  ginger-garlic paste and sauté for a minute until fragrant.
                  <br></br>
                  5.Add the chopped tomatoes and cook until they soften. Add
                  turmeric powder, red chili powder, cumin powder, coriander
                  powder, and salt. Mix well.
                  <br></br>
                  6.Add the soaked and drained rajma (kidney beans) to the pot,
                  and stir to coat them with the spices. If using a pressure
                  cooker, add water until the beans are submerged by about an
                  inch. If using a regular pan, add water until the beans are
                  fully covered.
                  <br></br>
                  7.For a pressure cooker, close the lid and cook the rajma for
                  about 4-5 whistles or until they are tender. If using a
                  regular pan, simmer the rajma on low heat, covered, until they
                  are cooked and tender (approximately 45-60 minutes).
                  <br></br>
                  8.Once cooked, mash some of the rajma beans with the back of a
                  spoon to thicken the gravy. Garnish with fresh coriander
                  leaves.
                </p>

                <div className="dietImages">
                  <img
                    src={riceRajma}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 350-400 calories</li>
                  <li>Protein: Around 12-15 grams </li>
                  <li>Carbohydrates: Roughly 60-70 grams</li>
                  <li>Fat: Approximately 6-8 grams</li>
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
                <b>Vegetable Cutlets</b>
              </h5>
              <p>
                Vegetable cutlets are a tasty and nutritious option for a weight
                gain evening snack.Vegetable cutlets are a good source of
                dietary fiber, vitamins, and minerals from the mixed vegetables
                used in the recipe. The exact nutrient content may vary
                depending on the specific vegetables and quantities used. To
                increase the calorie content and add more nutrition to your
                snack, you can consider serving the vegetable cutlets with a
                side of yogurt dip or adding some healthy fats like avocado
                slices or a dollop of peanut butter.
              </p>

              <h5>
                <b>Vegetable Cutlets Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.In a mixing bowl, combine the mashed vegetables, bread
                  crumbs, onions, bell peppers, green chili, coriander leaves,
                  ginger-garlic paste, turmeric powder, cumin powder, coriander
                  powder, garam masala, and salt. Mix well to form a dough-like
                  mixture.
                  <br></br>
                  2.Divide the mixture into small portions and shape them into
                  round or oval cutlets.
                  <br></br>
                  3.Heat vegetable oil in a pan over medium heat for shallow
                  frying.
                  <br></br>
                  4.Place the cutlets in the pan and cook until golden brown on
                  both sides.
                  <br></br>
                  5.Remove the cutlets from the pan and drain excess oil on a
                  paper towel.
                  <br></br>
                  6.Serve the vegetable cutlets hot with ketchup or chutney of
                  your choice.
                </p>

                <div className="dietImages">
                  <img
                    src={cutlets}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details 2-3 cutlets</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 200-250 calories</li>
                  <li>Protein: Around 4-6 grams</li>
                  <li>Carbohydrates: Roughly 25-30 grams</li>
                  <li>Fat: Approximately 10-12 grams</li>
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
                <b>Rotis and Mutton</b>
              </h5>
              <p>
                Rotis (Indian flatbreads) and mutton can be a nutritious and
                calorie-dense combination for weight gain during dinner.To
                enhance the nutritional value of your dinner, you can include a
                side of mixed vegetables or a fresh salad to add fiber,
                vitamins, and minerals. Additionally, consider balancing your
                meal with a variety of other nutrient-dense foods and
                incorporating healthy fats and carbohydrates from sources like
                nuts.
              </p>

              <h5>
                <b>Rotis and Mutton Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.In a mixing bowl, combine the whole wheat flour, salt, and
                  water gradually to form a soft dough. Knead the dough for a
                  few minutes until smooth.
                  <br></br>
                  2.Divide the dough into small portions and roll them out into
                  circular discs using a rolling pin.
                  <br></br>
                  3.Heat a tawa or griddle over medium heat and cook the rotis
                  on both sides until lightly browned, using ghee or vegetable
                  oil.
                  <br></br>
                  4.Heat ghee or vegetable oil in a pressure cooker or a deep
                  pan over medium heat. Add cumin seeds and let them splutter.
                  <br></br>
                  5.Add the chopped onions and sauté until golden brown. Add
                  ginger-garlic paste and sauté for a minute until fragrant.
                  <br></br>
                  6.Add the chopped tomatoes and cook until they soften. Add
                  turmeric powder, red chili powder, coriander powder, garam
                  masala, and salt. Mix well.
                  <br></br>
                  7.Add the mutton pieces to the pot and stir to coat them with
                  the spices. If using a pressure cooker, add water until the
                  mutton is fully submerged. If using a regular pan, add enough
                  water to cover the mutton.
                  <br></br>
                  8.For a pressure cooker, close the lid and cook the mutton for
                  about 5-6 whistles or until it is tender. If using a regular
                  pan, simmer the mutton on low heat, covered, until it is
                  cooked and tender (approximately 60-90 minutes).
                  <br></br>
                  9.Once cooked, garnish the mutton curry with fresh coriander
                  leaves.
                </p>

                <div className="dietImages">
                  <img src={rotisMutton} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of roti and mutton</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 400-500 calories</li>
                  <li>Protein: Around 20-30 grams </li>
                  <li>Carbohydrates: Roughly 40-50 grams</li>
                  <li>Fat: Approximately 10-15 grams </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightGainPlanWednesday;
