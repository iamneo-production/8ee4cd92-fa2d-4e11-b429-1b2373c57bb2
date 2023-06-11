import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import oatMeal from "../../assets/img/Nutrition/oatMeal.jpg";
import choppedCucumber from "../../assets/img/Nutrition/choppedCucumber.jpg";
import soyaChunks from "../../assets/img/Nutrition/soyaChunks.jpg";
import moongDal from "../../assets/img/Nutrition/moongDal.jpg";

import "../NutritionRecommandation.css";

const NutritionWeightLossPlanSaturday = () => {
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
                  <b>Oat Meal</b>
                </h5>
                <p>
                  Oatmeal can be a nutritious and satisfying choice for
                  breakfast, especially when you're looking to lose weight. It's
                  high in fiber, which helps keep you feeling fuller for longer,
                  and it provides essential nutrients.
                </p>

                <h5>
                  <b>Oat Meal Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Choose the right oats: Opt for whole oats or steel-cut
                    oats instead of instant oatmeal. Instant oatmeal often
                    contains added sugars and has a higher glycemic index. Whole
                    oats and steel-cut oats are less processed and retain more
                    nutrients and fiber.
                    <br></br>
                    2.Portion control: Pay attention to portion sizes to manage
                    your calorie intake. A typical serving size is around 1/2
                    cup of dry oats, which will yield about 1 cup of cooked
                    oatmeal.
                    <br></br>
                    3.Cooking method: Prepare oatmeal with water or unsweetened
                    almond milk instead of whole milk or cream. This reduces the
                    calorie content while still maintaining a creamy
                    consistency. You can also use a combination of water and
                    milk for added flavor.
                    <br></br>
                    4.Toppings and mix-ins: Add nutritious toppings and mix-ins
                    to enhance the flavor and increase the nutritional value of
                    your oatmeal
                  </p>

                  <div className="dietImages">
                    <img src={oatMeal} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition details (/2 cup dry oats cooked in water))</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: 150-200 calories</li>
                    <li>Protein: 5-7 grams</li>
                    <li>Fiber: 4-5 grams</li>
                    <li>Carbohydrates: 27-32 grams</li>
                    <li>Fat: 2-3 grams</li>
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
                <b>Chopped Cucumber</b>
              </h5>
              <p>
                Chopped cucumber can be a refreshing and low-calorie snack
                option, perfect for weight loss.Cucumbers are primarily composed
                of water, making them low in calories while providing hydration
                and some essential nutrients. They are also rich in antioxidants
                and contain small amounts of vitamins and minerals.
              </p>

              <h5>
                <b>Chopped Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Choose fresh cucumbers: Select firm and crisp cucumbers that
                  are free from bruises or blemishes. Opt for organic cucumbers
                  when possible to reduce exposure to pesticides.
                  <br></br>
                  2.Wash and peel (optional): Wash the cucumber thoroughly under
                  running water. You can choose to peel the cucumber or leave
                  the skin intact based on personal preference. Keep in mind
                  that the skin contains additional fiber and nutrients.
                  <br></br>
                  3.Slice or chop: Slice the cucumber into rounds or chop it
                  into bite-sized pieces, depending on your preference. Chopped
                  cucumber is often easier to snack on.
                  <br></br>
                  4.Pair with a dip (optional): If desired, you can pair your
                  chopped cucumber with a low-calorie dip for added flavor.
                  Options include Greek yogurt-based dips, hummus, or tzatziki
                  sauce. Be mindful of portion sizes and choose dips with
                  minimal added sugars or unhealthy fats.
                </p>

                <div className="dietImages">
                  <img
                    src={choppedCucumber}
                    alt="logo"
                    width={250}
                    height={200}
                  />
                </div>
              </div>

              <h5>
                <b>Nutrition Details (1 medium-sized cucumber)</b>
              </h5>
              <div className="dietPreparation">
                <ul style={{ listStyleType: "disc" }}>
                  <li>Calories: Around 30 calories</li>
                  <li>Carbohydrates: Approximately 6 grams</li>
                  <li>Fiber: Roughly 2 grams</li>
                  <li>Protein: About 1 gram</li>
                  <li>Fat: Less than 1 gram</li>
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
                <b>Soya Chunks and rice</b>
              </h5>
              <p>
                Soya chunks and rice can be a nutritious and satisfying option
                for a weight loss lunch.Soya chunks are a good source of
                plant-based protein and are low in saturated fat. They also
                contain essential amino acids, fiber, and various vitamins and
                minerals. Rice provides energy from carbohydrates and can be a
                part of a balanced meal when portioned appropriately.
              </p>

              <h5>
                <b>Soya Chunks and rice Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Soak the soya chunks: Start by soaking the soya chunks in
                  hot water for about 15-20 minutes or until they become soft
                  and tender. Drain and squeeze out excess water.
                  <br></br>
                  2.Cook the rice: Prepare the rice according to your preferred
                  method. You can use brown rice for added fiber or opt for
                  white rice if you prefer.
                  <br></br>
                  3.Prepare the soya chunk curry: In a separate pan, heat a
                  small amount of oil and sauté chopped onions, garlic, and
                  ginger until they turn golden brown. Add spices like turmeric,
                  cumin, coriander, and chili powder for flavor. Then, add the
                  soaked soya chunks and cook them for a few minutes. You can
                  also add diced tomatoes, bell peppers, or any other vegetables
                  of your choice. Cook until the flavors blend well.
                  <br></br>
                  4.Combine rice and soya chunk curry: Once the rice and soya
                  chunk curry are ready, mix them together in a large bowl or
                  plate. Ensure that the soya chunks and rice are well combined.
                  <br></br>
                  5.Add vegetables (optional): For added nutrition, you can also
                  include steamed or stir-fried vegetables, such as carrots,
                  peas, broccoli, or spinach, to the soya chunk and rice
                  mixture.
                </p>

                <div className="dietImages">
                  <img
                    src={soyaChunks}
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
                  <li>Carbohydrates: Around 40-50 grams</li>
                  <li>Protein: Roughly 15-20 grams</li>
                  <li>Fat: 5-10 grams</li>
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
                <b>Moong Dal</b>
              </h5>
              <p>
                Moong dal, also known as mung beans or green gram lentils, is a
                nutritious option for an evening snack, especially when you're
                aiming for weight loss.Moong dal is a good source of plant-based
                protein, fiber, and various vitamins and minerals. It is low in
                fat and contains complex carbohydrates that provide sustained
                energy. Moong dal also has a relatively low glycemic index,
                which means it has a slower impact on blood sugar levels.
              </p>

              <h5>
                <b>Moong Dal Preparation</b>
              </h5>

              <div className="dietPreparation">
                <p>
                  1.Rinse and soak moong dal: Start by rinsing the moong dal
                  under running water until the water runs clear. Then, soak the
                  dal in water for about 2-3 hours or overnight. This helps
                  soften the dal and reduce the cooking time.
                  <br></br>
                  2.Cook the moong dal: Drain the soaked moong dal and transfer
                  it to a saucepan. Add fresh water and bring it to a boil.
                  Reduce the heat to a simmer and cook until the dal is soft and
                  tender. This usually takes around 20-30 minutes. You can add a
                  pinch of salt while cooking for flavor.
                  <br></br>
                  3.Seasoning (optional): Once the moong dal is cooked, you can
                  add seasoning for added taste. Heat a small amount of oil in a
                  pan, add mustard seeds, cumin seeds, curry leaves, and chopped
                  green chilies. Sauté until the spices release their aroma.
                  Pour this seasoning over the cooked moong dal and mix well.
                  <br></br>
                  4.Serving options: You can enjoy the cooked moong dal as is or
                  enhance the flavor by adding a squeeze of lemon juice, chopped
                  cilantro, or grated coconut on top. You can also pair it with
                  a side of fresh cucumber slices or carrot sticks for added
                  crunch and nutrition.
                  
                </p>

                <div className="dietImages">
                  <img
                    src={moongDal}
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
                  <li>Calories: Approximately 100-150 calories</li>
                  <li>Carbohydrates: Around 15-20 grams</li>
                  <li>Protein: Roughly 7-10 grams</li>
                  <li>Fat: 1-2 grams</li>
                  <li>Fiber: Approximately 5-7 grams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Morning Breakfast</h3>
                <br></br>
                <h5>
                  <b>Oat Meal</b>
                </h5>
                <p>
                  Oatmeal can be a nutritious and satisfying choice for
                  breakfast, especially when you're looking to lose weight. It's
                  high in fiber, which helps keep you feeling fuller for longer,
                  and it provides essential nutrients.
                </p>

                <h5>
                  <b>Oat Meal Preparation</b>
                </h5>

                <div className="dietPreparation">
                  <p>
                    1.Choose the right oats: Opt for whole oats or steel-cut
                    oats instead of instant oatmeal. Instant oatmeal often
                    contains added sugars and has a higher glycemic index. Whole
                    oats and steel-cut oats are less processed and retain more
                    nutrients and fiber.
                    <br></br>
                    2.Portion control: Pay attention to portion sizes to manage
                    your calorie intake. A typical serving size is around 1/2
                    cup of dry oats, which will yield about 1 cup of cooked
                    oatmeal.
                    <br></br>
                    3.Cooking method: Prepare oatmeal with water or unsweetened
                    almond milk instead of whole milk or cream. This reduces the
                    calorie content while still maintaining a creamy
                    consistency. You can also use a combination of water and
                    milk for added flavor.
                    <br></br>
                    4.Toppings and mix-ins: Add nutritious toppings and mix-ins
                    to enhance the flavor and increase the nutritional value of
                    your oatmeal
                  </p>

                  <div className="dietImages">
                    <img src={oatMeal} alt="logo" width={250} height={200} />
                  </div>
                </div>

                <h5>
                  <b>Nutrition details (/2 cup dry oats cooked in water))</b>
                </h5>
                <div className="dietPreparation">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Calories: 150-200 calories</li>
                    <li>Protein: 5-7 grams</li>
                    <li>Fiber: 4-5 grams</li>
                    <li>Carbohydrates: 27-32 grams</li>
                    <li>Fat: 2-3 grams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default NutritionWeightLossPlanSaturday;
