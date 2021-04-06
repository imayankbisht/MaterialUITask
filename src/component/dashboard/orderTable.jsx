import React from "react";
import { Container } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { TableData } from "../../data/data";

const OrderTable = () => {
  return (
    <>
      <div style={{ marginTop: "2em" }}>
        <Container>
          <h3>Top 5 Order</h3>
          <TableContainer square component={Paper}>
            <Table size="medium" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Order No</TableCell>
                  <TableCell>Total Amount</TableCell>
                  <TableCell>Total Quantity</TableCell>
                  <TableCell>User Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TableData.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.orderNo}
                    </TableCell>
                    <TableCell>{row.totalAmount}</TableCell>
                    <TableCell>{row.totalQuantity}</TableCell>
                    <TableCell>{row.userName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
      <div style={{ marginTop: "2em" }}>
        <Container>
          <h3>Bottom 5 Order</h3>

          <TableContainer square component={Paper}>
            <Table size="medium" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Order No</TableCell>
                  <TableCell>Total Amount</TableCell>
                  <TableCell>Total Quantity</TableCell>
                  <TableCell>User Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TableData.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.orderNo}
                    </TableCell>
                    <TableCell>{row.totalAmount}</TableCell>
                    <TableCell>{row.totalQuantity}</TableCell>
                    <TableCell>{row.userName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
};

export default OrderTable;
