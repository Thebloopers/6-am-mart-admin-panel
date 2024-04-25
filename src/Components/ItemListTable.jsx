import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from './ToggleButton';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'SL', headerName: 'SL', width: 150 },
  { field: 'Name', headerName: 'Name', width: 200,renderCell:(params)=>(
   <Link to={"/"}  className='flex gap-2 items-center '>
    <img className='object-cover h-10 ' src={params.value.imgsrc} />
    {params.value.head}
   </Link>
      ) },
  { field: 'Category', headerName: 'Category', width: 200 },
  { field: 'Store', headerName: 'Store', width: 200 },
  { field: 'Price', headerName: 'Price', width: 200 },
  { field: 'Status', headerName: 'Status', width: 200, renderCell:(parms)=>(
    <div className="mt-3"><ToggleButton/></div>
      ) },
  { field: 'Action', headerName: 'Action', width: 200 ,renderCell:(parms)=>(
    <div className="flex gap-2 mt-2">
    <Button variant="outlined" color="success">
    <EditIcon/>
    </Button>
    <Button variant="outlined" color="error" >
     <DeleteIcon/>
    </Button>
    </div>
  )},
 
];

const rows = [
  { id: 1,SL:2,Name:{ head : "Lay's Classic Chips " , imgsrc : "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-23-623ab82149e4e.png"},Category:2,Store:2,Price:100,Status:true,Action:true },
  
];

export default function ItemListTable() {
  return (
    <div className='max-w-[400px] overflow-auto md:max-w-full' style={{ height: 400, width: '100%' }}>
    
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}