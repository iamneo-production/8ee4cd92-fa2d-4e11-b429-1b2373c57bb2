import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Modal from "react-bootstrap/Modal";
import "./NutritionRecommandation.css";
import { Link, useNavigate } from "react-router-dom";

const NutritionWeightGain = () => {
  const morningFoodData = [
    {
      food: "Wheat parathas and Paneer",
      calories: "200",
      id: "wheatParathas",
    },
    {
      food: "Oats and Milk",
      calories: "220",
      id: "oatMilk",
    },
    {
      food: "Stuffed parathas and Potatoes",
      calories: "250",
      id: "parathasPotatoes",
    },
    {
      food: "Rice with Mixed Vegetables",
      calories: "190",
      id: "riceVegetables",
    },
    {
      food: "Eggs (4)",
      calories: "230",
      id: "eggs",
    },
    {
      food: "Upma with Mixed Vegetables",
      calories: "300",
      id: "upmaVegetables",
    },
    {
      food: "Egg Dosa (3 pieces)",
      calories: "180",
      id: "dosa",
    },
  ];

  const morningMidFoodData = [
    {
      food: "Mixed nuts and Banana",
      calories: "200",
      id: "nutsBanana",
    },
    {
      food: "Mango Milkshake",
      calories: "220",
      id: "mangoMilkshake",
    },
    {
      food: "Cashew nuts (1 cup)",
      calories: "250",
      id: "cashewNuts",
    },
    {
      food: "Banana Smoothie",
      calories: "190",
      id: "bananaSmoothie",
    },
    {
      food: "Almonds (1 cup)",
      calories: "230",
      id: "almonds",
    },
    {
      food: "Mango Lassi with Yogurt",
      calories: "300",
      id: "mangoLassi",
    },
    {
      food: "Walnuts (1cup)",
      calories: "180",
      id: "walnuts",
    },
  ];

  const lunchFoodData = [
    {
      food: "Rice and dal (1cup)",
      calories: "200",
      id: "riceDal",
    },
    {
      food: "Chicken Briyani",
      calories: "220",
      id: "chickenBriyani",
    },
    {
      food: "Rice and Rajma (1cup)",
      calories: "250",
      id: "riceRajma",
    },
    {
      food: "Parathas and Potatoes",
      calories: "190",
      id: "parathasPotatoes",
    },
    {
      food: "Vegetable Pulao and Vegetable Salad",
      calories: "300",
      id: "vegetablePualo",
    },
    {
      food: "Parathas and ChickPeas",
      calories: "180",
      id: "parathasChickpeas",
    },
    {
      food: "Rice and Sambhar (1cup)",
      calories: "230",
      id: "riceSambhar",
    },
  ];

  const eveningFoodData = [
    {
      food: "Vegetable Samosa",
      calories: "200",
      id: "vegetableSamosa",
    },
    {
      food: "Peanut butter Sandwich",
      calories: "220",
      id: "peanutButterSandwich",
    },
    {
      food: "Vegetable Cutlets",
      calories: "250",
      id: "vegetableCutlets",
    },
    {
      food: "Besan",
      calories: "190",
      id: "besan",
    },
    {
      food: "Bread Pakoras ",
      calories: "300",
      id: "breadPakoras ",
    },
    {
      food: "Cheese and Vegetable Sandwich",
      calories: "180",
      id: "vegetableSandwich",
    },
    {
      food: "Vegetable Spring Rolls",
      calories: "230",
      id: "vegetableSpringRolls",
    },
  ];

  const dinnerFoodData = [
    {
      food: "Rotis and Chicken",
      calories: "200",
      id: "rotisChicken",
    },
    {
      food: "Rotis and Paneeer",
      calories: "220",
      id: "rotiPaneer",
    },
    {
      food: "Rotis and Mutton",
      calories: "250",
      id: "rotisMutton",
    },
    {
      food: "Rotis and Fish",
      calories: "190",
      id: "rotiFish",
    },
    {
      food: "Rotis and Palak Paneer",
      calories: "300",
      id: "rotisPalak",
    },
    {
      food: "Rotis and Chicken Tikka Masala",
      calories: "180",
      id: "rotisChhickenTikka",
    },
    {
      food: "Rotis and Paneer Butter Masala",
      calories: "230",
      id: "rotisPaneerButter",
    },
  ];

  const onSelectChangeFind = (array, id) => {
    return array.find((element) => {
      return element.id === id;
    });
  };

  const [popupShow, setPopupShow] = React.useState(false);
  const [finalCalorie, setFinalCalorie] = React.useState("0");
  const [water, setWater] = React.useState(0);

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
    console.log(e.target.id);
    const { name, value } = e.target;
    const res = onSelectChangeFind(morningFoodData, value);
    console.log(res);
    setDiet({ ...diet, morningMeal: res });
  };

  const onSelectChangeMidMorning = (e) => {
    console.log(e.target.id);
    const { name, value } = e.target;
    const res = onSelectChangeFind(morningMidFoodData, value);
    console.log(res);
    setDiet({ ...diet, morningSnack: res });
  };

  const onSelectChangeLunch = (e) => {
    console.log(e.target.id);
    const { name, value } = e.target;
    const res = onSelectChangeFind(lunchFoodData, value);
    console.log(res);
    setDiet({ ...diet, lunch: res });
  };

  const onSelectChangeEveSnack = (e) => {
    console.log(e.target.id);
    const { name, value } = e.target;
    const res = onSelectChangeFind(eveningFoodData, value);
    console.log(res);
    setDiet({ ...diet, eveningSnack: res });
  };

  const onSelectChangeDinner = (e) => {
    console.log(e.target.id);
    const { name, value } = e.target;
    const res = onSelectChangeFind(dinnerFoodData, value);
    console.log(res);
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

  const handleWaterMinus = () =>{
    setWater(prevState => prevState - 1);
    
  }
  const handleWaterPlus = () =>{
    setWater(prevState => prevState + 1);
    if(water == 9){
      alert("Congrats!!! Water level reached")
    }
  
  }

  const handleTodaysDiet = () => {
    const d = new Date();
    let day = d.getDay();

    if (day == 0) {
      navigate("/nutritionWeightGainPlanSunday");
    } else if (day == 1) {
      navigate("/nutritionWeightGainPlanMonday");
    } else if (day == 2) {
      navigate("/nutritionWeightGainPlanTuesday");
    } else if (day == 3) {
      navigate("/nutritionWeightGainPlanWednesday");
    } else if (day == 4) {
      navigate("/nutritionWeightGainPlanThursday");
    } else if (day == 5) {
      navigate("/nutritionWeightGainPlanFriday");
    } else if (day == 6) {
      navigate("/nutritionWeightGainPlanSaturday");
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
                  <option value="wheatParathas" id="Wheat parathas and Paneer">
                    Wheat parathas and Paneer
                  </option>
                  <option value="oatMilk" id="Oats and Milk">
                  Oats and Milk
                  </option>
                  <option
                    value="parathasPotatoes"
                    id="Stuffed parathas and Potatoes"
                  >
                   Stuffed parathas and Potatoes
                  </option>
                  <option value="riceVegetables" id="Rice with Mixed Vegetables">
                  Rice with Mixed Vegetables
                  </option>
                  <option value="eggs" id="Eggs (4)">
                  Eggs (4)
                  </option>
                  <option value="upmaVegetables" id="Upma with Mixed Vegetables">
                  Upma with Mixed Vegetables
                  </option>
                  <option
                    value="dosa"
                    id="Dosa (3 pieces)"
                  >
                    Egg Dosa (3 pieces)
                  </option>
                </select>
                
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
                  <option value="nutsBanana">Mixed nuts and Banana</option>
                  <option value="mangoMilkshake">Mango Milkshake</option>
                  <option value="cashewNuts">Cashew nuts (1 cup) </option>
                  <option value="bananaSmoothie">Banana Smoothie</option>
                  <option value="almonds">Almonds (1 cup)</option>
                  <option value="mangoLassi">Mango Lassi with Yogurt</option>
                  <option value="walnuts">Walnuts (1cup)</option>
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
                  <option value="riceDal">
                  Rice and dal (1cup)
                  </option>
                  <option value="chickenBriyani">Chicken Briyani</option>
                  <option value="riceRajma">Rice and Rajma (1cup)</option>
                  <option value="parathasPotatoes">Parathas and Potatoes</option>
                  <option value="vegetablePualo">Vegetable Pulao and Vegetable Salad</option>
                  <option value="parathasChickpeas">Parathas and ChickPeas</option>
                  <option value="riceSambhar">Rice and Sambhar (1cup)</option>
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
                  <option value="vegetableSamosa">Vegetable Samosa</option>
                  <option value="peanutButterSandwich">Peanut butter Sandwich</option>
                  <option value="vegetableCutlets">
                  Vegetable Cutlets
                  </option>
                  <option value="besan">Besan</option>
                  <option value="breadPakoras">
                  Bread Pakoras
                  </option>
                  <option value="vegetableSandwich">Cheese and Vegetable Sandwich</option>
                  <option value="vegetableSpringRolls">
                  Vegetable Spring Rolls
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
                  <option value="rotisChicken">Rotis and Chicken</option>
                  <option value="rotiPaneer">Rotis and Paneeer</option>
                  <option value="rotisMutton">Rotis and Mutton</option>
                  <option value="rotiFish">Rotis and Fish</option>
                  <option value="rotisPalak">
                  Rotis and Palak Paneer
                  </option>
                  <option value="rotisChhickenTikka">Rotis and Chicken Tikka Masala</option>
                  <option value="rotisPaneerButter">Rotis and Paneer Butter Masala</option>
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
                <div className="rowItems">
                  <div className="minusButton">
                    <button className="btn btn-primary" onClick={handleWaterMinus}>-</button>
                  </div>
                  <p>
                    <b>{water}/10 </b>
                  </p>
                  <div className="plusButton">
                    <button className="btn btn-primary" onClick={handleWaterPlus}>+</button>
                  </div>
                </div>
                

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

export default NutritionWeightGain;
