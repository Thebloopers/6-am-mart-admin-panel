import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from './ToggleButton';


const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'SL', headerName: 'SL', width: 150 },
  { field: 'Item', headerName: 'Item', width: 200, },
  { field: 'Customer', headerName: 'Customer', width: 200 },
  { field: 'Review', headerName: 'Review', width: 200 },
  { field: 'Rating', headerName: 'Rating', width: 200 },
  { field: 'Status', headerName: 'Status', width: 200, renderCell:(parms)=>(
    <div className="mt-3"><ToggleButton/></div>
      ) },
 
];

const rows = [
  { id: "",SL:"",Item:"",Customer:"",Review:"",Rating:"",Status:true}
  
];

export default function ReviewListTable() {
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
       
      />
    </div>
  );
}