import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Route, Routes, Link } from "react-router-dom";

import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Userslist from "./Userslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser?.isAdmin) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to="userslist" style={{ color: 'white' }}>Users List</Link>
            </li>
            <li>
              <Link to="pizzaslist" style={{ color: 'white' }}>Pizzas List</Link>
            </li>
            <li>
              <Link to="addpizza" style={{ color: 'white' }}>Add Pizza</Link>
            </li>
            <li>
              <Link to="orderslist" style={{ color: 'white' }}>Orders List</Link>
            </li>
          </ul>

          <Routes>
            <Route path="userslist" element={<Userslist />} />
            <Route path="orderslist" element={<Orderslist />} />
            <Route path="pizzaslist" element={<Pizzaslist />} />
            <Route path="addpizza" element={<Addpizza />} />
            <Route path="editpizza/:pizzaid" element={<Editpizza />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
