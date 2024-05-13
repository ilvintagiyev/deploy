import { getAll } from "../../services";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/Header";
import { endpoint } from "../../services/constant";
const AdminLayout = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll(endpoint.products)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AdminHeader />
      <Outlet context={[data, setData]} />
    </>
  );
};
export default AdminLayout;
