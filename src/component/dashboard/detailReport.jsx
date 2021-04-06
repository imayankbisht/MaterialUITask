import React from "react";
import { Container } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { detailReport } from "../../data/data";

const DetailReport = () => {
  return (
    <>
      <div style={{ marginTop: "2em" }}>
        <Container>
          <h3>Top 5 user</h3>
          <TableContainer square component={Paper}>
            <Table size="medium" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>UserName</TableCell>
                  <TableCell>OrderNo</TableCell>
                  <TableCell>OrderDate</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>TotalAmount</TableCell>
                  <TableCell>totalQuantity</TableCell>
                  <TableCell>TotalProductCount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {detailReport.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.userName}
                    </TableCell>
                    <TableCell>{row.orderNo}</TableCell>
                    <TableCell>{row.orderDate}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.totalAmount}</TableCell>
                    <TableCell>{row.totalQuantity}</TableCell>
                    <TableCell>{row.totalProductCount}</TableCell>
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

export default DetailReport;
