import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import upmaVegetables from "../../assets/img/Nutrition/upma.jpg";
import nutsSeeds from "../../assets/img/Nutrition/nutsSeeds.jpg";
import vegtableBriyani from "../../assets/img/Nutrition/vegetableBriyani.jpg";
import greenGram from "../../assets/img/Nutrition/greenGram.jpg";
import eggDosa from "../../assets/img/Nutrition/eggDhosa.webp";

import "../NutritionRecommandation.css";

const NutritionWeightLossPlanFriday = () => {
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
                  <b>Upma with Vegetables</b>
                </h5>
                <p>
                  Upma with vegetables is a nutritious and filling option for a
                  weight loss breakfast.The nutritional content of upma can vary
                  based on the ingredients and proportions used. Adding a
                  variety of vegetables not only enhances the nutritional value
                  but also adds fiber, vitamins, and minerals to the dish.
                </p>

                <h5>
                  <b>Upma with Vegetables Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Heat a small amount of oil in a pan or skillet. Add
                    mustard seeds and allow them to crackle. Then, add cumin
                    seeds, urad dal (split black gram), and chana dal (split
                    chickpeas). Sauté until the dals turn golden brown.
                    <br></br>
                    2.Add chopped onions and green chilies to the pan and sauté
                    until the onions become translucent.
                    <br></br>
                    3.Add finely chopped vegetables like carrots, peas, bell
                    peppers, and beans. Sauté for a few minutes until the
                    vegetables become slightly tender.
                    <br></br>
                    4.Add semolina (rava or sooji) to the pan and roast it for a
                    couple of minutes until it turns aromatic and slightly
                    golden.
                    <br></br>
                    5.Pour water into the pan, stirring continuously to avoid
                    lumps. Add salt and spices like turmeric powder and black
                    pepper powder for flavor. Cook the mixture on low heat until
                    the semolina absorbs the water and becomes thick and cooked.
                    <br></br>
                    6.Optional step: You can add a squeeze of lemon juice and
                    garnish with chopped cilantro for added freshness and taste.
                  </p>

                  <div className="dietImages">
                    <img src={upmaVegetables} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition details</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: Approximately 200-250 calories</li>
                    <li>Carbohydrates: Around 35-40 grams</li>
                    <li>Protein: Roughly 5-8 grams</li>
                    <li>Fat: 3-5 grams</li>
                    <li>Fiber: Approximately 3-5 grams</li>
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
                <b>Nuts And Seeds</b>
              </h5>
              <p>
                Nuts and seeds can be a nutritious and satisfying option for a
                mid-morning snack, especially when you're aiming for weight
                loss.Nuts and seeds are rich in healthy fats, protein, fiber,
                vitamins, minerals, and antioxidants. They provide a good
                balance of macronutrients and can help keep you feeling full and
                satisfied between meals.
              </p>

              <h5>
                <b>Nuts And Seeds Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Choose a variety of nuts and seeds: Opt for a mix of
                  different nuts and seeds to provide a wide range of nutrients.
                  Examples include almonds, walnuts, cashews, pistachios,
                  pumpkin seeds, sunflower seeds, flaxseeds, and chia seeds.
                  <br></br>
                  2.Portion control: Nuts and seeds are calorie-dense, so it's
                  important to practice portion control. Measure out a serving
                  size, typically around 1 ounce (28 grams) or a small handful.
                  <br></br>
                  3.Raw or roasted: Nuts and seeds can be enjoyed raw or roasted
                  based on personal preference. If roasting, do so without
                  adding excessive oil or salt to keep the calorie content in
                  check.
                  <br></br>
                  4.Flavor options (optional): You can add flavor to your nuts
                  and seeds by lightly seasoning them. Consider options like a
                  sprinkle of cinnamon, a pinch of sea salt, or a dusting of
                  cocoa powder. Be mindful of the amount of added flavorings to
                  avoid excess calories.
                  <br></br>
                  5.Storage: Store your prepared nuts and seeds in an airtight
                  container to maintain freshness and prevent them from going
                  rancid.
                  <br></br>
                </p>

                <div className="dietImages">
                  <img
                    src={nutsSeeds}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details (1 ounce)</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 160-200 caloriesl</li>
                  <li>Protein: Roughly 4-8 grams</li>
                  <li>Protein: Roughly 4-8 grams</li>
                  <li>Fat: 13-20 grams</li>
                  <li>Fiber: Approximately 2-4 grams</li>
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
                <b>Vegtable Briyani</b>
              </h5>
              <p>
                Vegetable Biryani can be a flavorful and nutritious option for a
                weight loss lunch.Vegetable biryani can be a balanced meal,
                combining complex carbohydrates from rice, fiber and nutrients
                from vegetables, and moderate amounts of healthy fats. It's a
                good idea to include a variety of colorful vegetables to enhance
                the nutritional value of the dish.
              </p>

              <h5>
                <b>Vegtable Briyani Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Rinse and soak basmati rice in water for about 30 minutes.
                  Drain the rice before cooking.
                  <br></br>
                  2.In a large pan or skillet, heat a small amount of oil. Add
                  whole spices like cinnamon sticks, cloves, cardamom pods, and
                  bay leaves. Sauté the spices until fragrant.
                  <br></br>
                  3.Add finely chopped onions and cook until they turn golden
                  brown.
                  <br></br>
                  4.Add ginger-garlic paste and sauté for a minute until the raw
                  smell disappears.
                  <br></br>
                  5.Add chopped vegetables like carrots, peas, bell peppers,
                  cauliflower, and beans. Sauté for a few minutes until the
                  vegetables become slightly tender.
                  <br></br>
                  6.Add spices like turmeric, cumin, coriander, garam masala,
                  and red chili powder. Stir well to coat the vegetables.
                  <br></br>
                  7.Drain the soaked rice and add it to the pan. Stir gently to
                  combine the rice with the vegetables and spices.
                  <br></br>
                  8.Pour water into the pan, ensuring there is enough liquid to
                  cook the rice. Add salt to taste. Bring the mixture to a boil,
                  then reduce the heat to low. Cover the pan and let it cook for
                  about 15-20 minutes, or until the rice is fully cooked and the
                  flavors have melded together.
                </p>

                <div className="dietImages">
                  <img
                    src={vegtableBriyani}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition details </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 300-400 calories</li>
                  <li>Carbohydrates: Around 50-60 grams</li>
                  <li>Protein: Roughly 6-8 grams</li>
                  <li>Fat: 5-8 grams</li>
                  <li>Fiber: Approximately 5-7 grams</li>
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
                <b>Sprouted Green Gram</b>
              </h5>
              <p>
                Sprouted green gram, also known as mung bean sprouts, is a
                nutritious and low-calorie option for an evening snack when
                you're aiming for weight loss.Sprouted green gram is rich in
                vitamins, minerals, antioxidants, and enzymes. It is low in
                calories and fat while providing a good amount of fiber and
                protein. It is also easily digestible and can help in
                maintaining satiety. To enjoy sprouted green gram as an evening
                snack, you can eat them raw or lightly sauté them with a small
                amount of oil and seasoning. You can add sprouts to salads,
                stir-fries, or mix them with other vegetables for a nutritious
                and filling snack.
              </p>

              <h5>
                <b>Sprouted Green Gram Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Start with whole green gram (mung beans). Rinse them under
                  running water to remove any impurities.
                  <br></br>
                  2.Soak the green gram in water for about 8-10 hours or
                  overnight. Ensure there is enough water to cover the beans
                  completely.
                  <br></br>
                  3.After soaking, drain the water and transfer the green gram
                  to a colander or sprouting jar. Rinse them thoroughly again
                  and drain out the excess water.
                  <br></br>
                  4.Cover the colander or sprouting jar with a clean cloth or
                  lid. Place it in a warm and dark place, away from direct
                  sunlight.
                  <br></br>
                  5.Rinse the green gram 2-3 times a day with water to keep them
                  moist. Continue this process for 2-3 days until the sprouts
                  are about 1-2 centimeters long.
                  <br></br>
                  6.Once the green gram sprouts are ready, rinse them one final
                  time and they are ready to be used.
                </p>

                <div className="dietImages">
                  <img
                    src={greenGram}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details (1 cup)</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 30-40 calories</li>
                  <li>Carbohydrates: Around 5-7 grams</li>
                  <li>Protein: Roughly 2-3 grams</li>
                  <li>Fat: Less than 1 gram</li>
                  <li>Fiber: Approximately 1-2 grams</li>
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
                <b>Egg Dosa</b>
              </h5>
              <p>
                Egg dosa is a delicious and nutritious option for dinner when
                you're aiming for weight loss.Egg dosa is a good source of
                protein from eggs and carbohydrates from the dosa batter. It
                provides essential nutrients and can help keep you satiated
                during dinner. To make it more nutritious, you can add finely
                chopped vegetables like bell peppers, spinach, or grated carrots
                to the egg mixture. This will add more fiber, vitamins, and
                minerals to the dish.
              </p>

              <h5>
                <b>Egg Dosa Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Prepare the dosa batter: Soak 2 cups of rice and 1 cup of
                  urad dal (split black gram) in water for about 4-6 hours.
                  Drain the water and grind the rice and dal together to form a
                  smooth batter. Add water as needed to achieve a pouring
                  consistency. Ferment the batter overnight or for 8-10 hours.
                  <br></br>
                  2.Prepare the egg mixture: In a bowl, beat 2 eggs until
                  well-combined. Add finely chopped onions, green chilies,
                  tomatoes, and coriander leaves. Season with salt and spices
                  like black pepper powder and turmeric powder. Mix everything
                  together.
                  <br></br>
                  3.Cook the dosa: Heat a non-stick or cast-iron skillet or
                  griddle over medium heat. Pour a ladleful of dosa batter onto
                  the center of the skillet and spread it in a circular motion
                  to form a thin dosa. Drizzle a little oil around the edges.
                  Cook until the dosa turns golden brown and crisp on one side.
                  Flip the dosa and cook the other side for a minute.
                  <br></br>
                  4.Add the egg mixture: Once the dosa is cooked on one side,
                  pour a portion of the egg mixture onto the center of the dosa.
                  Spread it evenly using a spoon or spatula. Drizzle a little
                  oil around the edges. Cook for a minute or until the egg is
                  cooked through.
                  <br></br>
                  5.Fold and serve: Fold the dosa in half or roll it like a
                  wrap. Remove from the skillet and serve hot with chutney or
                  sambar.
                </p>

                <div className="dietImages">
                  <img
                    src={eggDosa}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details (1 Egg Dhosa)</b>
              </h5>

              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 200-250 calories</li>
                  <li>Carbohydrates: Around 30-35 grams</li>
                  <li>Protein: Roughly 10-12 grams</li>
                  <li>Fat: 5-8 grams</li>
                  <li>Fiber: Approximately 2-3 grams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightLossPlanFriday;
