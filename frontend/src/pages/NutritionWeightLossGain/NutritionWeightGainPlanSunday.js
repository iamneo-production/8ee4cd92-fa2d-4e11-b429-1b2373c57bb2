import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import dosa from "../../assets/img/Nutrition/dosa.jpg";
import walnuts from "../../assets/img/Nutrition/walnuts.jpg";
import riceSambhar from "../../assets/img/Nutrition/riceSambhar.jpg";
import vegetableSpringRolls from "../../assets/img/Nutrition/springRolls.jpg";
import rotiPannerTikka from "../../assets/img/Nutrition/rotiPaneerTikka.jpg";

import "../NutritionRecommandation.css";
import { UpdateModeEnum } from "chart.js";

const NutritionWeightGainPlanSunday = () => {
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
                  <b>Egg Dosa</b>
                </h5>
                <p>
                  Dosa is a popular South Indian dish made from fermented rice
                  and lentil batter. It is a versatile and delicious breakfast
                  option that can be prepared in various ways. If you're looking
                  to use dosa for weight gain, you can incorporate some
                  modifications to enhance its nutritional value and calorie
                  content.
                </p>

                <h5>
                  <b>Egg Dosa Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Prepare dosa batter: Soak 2 cups of rice and 1 cup of
                    split black gram lentils (urad dal) in water separately for
                    6-8 hours. Grind them separately until smooth, and then mix
                    the batters together with salt. Ferment the batter overnight
                    or for 8-12 hours.
                    <br></br>
                    2.Heat a non-stick pan or skillet on medium heat.
                    <br></br>
                    3.Pour a ladleful of dosa batter onto the center of the pan
                    and spread it in a circular motion to make a thin pancake.
                    <br></br>
                    4.Crack an egg onto the dosa and spread it gently across the
                    surface.
                    <br></br>
                    5.Drizzle some oil or ghee around the edges of the dosa and
                    cook until the egg is set and the dosa turns golden brown
                    and crisp.
                    <br></br>
                    6.Flip the dosa and cook for another minute.
                    <br></br>
                    7.AServe hot with chutney and sambar.
                  </p>

                  <div className="dietImages">
                    <img
                      src={dosa}
                      alt="logo"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                <h5>
                  <b>Nutrition Details per Dosa</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: Approximately 150-200 calories</li>
                    <li>Carbohydrates: 20-25 grams of carbohydrates</li>
                    <li>Protein: 8-10 grams </li>
                    <li>Fiber: 2-4 grams</li>
                    <li>Fat: 5 grams</li>
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
                <b>Walnuts</b>
              </h5>
              <p>
                Walnuts can be a nutritious and calorie-dense snack option for
                weight gain.Remember, while walnuts are a healthy food choice,
                it's important to consume them in moderation, as they are
                calorie-dense.
              </p>

              <h5>
                <b>Walnuts Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Purchase fresh, whole walnuts from a reliable source.
                  <br></br>
                  2.Remove the outer shell of the walnuts, if necessary.
                  <br></br>
                  3.You can choose to consume them raw or opt for roasted
                  walnuts for a different flavor. Roasting can be done by
                  spreading them evenly on a baking sheet and baking at 350°F
                  (175°C) for about 10-15 minutes, or until they become slightly
                  golden and fragrant. Avoid adding any oil or salt during
                  roasting.
                  <br></br>
                  4.Let the roasted walnuts cool before storing or consuming
                  them.
                </p>

                <div className="dietImages">
                  <img src={walnuts} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details per ounce</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 175-185 calories</li>
                  <li>Protein: 5 grams </li>
                  <li>Carbohydrates: 4 grams</li>
                  <li>Fat: 18 grams of fat</li>
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
                <b>Rice and Sambhar </b>
              </h5>
              <p>
                Rice and sambhar can be a nutritious and calorie-dense meal
                option for weight gain. Increase the portion size of rice and
                sambhar to meet your calorie needs. Cook the rice in ghee
                (clarified butter) to add more calories and flavor. Add extra
                lentils and vegetables to the sambhar to increase its nutrient
                content and calorie density.
              </p>

              <h5>
                <b>Rice and Sambhar Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Choose a variety of rice, such as basmati, jasmine, or brown
                  rice. Rinse the rice under cold water to remove any excess
                  starch.
                  <br></br>
                  2.In a pot, combine 1 cup of rice with 2 cups of water. Bring
                  the water to a boil, then reduce the heat to low, cover the
                  pot, and let it simmer for about 15-20 minutes or until the
                  rice is tender and the water is absorbed.
                  <br></br>
                  3.Fluff the rice with a fork before serving.
                  <br></br>
                  4.Wash and soak ½ cup of toor dal (split pigeon peas) for 30
                  minutes. In a pressure cooker or a pot, add the soaked dal, 2
                  cups of water, and a pinch of turmeric powder. Cook until the
                  dal is soft and mushy.
                  <br></br>
                  5.In a separate pan, heat 1 tablespoon of oil. Add ½ teaspoon
                  of mustard seeds, ½ teaspoon of cumin seeds, and let them
                  splutter. Add 1 finely chopped onion, 2-3 chopped tomatoes,
                  and sauté until they turn soft.
                  <br></br>
                  6.Add ½ cup of chopped vegetables like carrots, beans,
                  pumpkin, or eggplant, along with 1 tablespoon of sambhar
                  powder (a spice blend readily available in stores). Sauté the
                  vegetables for a few minutes, then add the cooked dal and
                  water as needed to achieve the desired consistency.
                  <br></br>
                  7.Season with salt and let the sambhar simmer for another
                  10-15 minutes. Garnish with fresh cilantro leaves before
                  serving.
                </p>

                <div className="dietImages">
                  <img
                    src={riceSambhar}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of Rice and Sambhar</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 400-450 calories</li>
                  <li>Protein: Around 20-25 grams</li>
                  <li>Carbohydrates: Roughly 65-70 grams</li>
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
                <b>Vegetable Spring Rolls</b>
              </h5>
              <p>
                Vegetable spring rolls can be a delicious and calorie-dense
                snack option for weight gain.
              </p>

              <h5>
                <b>Vegetable Spring Rolls Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Prepare the filling by chopping a variety of vegetables such
                  as cabbage, carrots, bell peppers, onions, and mushrooms into
                  thin strips.
                  <br></br>
                  2.Heat a small amount of oil in a pan or wok over medium heat.
                  Add the vegetables to the pan and stir-fry them for a few
                  minutes until they are slightly softened but still retain
                  their crunch.
                  <br></br>
                  3.Season the vegetables with soy sauce, ginger, garlic, or
                  other desired seasonings for flavor. Remove the vegetables
                  from the heat and let them cool.
                  <br></br>
                  4.Take a spring roll wrapper (made from rice or wheat flour)
                  and place it on a clean surface. Spoon a portion of the
                  vegetable filling onto the center of the wrapper. Fold the
                  sides of the wrapper over the filling, then roll it tightly
                  from bottom to top, sealing the edges with a bit of water or a
                  cornstarch-water mixture.
                  <br></br>
                  5.Heat oil in a deep pan or wok for frying. Carefully place
                  the spring rolls into the hot oil and fry them until they turn
                  golden brown and crispy.
                  <br></br>
                  6.Remove the spring rolls from the oil and place them on paper
                  towels to drain excess oil.
                </p>

                <div className="dietImages">
                  <img
                    src={vegetableSpringRolls}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details per Spring Roll</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 80-100 calories</li>
                  <li>Protein: 2-3 grams </li>
                  <li>Carbohydrates: 10-12 grams</li>
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
                <b>Rotis and Paneer Tikka Masala</b>
              </h5>
              <p>
                Rotis and Paneer Tikka Masala can be a nutritious and
                calorie-dense dinner option for weight gain.
              </p>

              <h5>
                <b>Rotis and Paneer Tikka Masala Preparation</b>
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
                  5.Cut 250 grams of paneer (Indian cottage cheese) into cubes.
                  <br></br>
                  6.In a mixing bowl, prepare a marinade using 2 tablespoons of
                  yogurt, 1 tablespoon of ginger-garlic paste, 1 tablespoon of
                  tandoori masala (a spice blend readily available in stores), 1
                  teaspoon of turmeric powder, 1 teaspoon of cumin powder, 1
                  teaspoon of coriander powder, a pinch of red chili powder
                  (adjust to taste), and salt.
                  <br></br>
                  7.Add the paneer cubes to the marinade and let them marinate
                  for at least 30 minutes (or longer for better flavor). Preheat
                  the oven to 400°F (200°C).
                  <br></br>
                  8.Thread the marinated paneer cubes onto skewers and place
                  them on a baking sheet lined with aluminum foil. Bake the
                  paneer tikka in the preheated oven for about 15-20 minutes or
                  until they are slightly charred and cooked through.
                  <br></br>
                  9.In a separate pan, heat 1 tablespoon of oil. Add 1 finely
                  chopped onion and sauté until it becomes translucent. Add 2
                  chopped tomatoes and cook until they soften.
                  <br></br>
                  10.Add 1 tablespoon of tomato paste, 1 tablespoon of cashew
                  paste (blend cashews with water), and cook for a few more
                  minutes. Add 1 cup of water or vegetable broth, 1 teaspoon of
                  garam masala (a spice blend), and salt to taste. Simmer the
                  gravy for a few minutes.
                  <br></br>
                  11.Finally, add the baked paneer tikka to the gravy and let it
                  simmer for another 5 minutes. Garnish with fresh cilantro
                  leaves before serving.
                </p>

                <div className="dietImages">
                  <img
                    src={rotiPannerTikka}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of Roti and paneer butter masala</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 350-400 calories</li>
                  <li>Protein:10-15 grams of protein</li>
                  <li>Carbohydrates: 20-25 grams</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightGainPlanSunday;
