import React, { Fragment, useState } from "react";
import { billing } from "../data";
import styled from "styled-components";

const Billing = () => {
  const [offSet, setOffSet] = useState(0);
  const [limit, setLimit] = useState(4);

  console.log(offSet, "offset");
  console.log(limit, "limit");

  function showNextInfo() {
    if (!(limit > billing.length)) {
      setOffSet(limit);
      setLimit((limit) => limit + 4);
    }
    if (limit === billing.length) {
      setLimit(4);
      setOffSet(0);
    }
  }
  function showPrevInfo() {
    if (billing.length < 1) {
      setOffSet(0);
      setLimit(4);
    }
    setOffSet(offSet - 1);
  }
  return (
    <Fragment>
      <h3>Billing</h3>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <h5>Order History</h5>
        <p>Manage billing information and view reciepts</p>
      </div>
      <TableWrapper>
        <thead>
          <tr>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Receipt</TableHead>
          </tr>
        </thead>
        {billing.slice(offSet, limit).map((info) => {
          const { date, id, type, url } = info;

          return (
            <tbody key={id}>
              <SingleRoll>
                <TableData>{date}</TableData>
                <TableData>{type}</TableData>
                <TableData>
                  <button> Download</button>
                </TableData>
              </SingleRoll>
            </tbody>
          );
        })}
      </TableWrapper>
      <button onClick={() => showNextInfo()}>Next</button>
      {/* <button onClick={() => showPrevInfo()}>Prev</button> */}
    </Fragment>
  );
};

const TableWrapper = styled.table`
  margin-top: 10px;
  border-collapse: collapse;
  width: 70vw;
`;

const SingleRoll = styled.tr`
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const TableData = styled.td`
  border: 1px solid #dddddd;
  cursor: pointer;
  text-align: left;
  padding: 10px;
  /* &:hover {
    background-color: blue;
    color: white;
  } */
`;
const TableHead = styled(TableData)``;
// const TableRoll = styled.tr`
//   &:nth-child(even) {
//     background-color: #dddddd;
//   }
// `;

export default Billing;
