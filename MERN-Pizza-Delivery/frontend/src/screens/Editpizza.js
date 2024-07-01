import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Import useParams
import { editPizza, getPizzaById } from "../actions/pizzaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Editpizza() {
  const dispatch = useDispatch();
  const { pizzaid } = useParams(); // Use useParams to get pizzaid

  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = getpizzabyidstate;

  const editpizzastate = useSelector((state) => state.editPizzaReducer);
  const { editloading, editerror, editsuccess } = editpizzastate;

  useEffect(() => {
    if (pizza) {
      if (pizza._id === pizzaid) {
        setname(pizza.name);
        setdescription(pizza.description);
        setcategory(pizza.category);
        setsmallprice(pizza.prices[0]['small']);
        setmediumprice(pizza.prices[0]['medium']);
        setlargeprice(pizza.prices[0]['large']);
        setimage(pizza.image);
      } else {
        dispatch(getPizzaById(pizzaid));
      }
    } else {
      dispatch(getPizzaById(pizzaid));
    }
  }, [pizza, dispatch, pizzaid]);

  function formHandler(e) {
    e.preventDefault();

    const editedpizza = {
      _id: pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };

    dispatch(editPizza(editedpizza));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Edit Pizza</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && <Success success="Pizza details edited successfully" />}
        {editloading && <Loading />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small variant price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium variant price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large variant price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Edit Pizza
          </button>
        </form>
      </div>
    </div>
  );
}
