import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import "./NutritionRecommandation.css";
import { Link, useNavigate } from "react-router-dom";

const NutritionWeightLoss = () => {
  const morningFoodData = [
    {
      food: "Boiled Egg (1 cup)",
      calories: "200",
      id: "boiledEgg",
    },
    {
      food: "Brown Bread (4 slices)",
      calories: "220",
      id: "brownBread",
    },
    {
      food: "Roti/Chappathi (3 pieces)",
      calories: "250",
      id: "roti/chappathi",
    },
    {
      food: "Idli (3 pieces)",
      calories: "190",
      id: "idli",
    },
    {
      food: "Ripe Bananas (3 pieces)",
      calories: "230",
      id: "ripeBanana",
    },
    {
      food: "Oat Meal (1 cup)",
      calories: "300",
      id: "oatMeal",
    },
    {
      food: "Upma with Vegetables (1 cup)",
      calories: "180",
      id: "upmaVegetables",
    },
  ];

  const morningMidFoodData = [
    {
      food: "Roasted Chickpeas",
      calories: "200",
      id: "rostedChickpeas",
    },
    {
      food: "Fruit Salad (1 cup)",
      calories: "220",
      id: "fruitSalad",
    },
    {
      food: "Sprouted Moong (1 cup)",
      calories: "250",
      id: "sproutedMoong",
    },
    {
      food: "Water Melon (1cup)",
      calories: "190",
      id: "watermelon",
    },
    {
      food: "Roasted Peanuts",
      calories: "230",
      id: "peanunts",
    },
    {
      food: "Chopped cucumber (1cup)",
      calories: "300",
      id: "cucumber",
    },
    {
      food: "Nuts And Seeds (1cup)",
      calories: "180",
      id: "nuts",
    },
  ];

  const lunchFoodData = [
    {
      food: "Spinach Daal and brown rice",
      calories: "200",
      id: "spinachDaal",
    },
    {
      food: "Grilled Chicken",
      calories: "220",
      id: "grilledChicken",
    },
    {
      food: "Grilled Fish",
      calories: "250",
      id: "grilledFish",
    },
    {
      food: "Vegetable Salad",
      calories: "190",
      id: "vegetableSalad",
    },
    {
      food: "Grilled Panner and rice",
      calories: "300",
      id: "grilledPanner",
    },
    {
      food: "Soya Chunks and rice",
      calories: "180",
      id: "soyaChunks",
    },
    {
      food: "Vegtable Briyani",
      calories: "230",
      id: "vegtableBriyani",
    },
  ];

  const eveningFoodData = [
    {
      food: "Fruit Salad",
      calories: "200",
      id: "fruitSalad",
    },
    {
      food: "Vegetable soup (1cup)",
      calories: "220",
      id: "vegetableSoup",
    },
    {
      food: "Roasted makhana (foxnuts)",
      calories: "250",
      id: "roastedMakhana",
    },
    {
      food: "Greek yogurt (1 cup)",
      calories: "190",
      id: "greenYogurt",
    },
    {
      food: "Cucumber and Carrot Slices",
      calories: "300",
      id: "cucumberCarrot",
    },
    {
      food: "Moong Dal (1 small cup)",
      calories: "180",
      id: "moongDal",
    },
    {
      food: "Sprouted Green Gram (1 small cup)",
      calories: "230",
      id: "greenGram",
    },
  ];

  const dinnerFoodData = [
    {
      food: "Vegetable Fry (1 cup)",
      calories: "200",
      id: "vegetableFry",
    },
    {
      food: "Palak and Roti",
      calories: "220",
      id: "palakRoti",
    },
    {
      food: "Vegetable Khichdi",
      calories: "250",
      id: "vegetableKhichdi",
    },
    {
      food: "Egg Curry",
      calories: "190",
      id: "eggCurry",
    },
    {
      food: "Vegetable Pulao (1 cup)",
      calories: "300",
      id: "vegetablePulao",
    },
    {
      food: "Oat Meal (1 cup)",
      calories: "180",
      id: "oatMeal",
    },
    {
      food: "Egg Dosa (3 pieces)",
      calories: "230",
      id: "eggDosa",
    },
  ];

  const onSelectChangeFind = (array, id) => {
    return array.find((element) => {
      return element.id === id;
    });
  };

  const [popupShow, setPopupShow] = React.useState(false);
  const [finalCalorie, setFinalCalorie] = React.useState("0");

  const [diet, setDiet] = useState({
    morningMeal: null,
    morningSnack: null,
    lunch: null,
    eveningSnack: null,
    dinner: null,
  });

  const user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  let calories = 0;
  if (user.gender == "male") {
    calories = 66 + 6.2 * user.weight + 12.7 * user.height - 6.76 * user.age;
    calories = Math.round(calories);
  } else if (user.gender == "female") {
    calories = 655.1 + 4.35 * user.weight + 4.7 * user.height - 4.7 * user.age;
    calories = Math.round(calories);
  }

  const dietProgressPopup = () => {
    setPopupShow(!popupShow);
  };

  const onSelectChangeMorning = (e) => {
    const { name, value } = e.target;
    const res = onSelectChangeFind(morningFoodData, value);

    setDiet({ ...diet, morningMeal: res });
  };

  const onSelectChangeMidMorning = (e) => {
    const { name, value } = e.target;
    const res = onSelectChangeFind(morningMidFoodData, value);

    setDiet({ ...diet, morningSnack: res });
  };

  const onSelectChangeLunch = (e) => {
    const { name, value } = e.target;
    const res = onSelectChangeFind(lunchFoodData, value);

    setDiet({ ...diet, lunch: res });
  };

  const onSelectChangeEveSnack = (e) => {
    const { name, value } = e.target;
    const res = onSelectChangeFind(eveningFoodData, value);

    setDiet({ ...diet, eveningSnack: res });
  };

  const onSelectChangeDinner = (e) => {
    const { name, value } = e.target;
    const res = onSelectChangeFind(dinnerFoodData, value);

    setDiet({ ...diet, dinner: res });
  };

  let final = 0;
  const handleCalculateCalorie = (e) => {
    e.preventDefault();
    final +=
      Number(diet.morningMeal.calories) +
      Number(diet.morningSnack.calories) +
      Number(diet.lunch.calories) +
      Number(diet.eveningSnack.calories) +
      Number(diet.dinner.calories);
    setFinalCalorie(final);
    dietProgressPopup();
  };

  const handleTodaysDiet = () => {
    const d = new Date();
    let day = d.getDay();

    if (day == 0) {
      navigate("/nutritionWeightLossPlanSunday");
    } else if (day == 1) {
      navigate("/nutritionWeightLossPlanMonday");
    } else if (day == 2) {
      navigate("/nutritionWeightLossPlanTuesday");
    } else if (day == 3) {
      navigate("/nutritionWeightLossPlanWednesday");
    } else if (day == 4) {
      navigate("/nutritionWeightLossPlanThursday");
    } else if (day == 5) {
      navigate("/nutritionWeightLossPlanFriday");
    } else if (day == 6) {
      navigate("/nutritionWeightLossPlanSaturday");
    }
  };

  return (
    <div>
      <Modal
        size="md"
        aria-labelledby="example-modal-sizes-title-lg"
        show={popupShow}
        onHide={dietProgressPopup}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Today's Calorie Calculation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={handleCalculateCalorie}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  Morning Meal
                </label>
                <select
                  className="form-control"
                  id="morningmeal"
                  name="morningMeal"
                  onChange={onSelectChangeMorning}
                >
                  <option value="" id="">
                    Select your Morning meal
                  </option>
                  <option value="boiledEgg" id="Boiled Egg (1 cup)">
                    Boiled Egg (1 cup)
                  </option>
                  <option value="brownBread" id="Brown Bread (4 slices)">
                    Brown Bread (4 slices)
                  </option>
                  <option
                    value="roti/chappathii"
                    id="Roti/Chappathi (3 pieces)"
                  >
                    Roti/Chappathi (3 pieces)
                  </option>
                  <option value="idli" id="Idli (3 pieces)">
                    Idli (3 pieces)
                  </option>
                  <option value="ripeBanana" id="Ripe Bananas (3 pieces)">
                    Ripe Bananas (3 pieces)
                  </option>
                  <option value="oatMeal" id="Oat Meal (1 cup)">
                    Oat Meal (1 cup)
                  </option>
                  <option
                    value="upmaVegetables"
                    id="Upma with Vegetables (1 cup)"
                  >
                    Upma with Vegetables (1 cup)
                  </option>
                  <option value="Others">Others</option>
                </select>
                {/* <div>
                  <input placeholder="Enter meal"></input>
                  <input placeholder="Enter meal"></input>
                  <button>OK</button>
                </div> */}
              </div>

              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  Mid Morning Snacks
                </label>
                <select
                  className="form-control"
                  id="morningsnack"
                  name="morningSnack"
                  onChange={onSelectChangeMidMorning}
                >
                  <option value="">Select your Snack</option>
                  <option value="rostedChickpeas">Roasted Chickpeas</option>
                  <option value="fruitSalad">Fruit Salad (1 cup)</option>
                  <option value="sproutedMoong">Sprouted Moong (1 cup)</option>
                  <option value="watermelon">Water Melon (1cup)</option>
                  <option value="peanunts">Roasted Peanuts</option>
                  <option value="cucumber">Chopped cucumber (1cup)</option>
                  <option value="nuts">Nuts And Seeds (1cup)</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="notes" className="form-label">
                  Lunch
                </label>

                <select
                  className="form-control"
                  id="lunch"
                  name="lunch"
                  onChange={onSelectChangeLunch}
                >
                  <option value="">Select your Lunch</option>
                  <option value="spinachDaal">
                    Spinach Daal and brown rice
                  </option>
                  <option value="grilledChicken">Grilled Chicken</option>
                  <option value="grilledFish">Grilled Fish</option>
                  <option value="vegetableSalad">Vegetable Salad</option>
                  <option value="grilledPanner">Grilled Panner and rice</option>
                  <option value="soyaChunks">Soya Chunks and rice</option>
                  <option value="vegtableBriyani">Vegtable Briyani</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="notes" className="form-label">
                  Evening Snacks
                </label>

                <select
                  className="form-control"
                  id="eveningSnack"
                  name="eveningSnack"
                  onChange={onSelectChangeEveSnack}
                >
                  <option value="">Select your Snack</option>
                  <option value="fruitSalad">Fruit Salad</option>
                  <option value="vegetableSoup">Vegetable soup (1cup)</option>
                  <option value="roastedMakhana">
                    Roasted makhana (foxnuts)
                  </option>
                  <option value="greenYogurt">Greek yogurt (1 cup)</option>
                  <option value="cucumberCarrot">
                    Cucumber and Carrot Slices
                  </option>
                  <option value="moongDal">Moong Dal (1 small cup)</option>
                  <option value="greenGram">
                    Sprouted Green Gram (1 small cup)
                  </option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="notes" className="form-label">
                  Dinner
                </label>

                <select
                  className="form-control"
                  id="dinner"
                  name="dinner"
                  onChange={onSelectChangeDinner}
                >
                  <option value="">Select your Dinner</option>
                  <option value="vegetableFry">Vegetable Fry (1 cup)</option>
                  <option value="palakRoti">Palak and Roti</option>
                  <option value="vegetableKhichdi">Vegetable Khichdi</option>
                  <option value="eggCurry">Egg Curry</option>
                  <option value="vegetablePulao">
                    Vegetable Pulao (1 cup)
                  </option>
                  <option value="oatMeal">Oat Meal (1 cup)</option>
                  <option value="eggDosa">Egg Dosa (3 pieces)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Calculate Calorie
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <header style={{ marginTop: "10px" }}>
        <Navbar />
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Calories Calculation</h5>
                <br></br>
                <p>
                  <b>
                    {finalCalorie}/{calories} taken
                  </b>
                </p>
                <div className="addButton">
                  <button
                    className="btn btn-primary"
                    onClick={dietProgressPopup}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Water Calculation</h5>
                <br></br>

                <p>
                  <b>0/9 </b>
                </p>
                <p>Glasses of water per day</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Read data</h5>
                <br></br>
                <p>
                  <b>0/{calories} taken</b>
                </p>
                <div className="addButton">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Calories Required</h5>
                <p>Height : {user.height}</p>
                <p>Weight : {user.weight}</p>
                <p>
                  According to your body weight and height you requires{" "}
                  <b>{calories} calories</b> per day !!!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Diet Plan for Weight Loss</h5>
                <button className="btn btn-primary" onClick={handleTodaysDiet}>
                  Click for today's Diet Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionWeightLoss;
