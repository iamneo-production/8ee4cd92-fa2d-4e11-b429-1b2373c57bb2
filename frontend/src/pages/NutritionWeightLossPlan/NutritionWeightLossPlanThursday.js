import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import idli from "../../assets/img/Nutrition/idli.jpg";
import watermelon from "../../assets/img/Nutrition/watermelon.jpg";
import vegetableSalad from "../../assets/img/Nutrition/vegetableSalad.jpg";
import greenYogurt from "../../assets/img/Nutrition/greenYogrut.jpg";
import eggCurry from "../../assets/img/Nutrition/eggCurry.jpg";

import "../NutritionRecommandation.css";

const NutritionWeightLossPlanThursday = () => {
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
                  <b>Idli</b>
                </h5>
                <p>
                  Idli is a popular South Indian dish that can be a healthy
                  option for breakfast, especially for weight loss. It is made
                  from fermented rice and lentil batter, which is steamed to
                  create soft and fluffy cakes. Idli is low in calories and fat,
                  making it a nutritious and filling breakfast choice. Idli is a
                  good source of complex carbohydrates and is low in fat. It is
                  also naturally gluten-free and easily digestible due to the
                  fermentation process. The fermentation of the batter enhances
                  its nutritional profile by increasing the availability of
                  certain nutrients and improving gut health.
                </p>

                <h5>
                  <b>Idli Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Wash the rice, urad dal, and fenugreek seeds (if using)
                    separately and soak them in water for 4-6 hours.
                    <br></br>
                    2.After soaking, drain the water from the rice and dal.
                    <br></br>
                    3.Grind the rice and dal separately to a smooth consistency,
                    adding water as needed..
                    <br></br>
                    4.Mix the ground rice and dal together in a large bowl.
                    <br></br>
                    5.Add salt to taste and mix well.
                    <br></br>
                    6.Cover the bowl and allow the batter to ferment in a warm
                    place for 8-10 hours or overnight.
                    <br></br>
                    7.After fermentation, the batter will rise and become
                    fluffy.
                    <br></br>
                    8.Steam the idlis in a steamer or idli cooker for about
                    10-15 minutes or until a toothpick inserted comes out clean.
                    <br></br>
                    9.Once done, remove the idlis from the molds using a
                    spoon.Serve the idlis hot with sambar (a lentil-based
                    vegetable stew) and coconut chutney.
                  </p>

                  <div className="dietImages">
                    <img src={idli} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition details (per idli, approximately))</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: 35-40 kcal</li>
                    <li>Carbohydrates: 7-8g</li>
                    <li>Protein: 1-2g</li>
                    <li>Fat: 0-1g</li>
                    <li>Fiber: 1g</li>
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
                <b>Water Melon</b>
              </h5>
              <p>
                Watermelon is a delicious and hydrating fruit that can be a
                refreshing mid-morning snack, especially for weight loss. It is
                low in calories, high in water content, and offers several
                essential nutrients.Watermelon is primarily composed of water
                (about 90%), making it a hydrating snack option. It is also a
                good source of vitamin C, which acts as an antioxidant,
                supporting immune function. Additionally, watermelon contains a
                compound called citrulline, which has been associated with
                potential benefits for cardiovascular health.
              </p>

              <h5>
                <b>Watermelon Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Choose a ripe watermelon: Look for a watermelon that feels
                  heavy for its size, has a uniform shape, and a dull rind. Tap
                  it, and it should produce a deep, hollow sound
                  <br></br>
                  2.Wash the watermelon: Rinse the watermelon under cool running
                  water to remove any dirt or bacteria present on the rind.
                  <br></br>
                  3.Slice the watermelon: Use a sharp knife to cut off both ends
                  of the watermelon. Stand it upright on one of the flat ends
                  and slice downward to remove the rind. Once the rind is
                  removed, cut the watermelon into desired shapes like cubes or
                  wedges.
                </p>

                <div className="dietImages">
                  <img
                    src={watermelon}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details (100g of watermelon)</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 30 kcal</li>
                  <li>Carbohydrates: 7.6g</li>
                  <li>Protein: 0.6g</li>
                  <li>Fiber: 0.4g</li>
                  <li>
                    Vitamin C: 8.1mg (14% of the recommended daily intake)
                  </li>
                  <li>
                    Vitamin A: 569 IU (11% of the recommended daily intake)
                  </li>
                  <li>Potassium: 112mg (3% of the recommended daily intake)</li>
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
                <b>Vegetable Salad and Rice</b>
              </h5>
              <p>
                A vegetable salad with rice can be a nutritious and filling
                option for a weight loss lunch. It provides a combination of
                essential nutrients, fiber, and complex carbohydrates to keep
                you satisfied.To make your vegetable salad with rice more
                nutritious, consider including a variety of colorful vegetables
                to ensure a range of vitamins, minerals, and antioxidants.
                Opting for brown rice or other whole grain varieties will
                provide more fiber and nutrients compared to refined white rice.
                While the salad itself can be low in calories and offer several
                health benefits, it's important to be mindful of the portion
                sizes and dressing choices
              </p>

              <h5>
                <b>Vegetable Salad and Rice Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Cook the rice according to the package instructions. Allow
                  it to cool.
                  <br></br>
                  2.Wash and prepare the vegetables by chopping them into
                  bite-sized pieces.
                  <br></br>
                  3.In a large bowl, combine the cooked rice, chopped
                  vegetables, and fresh herbs.
                  <br></br>
                  4.Drizzle lemon juice or vinegar over the salad for dressing.
                  <br></br>
                  5.Season with salt and pepper to taste.
                  <br></br>
                  6.Toss everything together until well combined.
                  <br></br>
                  7.Remove the fish from the grill and let it rest for a few
                  minutes before serving.Your vegetable salad with rice is now
                  ready to be enjoyed as a healthy and satisfying lunch option.
                  <br></br>
                </p>

                <div className="dietImages">
                  <img src={vegetableSalad} alt="logo" width={250} height={200} />
                </div>
              </div>

              <h5>
                <b>Nutrition details </b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Calories: Varies based on ingredients and portion sizes.
                  </li>
                  <li>
                    Carbohydrates: Varies based on the type and amount of rice
                    used.
                  </li>
                  <li>
                    Protein: Varies based on the protein source and quantity.
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
                <b>Greek yogurt</b>
              </h5>
              <p>
                Greek yogurt is a nutritious and protein-rich snack that can be
                a great option for weight loss. It is low in calories and
                carbohydrates while providing a good amount of protein and
                essential nutrients.Greek yogurt is also a good source of
                calcium, vitamin B12, and probiotics, which can support
                digestive health. When selecting Greek yogurt, be mindful of
                added sugars or flavors, as they can increase the calorie
                content. Opt for plain, non-fat Greek yogurt and add natural
                flavorings like fresh fruits or a small amount of honey if
                desired.
              </p>

              <h5>
                <b>Greek yogurt Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Place a strainer or cheesecloth over a deep bowl.
                  <br></br>
                  2.Pour the yogurt into the strainer or cheesecloth.
                  <br></br>
                  3.Cover the bowl and place it in the refrigerator.
                  <br></br>
                  4.Let the yogurt strain for about 4-8 hours or overnight.Once strained, the thicker consistency Greek yogurt will be
                  ready to use.
                  <br></br>
                  
                </p>

                <div className="dietImages">
                  <img
                    src={greenYogurt}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details (100g of Green yogurt)</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 59 kcal</li>
                  <li>Protein: 10g</li>
                  <li>Carbohydrates: 3.6g</li>
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
                <b>Egg Curry</b>
              </h5>
              <p>
                Egg curry can be a delicious and nutritious dinner option for
                weight loss, especially if prepared with healthy ingredients and
                portion control. Eggs are a good source of protein and various
                essential nutrients.Egg curry is a good source of protein, which
                can help keep you full and support muscle maintenance during
                weight loss. The exact nutritional values may vary based on the
                specific recipe and cooking methods. To make the egg curry more
                weight-loss friendly, you can consider using less oil, opting
                for healthier cooking oils like olive oil, and including plenty
                of vegetables in the curry.
              </p>

              <h5>
                <b>Egg Curry Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Heat the oil in a pan or skillet over medium heat. Add the
                  cumin seeds and let them splutter.
                  <br></br>
                  2.Add the chopped onions and sauté until they turn golden
                  brown.
                  <br></br>
                  3.Add the minced garlic and grated ginger. Sauté for a minute
                  until fragrant.
                  <br></br>
                  4.Add the tomato puree or chopped tomatoes and cook until the
                  oil separates and the tomatoes are well cooked.
                  <br></br>
                  5.Add the turmeric powder, coriander powder, red chili powder,
                  and salt. Mix well and cook for a couple of minutes.
                  <br></br>
                  6.Gently add the hard-boiled eggs to the curry, ensuring they
                  are coated with the sauce.
                  <br></br>
                  7.Reduce the heat, cover the pan, and let the curry simmer for
                  about 10 minutes to allow the flavors to meld together.
                  <br></br>
                  8.If desired, sprinkle garam masala over the curry for an
                  extra layer of flavor. Garnish with fresh coriander leaves.
                </p>

                <div className="dietImages">
                  <img
                    src={eggCurry}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details of Egg Curry</b>
              </h5>

              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: 150-200 kcal</li>
                  <li>Protein: 10-15g</li>
                  <li>Fat: 10-15g </li>
                  <li>Carbohydrates: 5-10g</li>
                  <li>Fiber: 2-4g</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NutritionWeightLossPlanThursday;
