import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { ProductService } from './ProductService';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = [{
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
},
{
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}];

var labels= ProductService.getProductsName();
export const data1 = {
  labels,
  datasets: [
    {
      label: 'Sales Revenue',
      data: labels.map((a) => ProductService.getProductsSalesRev(a)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

var labels = ProductService.getProductsDate();
export const data2 = {
  labels,
  datasets: [
    {
      label: 'Sales Revenue 2',
      data: labels.map((a) => ProductService.getProductsDateSales(a)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

interface Product {
    id: number;
    product: string;
    date: string;
    sales: string;
    revenue: string;
}

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
      product: { value: null, matchMode: FilterMatchMode.CONTAINS },
      date: { value: null, matchMode: FilterMatchMode.CONTAINS },
      sales: { value: null, matchMode: FilterMatchMode.CONTAINS },
      revenue: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  useEffect(() => {
      ProductService.getProductsMedium().then((data) => setProducts(data));
  }, []);

  const onGlobalFilterChange = (e) => {
      const value = e.target.value;
      let _filters = { ...filters };
      _filters['global'].value = value;
      setFilters(_filters);
      setGlobalFilterValue(value);
  };

  const renderHeader = () => {
      return (
          <div className="flex justify-content-end">
              <IconField iconPosition="left">
                  <InputIcon className="pi pi-search" />
                  <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
              </IconField>
          </div>
      );
  };

  const header = renderHeader();

  return (
    <div className="card">
      <div className="card1">
        <Bar options={options[0]} data={data1} />
      </div>
      <div className="card1">
        <Line options={options[1]} data={data2} />
      </div>
      <div className="card1">
          <DataTable value={products} filters={filters} filterDisplay="row" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                    globalFilterFields={['product', 'date', 'sales', 'revenue']} emptyMessage="No customers found.">
              <Column filter filterPlaceholder="Search by product" field="product" header="Product" sortable style={{ width: '25%' }}></Column>
              <Column filter filterPlaceholder="Search by date" field="date" header="Date" sortable style={{ width: '25%' }}></Column>
              <Column filter filterPlaceholder="Search by sales" field="sales" header="Sales" sortable style={{ width: '25%' }}></Column>
              <Column filter filterPlaceholder="Search by revenue" field="revenue" header="Revenue" sortable style={{ width: '25%' }}></Column>
          </DataTable>
      </div>
    </div>
  );
}

export default App;
