import React from "react";
import { Container } from "@material-ui/core";
import HeaderCards from "./headerCards";
import LineChart from "./lineChart";
import OrderTable from "./orderTable";
import UserTable from "./userTable";
import DetailReport from "./detailReport";

const Dashboard = () => {
  return (
    <Container>
      <HeaderCards />
      <LineChart />
      <OrderTable />
      <UserTable />
      <DetailReport />
    </Container>
  );
};

export default Dashboard;
