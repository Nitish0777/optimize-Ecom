import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "Order ID",
    accessor: "_id",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const orders = () => {
  const [rows, setRows] = useState<DataType[]>([
    {
      _id: "1",
      amount: 100,
      quantity: 10,
      discount: 10,
      status: <span className="red">Delivered</span>,
      action: <Link to={"/orders/3"}>View</Link>,
    },
    {
      _id: "2",
      amount: 200,
      quantity: 20,
      discount: 20,
      status: <span className="red">Delivered</span>,
      action: <Link to={"/orders/3"}>View</Link>,
    },
    {
      _id: "3",
      amount: 300,
      quantity: 30,
      discount: 30,
      status: <span className="red">Delivered</span>,
      action: <Link to={"/orders/3"}>View</Link>,
    },
  ]);
  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6 ? true : false
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
};

export default orders;
