import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import chappatthi from "../../assets/img/Nutrition/chappatthi.jpg" ;
import sproutedMoong from "../../assets/img/Nutrition/sproutedMoong.jpg";
import grilledFish from "../../assets/img/Nutrition/grilledFish.jpg";
import roastedMakhana from "../../assets/img/Nutrition/roastedMakhana.jpg";
import vegetableKichadi from "../../assets/img/Nutrition/vegetableKhicdi.jpg"

import "../NutritionRecommandation.css";

const NutritionWeightLossPlanWednesday = () => {
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
                  <b>Roti/Chappathi</b>
                </h5>
                <p>
                  Roti or chappathi is a versatile and nutritious option that
                  can be included in a weight loss breakfast.To make a
                  nutritious and weight loss-friendly breakfast with roti, you
                  can pair it with Scrambled Eggs,Vegetable Omelette or Avocado
                  and Hummus Wrap.
                </p>

                <h5>
                  <b>Roti/Chappathi Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.In a mixing bowl, add whole wheat flour and salt (if
                    desired). Mix well.
                    <br></br>
                    2.Slowly add water and knead the flour to form a smooth
                    dough. The consistency should not be too soft or too hard.
                    <br></br>
                    3.Divide the dough into small portions and shape them into
                    balls.
                    <br></br>
                    4.Roll out each ball into a thin, round roti using a rolling
                    pin and a lightly floured surface.
                    <br></br>
                    5.Heat a tawa (flat griddle) or a non-stick pan over
                    medium-high heat.
                    <br></br>
                    6.Place the rolled roti on the hot tawa and cook until small
                    bubbles start to form on the surface.
                    <br></br>
                    7.Flip the roti and cook the other side until it puffs up
                    and has golden spots.
                    <br></br>
                    8.Remove the roti from the pan and repeat the process for
                    the remaining dough.
                  </p>

                  <div className="dietImages">
                    <img src={chappatthi} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition details (per roti, approximately))</b>
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

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Mid Morning Snack</h3>
              <br></br>
              <h5>
                <b>Sprouted Moong</b>
              </h5>
              <p>
                Sprouted moong (mung beans) is a nutritious and filling option
                for a mid-morning snack that supports weight loss goals.Sprouted
                moong is rich in fiber, protein, vitamins, and minerals, making
                it a healthy and satiating snack choice. You can enjoy the
                sprouted moong salad on its own or pair it with a side of yogurt
                or a small handful of nuts for added nutrients and flavor.
              </p>

              <h5>
                <b>Sprouted Moong Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Start by soaking the moong beans in water overnight or for
                  at least 6-8 hours.
                  <br></br>
                  2.After soaking, drain the water and rinse the moong beans.
                  <br></br>
                  3.Place the moong beans in a strainer or a clean cloth and
                  cover them. Keep them in a warm place for 12-24 hours, rinsing
                  them with water every 8 hours or so. This will allow the beans
                  to sprout.
                  <br></br>
                  4.Once the moong beans have sprouted, transfer them to a
                  mixing bowl.
                  <br></br>
                  5.Add the diced vegetables, chopped onion, and fresh coriander
                  leaves to the bowl.
                  <br></br>
                  6.Squeeze the lemon juice over the mixture and season with
                  salt, pepper, and any optional spices or chaat masala for
                  added flavor.
                  <br></br>
                  7.Mix all the ingredients well to combine.
                </p>

                <div className="dietImages">
                  <img src={sproutedMoong} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 100-120 calories</li>
                  <li>Carbohydrates: 20-25 grams</li>
                  <li>Protein: 5-7 grams</li>
                  <li>Fat: 0-1 gram</li>
                  <li>Fiber: 4-6 grams</li>
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
                <b>Grilled Fish</b>
              </h5>
              <p>
                Grilled fish can be a healthy and protein-rich option for a
                lunch that supports weight loss goals.The nutrition details can
                vary based on the type of fish and the cooking method used. It's
                important to choose lean fish options and control portion sizes
                for weight loss. You can enjoy the grilled fish on its own or
                pair it with a side salad or steamed vegetables for a
                well-rounded and nutritious snack.
              </p>

              <h5>
                <b>Grilled Fish Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Preheat the grill or grill pan to medium-high heat.
                  <br></br>
                  2.Pat dry the fish fillet using a paper towel to remove excess
                  moisture.
                  <br></br>
                  3.Brush the fish fillet with olive oil and season it with
                  salt, pepper, and any optional herbs or spices.
                  <br></br>
                  4.Squeeze the lemon juice over the fish fillet to enhance the
                  flavor.
                  <br></br>
                  5.Place the fish fillet on the preheated grill or grill pan,
                  skin-side down if applicable.
                  <br></br>
                  6.Cook the fish for about 3-4 minutes on each side, or until
                  it is cooked through and flakes easily with a fork.
                  <br></br>
                  7.Remove the fish from the grill and let it rest for a few
                  minutes before serving.
                  <br></br>
                </p>

                <div className="dietImages">
                  <img
                    src={grilledFish}
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
                  <li>Calories: 150-200 calories</li>
                  <li>Protein: 20-25 grams</li>
                  <li>Fat: 6-10 grams</li>
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
                <b>Roasted makhana</b>
              </h5>
              <p>
                Roasted makhana (foxnuts) is a healthy and crunchy option for a
                evening snack that supports weight loss goals.Roasted makhana is
                low in calories and fat, making it a great option for weight
                loss. It's also rich in fiber, which helps promote feelings of
                fullness and aids in digestion. You can enjoy roasted makhana as
                is or incorporate them into your snacks in various ways. They
                can be added to trail mixes, yogurt, or used as a topping for
                salads. Feel free to experiment with different spices and
                flavors to suit your taste preferences.
              </p>

              <h5>
                <b>Roasted makhana Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Heat a non-stick pan or a skillet over medium heat.
                  <br></br>
                  2.Add ghee or olive oil to the pan and let it melt.
                  <br></br>
                  3.Add the makhana to the pan and roast them on low to medium
                  heat.
                  <br></br>
                  4.Stir continuously to ensure even roasting and to prevent
                  burning.
                  <br></br>
                  5.Roast the makhana for about 8-10 minutes, or until they
                  become crisp and slightly golden in color.
                  <br></br>
                  6.Sprinkle salt and any optional spices or herbs over the
                  roasted makhana. Mix well to coat evenly.
                  <br></br>
                  7.Remove the roasted makhana from the pan and let them cool
                  completely before storing in an airtight container.
                </p>

                <div className="dietImages">
                  <img
                    src={roastedMakhana}
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
                  <li>Calories: 100-120 calories</li>
                  <li>Carbohydrates: 20-25 grams</li>
                  <li>Protein: 2-4 grams</li>
                  <li>Fat: 2-4 grams</li>
                  <li>Fiber: 2-4 grams</li>
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
                <b>Vegetable Khichdi</b>
              </h5>
              <p>
                Vegetable Khichdi is a wholesome and nutritious dish that can be
                enjoyed for dinner during weight loss. It is made with a
                combination of rice, lentils, and vegetables, providing a good
                balance of carbohydrates, protein, and fiber.Vegetable Khichdi
                is a filling and nourishing dish that can be enjoyed on its own
                or paired with a side of yogurt or raita for added flavor and
                nutrients. It can also be accompanied by a side salad or a small
                portion of roasted vegetables.
              </p>

              <h5>
                <b>Vegetable Khichdi Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Rinse the rice and moong dal under running water and soak
                  them together for 20-30 minutes. Drain and set aside.
                  <br></br>
                  2.Heat ghee or olive oil in a pressure cooker or a deep pot
                  over medium heat.
                  <br></br>
                  3.Add cumin seeds and let them splutter.
                  <br></br>
                  4.Add chopped onion, minced garlic, grated ginger, and green
                  chili. Sauté until the onions turn translucent.
                  <br></br>
                  5.Add the diced mixed vegetables and cook for a few minutes.
                  <br></br>
                  6.Add water to the pot, approximately 3 cups, and give it a
                  good stir.
                  <br></br>
                  7.If using a pressure cooker, close the lid and cook for 3-4
                  whistles. If using a pot, cover it with a lid and cook on
                  medium-low heat until the rice and dal are cooked and the
                  khichdi has a creamy consistency (about 20-25 minutes).
                  <br></br>
                  8.Once cooked, let the pressure release naturally or wait for
                  the khichdi to cool slightly before serving.
                </p>

                <div className="dietImages">
                  <img src={vegetableKichadi} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of Vegetable khichdi</b>
              </h5>

              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 250-300 calories</li>
                  <li>Carbohydrates: 45-50 grams</li>
                  <li>Protein: 10-12 grams</li>
                  <li>Fat: 5-6 grams</li>
                  <li>Fiber: 5-6 grams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightLossPlanWednesday;
