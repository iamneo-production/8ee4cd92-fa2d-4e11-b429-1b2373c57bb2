import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import eggs from "../../assets/img/Nutrition/eggs.jpg";
import bananaSmoothie from "../../assets/img/Nutrition/bananaSmoothie.jpg";
import pulaoSalad from "../../assets/img/Nutrition/pulaoSalad.jpg";
import besan from "../../assets/img/Nutrition/besan.jpg";
import rotisPalakPaneer from "../../assets/img/Nutrition/rotiPalakPaneer.jpg";

import "../NutritionRecommandation.css";

const NutritionWeightGainPlanThursday = () => {
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
                  <b>Eggs</b>
                </h5>
                <p>
                  Eggs are a nutritious and versatile food that can be included
                  in your weight gain breakfast.Eggs are a complete protein
                  source, meaning they provide all the essential amino acids
                  that our bodies require. They also contain essential vitamins
                  and minerals, including vitamin B12, vitamin D, vitamin A,
                  iron, and selenium. Including eggs in your breakfast can help
                  increase your calorie intake and provide a good amount of
                  protein, which is important for weight gain. Moreover, eggs
                  are a satiating food that can help you feel fuller for longer,
                  which may be beneficial if you're trying to gain weight.
                </p>

                <h5>
                  <b>Eggs Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Scrambled eggs: Whisk eggs in a bowl, season with salt and
                    pepper, and cook them in a pan with a little oil or butter,
                    stirring until cooked to your desired consistency.
                    <br></br>
                    2.Fried eggs: Heat a pan with oil or butter, crack eggs into
                    the pan, and cook until the whites are set and the yolks are
                    still slightly runny or cooked to your preference.
                    <br></br>
                    3.Boiled eggs: Place eggs in a pot of water, bring it to a
                    boil, then reduce the heat and simmer for about 6-7 minutes
                    for soft-boiled eggs or 9-12 minutes for hard-boiled eggs.
                    <br></br>
                    4.Omelette: Whisk eggs with salt, pepper, and any desired
                    fillings such as vegetables, cheese, or cooked meat. Pour
                    the mixture into a heated and greased pan, cook until set,
                    and fold it in half.
                  </p>

                  <div className="dietImages">
                    <img
                      src={eggs}
                      alt="logo"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                <h5>
                  <b>Nutrition Details per Egg</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: Approximately 70-80 calories</li>
                    <li>Protein: Around 6 grams</li>
                    <li>Fat: Approximately 5 grams </li>
                    <li>Carbohydrates: Less than 1 gram</li>
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
                <b>Banana Smoothie</b>
              </h5>
              <p>
                Banana smoothies can be a delicious and nutritious option for a
                mid-morning snack to support weight gain.Bananas are a good
                source of carbohydrates, dietary fiber, and essential nutrients
                like potassium and vitamin C. Peanut butter adds healthy fats,
                protein, and additional calories to the smoothie. Milk provides
                calcium, protein, and other essential nutrients. To increase the
                calorie content and nutritional value, you can consider adding
                ingredients like oats, chia seeds, flaxseeds, or protein powder
                to the smoothie. Be mindful of portion sizes and adjust the
                ingredients based on your individual calorie and nutrient
                requirements.
              </p>

              <h5>
                <b>Banana Smoothie Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Peel the banana and break it into smaller chunks.
                  <br></br>
                  2.Place the banana chunks in a blender.
                  <br></br>
                  3.Add milk, peanut butter, honey or maple syrup, and vanilla
                  extract to the blender.
                  <br></br>
                  4.If desired, add a few ice cubes for a chilled smoothie.
                  <br></br>
                  5.Blend all the ingredients until smooth and creamy.
                  <br></br>
                  6.Taste the smoothie and adjust the sweetness or thickness by
                  adding more honey, milk, or peanut butter if desired.
                  <br></br>
                  7.Pour the smoothie into a glass and serve it immediately.
                </p>

                <div className="dietImages">
                  <img src={bananaSmoothie} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 300-350 calories</li>
                  <li>Protein: Around 10-15 grams</li>
                  <li>Carbohydrates: Roughly 40-50 grams</li>
                  <li>Fat: Approximately 10-15 grams</li>
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
                <b>Vegetable Pulao and Vegetable Salad</b>
              </h5>
              <p>
                Vegetable pulao and vegetable salad can be a nutritious and
                satisfying combination for a weight gain lunch.Along with fiber,
                this dish can provide many other essential nutrients as well.
                The nutrient value becomes strong because of the variety of
                vegetables such as beans, paneer, peas ans carrots.
              </p>

              <h5>
                <b>Vegetable Pulao and Vegetable Salad Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Wash the rice under running water until the water runs
                  clear. Soak the rice in water for 20-30 minutes, then drain.
                  Heat ghee or vegetable oil in a large pot or pressure cooker
                  over medium heat.
                  <br></br>
                  2.Add the whole spices and cumin seeds. Let them splutter and
                  release their aroma. Add the chopped onions and sauté until
                  golden brown.
                  <br></br>
                  3.Add the minced garlic and grated ginger. Sauté for a minute
                  until fragrant. Add the mixed vegetables and cook for a few
                  minutes until slightly tender.
                  <br></br>
                  4.Add turmeric powder, coriander powder, garam masala, and
                  salt. Mix well. Add the soaked and drained rice to the pot and
                  stir to coat the rice with the spices.
                  <br></br>
                  5.Add water (use 1.5 cups of water for 1 cup of rice) and
                  bring it to a boil. If using a pressure cooker, close the lid
                  and cook for 1-2 whistles. If using a regular pot, cover it
                  with a tight-fitting lid and simmer on low heat until the rice
                  is cooked and water is absorbed (approximately 15-20 minutes).
                  <br></br>
                  6.Wash and prepare the salad greens by tearing them into
                  bite-sized pieces. Chop the assorted vegetables into desired
                  shapes and sizes.
                  <br></br>
                  7.In a mixing bowl, combine the salad greens and assorted
                  vegetables. Drizzle olive oil or your preferred dressing over
                  the salad.
                  <br></br>
                  8.Add lemon juice (if desired) for a tangy flavor. Season with
                  salt and pepper, and toss the salad gently to coat the
                  vegetables with the dressing.
                  <br></br>
                  9.If desired, sprinkle optional toppings like nuts, seeds,
                  cheese, or boiled eggs over the salad. Serve the vegetable
                  salad as a refreshing accompaniment to the vegetable pulao.
                </p>

                <div className="dietImages">
                  <img src={pulaoSalad} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 300-400 calories</li>
                  <li>Protein: Around 5-8 grams</li>
                  <li>Carbohydrates: Roughly 50-60 grams</li>
                  <li>Fat: Approximately</li>
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
                <b>Besan</b>
              </h5>
              <p>
                Besan, also known as chickpea flour or gram flour, is a
                versatile ingredient that can be used to prepare various snacks.
                It is rich in protein, fiber, and essential nutrients, making it
                a good choice for weight gain.Besan is a good source of
                plant-based protein, which is beneficial for muscle growth and
                weight gain. It also provides dietary fiber, which aids
                digestion and helps you feel fuller for longer. Besan is rich in
                essential nutrients such as iron, magnesium, and B vitamins.
              </p>

              <h5>
                <b>Besan Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.In a mixing bowl, combine besan, water, turmeric powder,
                  cumin powder, and salt. Mix well to form a smooth batter
                  without any lumps.
                  <br></br>
                  2.Add chopped onions, tomatoes, coriander leaves, and green
                  chili (if using) to the batter. Mix everything together.
                  <br></br>
                  3.Heat a non-stick pan or a griddle over medium heat and
                  drizzle a little vegetable oil to grease the surface.
                  <br></br>
                  4.Pour a ladleful of the besan batter onto the pan and spread
                  it evenly to form a circular pancake (chilla).
                  <br></br>
                  5.Cook for a couple of minutes until the bottom side turns
                  golden brown.
                  <br></br>
                  6.Flip the chilla and cook the other side for a few more
                  minutes until it is cooked through.
                  <br></br>
                  7.Repeat the process with the remaining batter to make more
                  chillas.
                  <br></br>
                  8.Serve the besan chillas hot with chutney, yogurt, or any
                  desired accompaniment.
                </p>

                <div className="dietImages">
                  <img src={besan} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 150-200 calories</li>
                  <li>Protein: Around 8-10 grams</li>
                  <li>Carbohydrates: Roughly 20-25 grams</li>
                  <li>Fat: Approximately 5-8 grams</li>
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
                <b>Rotis and Palak Paneer</b>
              </h5>
              <p>
                Rotis (also known as chapatis) and Palak Paneer can make for a
                nutritious and satisfying dinner option to support weight
                gain.Palak paneer is a nutritious dish that combines the
                goodness of spinach and paneer. Spinach is rich in iron,
                vitamins, and antioxidants, while paneer provides protein and
                calcium. This combination supports muscle growth and overall
                weight gain. It's important to note that the actual nutritional
                content may vary depending on the specific ingredients and
                cooking methods used. Adjust the portion sizes and ingredients
                based on your individual calorie and nutrient requirements.
              </p>

              <h5>
                <b>Rotis and Palak Paneer Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Heat ghee or vegetable oil in a pan over medium heat. Add
                  cumin seeds and let them splutter.
                  <br></br>
                  2.Add chopped onions and sauté until golden brown. Add minced
                  garlic, grated ginger, and green chili (if using). Sauté for a
                  minute until fragrant.
                  <br></br>
                  3.Add the tomato puree and cook until the oil separates from
                  the masala.
                  <br></br>
                  4.Add turmeric powder, coriander powder, garam masala, and
                  salt. Mix well.
                  <br></br>
                  5.Add blanched spinach leaves and cook for a few minutes until
                  the spinach wilts and gets well incorporated with the masala.
                  <br></br>
                  6.Add the chopped tomatoes and cook until they soften. Add
                  turmeric powder, red chili powder, coriander powder, garam
                  masala, and salt. Mix well.
                  <br></br>
                  7.Remove the mixture from heat and let it cool slightly.
                  Transfer the mixture to a blender or food processor and blend
                  it to a smooth puree.
                  <br></br>
                  8.Return the puree to the pan and place it over low heat. Add
                  cubed paneer to the spinach puree and simmer for a few minutes
                  until the paneer absorbs the flavors.
                  <br></br>
                  9.If the consistency is too thick, you can add a little water
                  to adjust it. Garnish with a dollop of fresh cream (if
                  desired) and serve the palak paneer hot with rotis.
                </p>

                <div className="dietImages">
                  <img src={rotisPalakPaneer} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of roti and palak paneer</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 350-400</li>
                  <li>Protein: Around 15-20 grams</li>
                  <li>Carbohydrates: Roughly 30-40 grams</li>
                  <li>Fat: Approximately 15-20 grams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightGainPlanThursday;
