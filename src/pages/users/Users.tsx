import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";

import { useState } from "react";
import "./users.scss";
import Add from "../../components/add/Add";
import {useQuery} from '@tanstack/react-query'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'img', headerName: 'Avatar', width: 100, renderCell: (params) => {return <img src={params.row.img || "/noavatar.png"} alt="Avatar" />} },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: false,
        type: "string"
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: false,
        type: "string"
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 200,
        editable: false,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        editable: false,
        width: 150,
        type: "string"
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 150,
        editable: false,
        type: "string"
    },
    {
        field: "verified",
        headerName:"Verified",
        width: 100,
        type: "boolean"
    },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: () =>
      fetch('http://localhost:8800/api/users').then(
        (res) => res.json(),
      ),
  })

  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? "Loading..." : <DataTable columns={columns} rows={data} slug="users" />}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users