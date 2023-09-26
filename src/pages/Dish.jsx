import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

const Dish = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/dishes/${id}/`).then((res) => {
      setDish(res.data);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <h1>Dish</h1>
      {dish ? (
        <div>
          <img src={dish.image} alt={dish.name} />
          <p>Dish: {dish.name}</p>
          <p>Price: {dish.price}</p>
          <p>Description:{dish.description}</p>
          <p>Calories: {dish.calories}</p>
          <p>Cyrbonhydrates: {dish.carbohydrates}</p>
          <p>Proteins: {dish.proteins}</p>
          <p>Fats:{dish.fats}</p>
          <p>Recipe: {dish.recipe}</p>
          <p>Type: {dish.type}</p>

        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Dish;
