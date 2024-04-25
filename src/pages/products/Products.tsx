import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import {useQuery} from '@tanstack/react-query'

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];



const Products = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ['allproducts'],
    queryFn: () =>
      fetch('http://localhost:8800/api/products').then(
        (res) => res.json(),
      ),
  })

  return (
    <div className="products">
      <div className="info">
        <h2>Products</h2>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      {isLoading ? "Loading..." : <DataTable columns={columns} rows={data} slug="products" />}
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products