import React, { useState } from "react";
import { useEffect } from "react";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [country, setCountry] = useState("british");
  const [inputdata, setInputdata] = useState("");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`,
      );
      const data = await api.json();

      setMealData(data.meals || []);
    };
    fetchDataFromApi();
  }, [country]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputdata}`,
    );
    const data = await api.json();
    console.log("Search Data = ", data.meals);
    setMealData(data.meals || []);

    setInputdata("");
  };

  return (
    <>
      <div className="bg-black">
        <div className="w-full flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 pt-5 px-4">
          <button
            type="button"
            onClick={() => setCountry("United Kingdom ")}
            className="bg-transparent font-bold text-white hover:bg-blue-300 hover:text-white transition duration-300 border-blue-300 border-3 solid rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer"
          >
            United Kingdom
          </button>
          <button
            type="button"
            onClick={() => setCountry("chinese")}
            className="bg-transparent font-bold text-white hover:bg-red-300 hover:text-white transition duration-300 border-red-300 border-3 solid rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer"
          >
            Chinese
          </button>
          <button
            type="button"
            onClick={() => setCountry("austria")}
            className="bg-transparent font-bold text-white hover:bg-green-300 hover:text-white transition duration-300 border-green-300 border-3 solid rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer"
          >
            Austrian
          </button>
          <button
            type="button"
            onClick={() => setCountry("thai")}
            className="bg-transparent font-bold text-white hover:bg-blue-300 hover:text-white transition duration-300 border-blue-300 border-3 solid rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer"
          >
            Thai
          </button>
          <button
            type="button"
            onClick={() => setCountry("japanese")}
            className="bg-transparent font-bold text-white hover:bg-yellow-300 hover:text-white transition duration-300 border-yellow-300 border-3 solid rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer"
          >
            Japanese
          </button>
          <button
            type="button"
            onClick={() => setCountry("canadian")}
            className="bg-transparent font-bold text-white hover:bg-blue-300 hover:text-white transition duration-300 border-blue-300 border-3 solid rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer"
          >
            Canadian
          </button>
          <button
            type="button"
            onClick={() => setCountry("Russian")}
            className="bg-transparent font-bold text-white hover:bg-red-400 hover:text-white transition duration-300 border-red-400 border-3 solid rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer"
          >
            Russian
          </button>
        </div>

        <form
          className=" w-full flex justify-center my-5"
          onSubmit={submitHandler}
        >
          <input
            className="border-black bg-amber-50 border-3 solid w-56 text-center rounded-md py-1.5 sm:py-2 text-sm sm:text-base"
            type="text"
            onChange={(e) => setInputdata(e.target.value)}
            placeholder="Enter Your Dish Name..."
          />

          <button
            type="submit"
            className="bg-amber-50 text-black font-bold border-2 border-black rounded-md px-4 py-1.5 sm:py-2 text-sm sm:text-base hover:text-black transition duration-300 cursor-pointer"
          >
            Search
          </button>
        </form>
        <div className="flex flex-wrap gap-5 justify-center p-6 text-white">
          {mealData?.map((data) => (
            <div
              key={data.idMeal}
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={data.strMealThumb}
                className="h-96 w-70 object-cover rounded-xl sm:*:h-80 sm:w-60 md:h-96 md:w-70 lg:h-96 lg:w-70"
              />
              <div className="flex flex-col justify-center items-center gap-2 mt-2 max-w-65">
                <h3 className="font-bold text-center mt-2">{data.strMeal}</h3>
                <p className=" text-sm text-white text-center">
                  {data.strCountry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Meal;
