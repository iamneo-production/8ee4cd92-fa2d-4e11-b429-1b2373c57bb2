import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import ripeBanana from "../../assets/img/Nutrition/ripeBanana.jpg";
import roastedPeanuts from "../../assets/img/Nutrition/roastedPeanuts.jpg";
import grilledPanner from "../../assets/img/Nutrition/grilledPaneer.jpg";
import cucumberCarrot from "../../assets/img/Nutrition/cucumberCarrot.jpg";
import vegetablePulao from "../../assets/img/Nutrition/vegetablePulao.jpg";

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
                  <b>Ripe Bananas</b>
                </h5>
                <p>
                  Ripe bananas are a versatile and nutritious fruit that can be
                  a great addition to your weight loss breakfast. They are rich
                  in fiber, vitamins, and minerals, and can help keep you
                  feeling full and satisfied.Ripe bananas are naturally sweet
                  due to the presence of natural sugars, so they can help
                  satisfy your sweet cravings while providing essential
                  nutrients. The fiber content aids in digestion and can help
                  promote a feeling of fullness. Including ripe bananas in your
                  breakfast can provide you with a good source of energy and
                  nutrients to start your day. They are also easy to digest,
                  making them a gentle choice for your morning meal.
                </p>

                <h5>
                  <b>Ripe Bananas Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Whole: Simply peel the ripe banana and enjoy it as is.
                    This is the easiest and quickest way to enjoy a ripe banana.
                    <br></br>
                    2.Sliced: Peel the ripe banana and slice it into thin
                    rounds. You can add the slices to your breakfast cereal,
                    yogurt, or oatmeal for added natural sweetness and flavor.
                    <br></br>
                    3.Mashed: Peel the ripe banana and mash it with a fork until
                    it reaches a smooth consistency. You can use mashed bananas
                    as a topping for toast, pancakes, or mix it into your
                    favorite smoothie or overnight oats for added creaminess and
                    natural sweetness.
                  </p>

                  <div className="dietImages">
                    <img src={ripeBanana} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition details (Medium Size))</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: 105 kcal</li>
                    <li>Carbohydrates: 27g</li>
                    <li>Fiber: 3g</li>
                    <li>Protein: 1g</li>
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
                <b>Roasted Peanuts</b>
              </h5>
              <p>
                Roasted peanuts can be a nutritious and satiating mid-morning
                snack option for weight loss. They are packed with healthy fats,
                protein, fiber, and various vitamins and minerals.Peanuts are an
                excellent source of monounsaturated fats, which are
                heart-healthy fats that can help promote satiety. They also
                provide a decent amount of plant-based protein, which can
                contribute to feeling full and satisfied.
              </p>

              <h5>
                <b>Roasted Peanuts Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Preheat your oven to 350°F (175°C).
                  <br></br>
                  2.Spread the raw peanuts evenly on a baking sheet.
                  <br></br>
                  3.Place the baking sheet in the preheated oven and roast the
                  peanuts for about 10-15 minutes, stirring occasionally. Keep
                  an eye on them to prevent burning.
                  <br></br>
                  4.Remove the peanuts from the oven when they are golden brown
                  and have a roasted aroma.
                  <br></br>
                  5.Let the roasted peanuts cool completely before storing them
                  in an airtight container.
                  <br></br>
                  6.If desired, you can sprinkle a small amount of salt over the
                  roasted peanuts for added flavor.
                </p>

                <div className="dietImages">
                  <img
                    src={roastedPeanuts}
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
                  <li>Calories: 166 kcal</li>
                  <li>Protein: 7.7g</li>
                  <li>Fat: 14g (mostly healthy unsaturated fats)</li>
                  <li>Carbohydrates: 6.1g</li>
                  <li>Fiber: 2.4g</li>
                  <li>
                    Vitamin E: 2.4mg (12% of the recommended daily intake)
                  </li>
                  <li>
                    Magnesium: 50.2mg (13% of the recommended daily intake)
                  </li>
                  <li>
                    Phosphorus: 107mg (11% of the recommended daily intake)
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
                <b>Grilled Panner and rice</b>
              </h5>
              <p>
                Grilled paneer and rice can be a satisfying and nutritious lunch
                option for weight loss, especially when prepared with healthy
                ingredients and portion control. Paneer, a type of Indian
                cheese, is a good source of protein, while rice provides complex
                carbohydrates.Grilled paneer and rice offer a good balance of
                protein, complex carbohydrates, and vegetables. The dish can
                help keep you satisfied and provide essential nutrients for your
                weight loss journey.
              </p>

              <h5>
                <b>Grilled Panner and rice Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1/Preheat your grill or grill pan over medium-high heat.
                  <br></br>
                  2.In a bowl, marinate the paneer with your preferred spices,
                  salt, and pepper. Allow it to sit for a few minutes to absorb
                  the flavors.
                  <br></br>
                  3.While the paneer marinates, prepare the vegetables by
                  chopping them into bite-sized pieces.
                  <br></br>
                  4.Thread the paneer and vegetables onto skewers, alternating
                  between them.
                  <br></br>
                  5.Brush the skewers with olive oil or lightly coat them with
                  cooking spray to prevent sticking.
                  <br></br>
                  6.Grill the paneer skewers for about 5-7 minutes, flipping
                  them occasionally, until they are lightly charred and the
                  paneer is heated through.
                  <br></br>
                  7.While the paneer grills, reheat the cooked rice.
                  <br></br>
                  8.Once the paneer skewers are done, remove them from the grill
                  and let them rest for a minute.
                  <br></br>
                  9.Serve the grilled paneer skewers over a bed of rice and
                  enjoy your flavorful and nutritious lunch.
                </p>

                <div className="dietImages">
                  <img src={grilledPanner} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition details </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Calories: Varies based on the portion sizes and cooking
                    methods.
                  </li>
                  <li>
                    Paneer: Approximately 100-150 calories per 100 grams, with
                    around 15-20 grams of protein.
                  </li>
                  <li>
                    Rice: Approximately 200-250 calories per cooked cup, with
                    about 40-50 grams of carbohydrates.
                  </li>
                  <li>
                    Vegetables: Provide essential vitamins, minerals, and
                    dietary fiber with minimal calories.
                  </li>
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
                <b>Cucumber and Carrot Slices</b>
              </h5>
              <p>
                Cucumber and carrot slices make for a refreshing and low-calorie
                evening snack that is rich in fiber, vitamins, and minerals.
                They can be enjoyed on their own or paired with a healthy dip
                for added flavor.Cucumber and carrot slices are not only low in
                calories but also provide a good amount of fiber, which can help
                keep you full and satisfied. They are also rich in vitamins and
                minerals, particularly vitamin A in carrots and vitamin K in
                both vegetables. When enjoying cucumber and carrot slices for
                weight loss, remember to practice portion control and avoid
                excessive dips or dressings that may add extra calories.
              </p>

              <h5>
                <b>Cucumber and Carrot Slices Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Wash the cucumber and carrots thoroughly under running
                  water.
                  <br></br>
                  2.Peel the cucumber if desired, or leave the skin on for added
                  fiber and nutrients.
                  <br></br>
                  3.Trim the ends of the cucumber and carrots.
                  <br></br>
                  4.Slice the cucumber and carrots into thin, round slices.
                  <br></br>
                  5.If desired, you can also cut the cucumber and carrots into
                  sticks for a different shape.
                  <br></br>
                  6.Place the slices or sticks in a bowl or plate.Refrigerate the slices until you're ready to enjoy them as
                  an evening snack.
                  
                </p>

                <div className="dietImages">
                  <img
                    src={cucumberCarrot}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details (100 grams of each vegetable)</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 56 kcal</li>
                  <li>Carbohydrates: 13.2g</li>
                  <li>Fiber: 3.3g</li>
                  <li>Protein: 1.5g</li>
                  <li>Fat: 0.5g</li>
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
                <b>Vegetable Pulao</b>
              </h5>
              <p>
                Vegetable pulao can be a nutritious and flavorful dinner option
                for weight loss if prepared with healthy ingredients and portion
                control. It typically consists of rice cooked with an assortment
                of vegetables and aromatic spices.Vegetable pulao is a balanced
                meal that combines complex carbohydrates from rice, fiber from
                vegetables, and a moderate amount of protein. It offers a good
                mix of nutrients necessary for weight loss and overall
                well-being.
              </p>

              <h5>
                <b>Vegetable Pulao Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Rinse the rice in water until the water runs clear. Soak the
                  rice in water for about 30 minutes, then drain.
                  <br></br>
                  2.Heat the oil or ghee in a pan or pressure cooker over medium
                  heat.
                  <br></br>
                  3.Add the cumin seeds, cloves, cinnamon stick, cardamom pods,
                  and bay leaf. Sauté for a minute until fragrant.
                  <br></br>
                  4.Add the sliced onion, minced garlic, and grated ginger.
                  Sauté until the onions turn golden brown.
                  <br></br>
                  5.Add the chopped vegetables to the pan and cook for a few
                  minutes until they are slightly tender.
                  <br></br>
                  6.Stir in the turmeric powder, coriander powder, and salt. Mix
                  well to coat the vegetables with the spices.
                  <br></br>
                  7.Add the soaked and drained rice to the pan and sauté for a
                  couple of minutes to coat the rice with the spices and
                  vegetables.
                  <br></br>
                  8.Pour in the appropriate amount of water (usually double the
                  amount of rice), cover the pan or pressure cooker, and cook
                  until the rice is fully cooked and fluffy. Cooking times may
                  vary depending on the rice variety and cooking method used.
                  <br></br>
                  9.Once the rice is cooked, remove from heat and let it rest
                  for a few minutes.
                  <br></br>
                  10.Fluff the rice gently with a fork and garnish with fresh
                  coriander leaves before serving.
                </p>

                <div className="dietImages">
                  <img
                    src={vegetablePulao}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of Vegetable Pulao</b>
              </h5>

              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Approximately 200-250 kca</li>
                  <li>Carbohydrates: 40-50g</li>
                  <li>Protein: 5-7g</li>
                  <li>
                    Fat: 3-5g (depending on the amount of oil or ghee used)
                  </li>
                  <li>Fiber: 3-5g</li>
                  <li>
                    Vitamins and minerals: Varies based on the vegetable
                    selection, but typically provides a range of vitamins,
                    including vitamin A, vitamin C, and minerals like potassium
                    and magnesium.
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
export default NutritionWeightLossPlanFriday;
