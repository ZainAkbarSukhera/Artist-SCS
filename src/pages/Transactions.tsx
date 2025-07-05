// import { Link, NavLink } from 'react-router-dom';
// import { DataTable, DataTableSortStatus } from 'mantine-datatable';
// import '@mantine/core/styles.layer.css';
// import 'mantine-datatable/styles.layer.css';
// import '../layout.css';
// import { useState, useEffect } from 'react';
// import sortBy from 'lodash/sortBy';
// import { useDispatch } from 'react-redux';
// import { setPageTitle } from '../store/themeConfigSlice';
// import IconTrashLines from '../components/Icon/IconTrashLines';
// import IconPlus from '../components/Icon/IconPlus';
// import IconEdit from '../components/Icon/IconEdit';
// import IconEye from '../components/Icon/IconEye';

// // Define TypeScript interfaces for better type checking
// // interface ItemStatus {
 
// // }

// interface Item {
//   id: number;
//   invoice: string;
//   name: string;
//   email: string;
//   date: string;
//   amount: string;
//   tooltip: string;
//   color: string;
//   profile: string;
// }

// const List = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setPageTitle('Invoice List'));
//   }, [dispatch]);

//   const [items, setItems] = useState<Item[]>([
//     {
//       id: 1,
//       invoice: '081451',
//       name: 'Laurie Fox',
//       email: 'lauriefox@company.com',
//       date: '15 Dec 2020',
//       amount: '2275.45',
//       color:'bg-success',
//       tooltip: 'Paid',
//       profile: 'profile-1.jpeg',
//     },
//         {
//             id: 2,
//             invoice: '081452',
//             name: 'Alexander Gray',
//             email: 'alexGray3188@gmail.com',
//             date: '20 Dec 2020',
//             amount: '1044.00',
//             color:'bg-success',
//             tooltip: 'Paid',

//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 3,
//             invoice: '081681',
//             name: 'James Taylor',
//             email: 'jamestaylor468@gmail.com',
//             date: '27 Dec 2020',
//             amount: '20.00',
//             color:'bg-danger',
//             tooltip: 'Pending',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 4,
//             invoice: '082693',
//             name: 'Grace Roberts',
//             email: 'graceRoberts@company.com',
//             date: '31 Dec 2020',
//             amount: '344.00',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 5,
//             invoice: '084743',
//             name: 'Donna Rogers',
//             email: 'donnaRogers@hotmail.com',
//             date: '03 Jan 2021',
//             amount: '405.15',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 6,
//             invoice: '086643',
//             name: 'Amy Diaz',
//             email: 'amy968@gmail.com',
//             date: '14 Jan 2020',
//             amount: '100.00',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 7,
//             invoice: '086773',
//             name: 'Nia Hillyer',
//             email: 'niahillyer666@comapny.com',
//             date: '20 Jan 2021',
//             amount: '59.21',
//             color:'bg-danger',
//             tooltip: 'Pending',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 8,
//             invoice: '087916',
//             name: 'Mary McDonald',
//             email: 'maryDonald007@gamil.com',
//             date: '25 Jan 2021',
//             amount: '79.00',
//             color:'bg-danger',
//             tooltip: 'Pending',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 9,
//             invoice: '089472',
//             name: 'Andy King',
//             email: 'kingandy07@company.com',
//             date: '28 Jan 2021',
//             amount: '149.00',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 10,
//             invoice: '091768',
//             name: 'Vincent Carpenter',
//             email: 'vincentcarpenter@gmail.com',
//             date: '30 Jan 2021',
//             amount: '400',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 11,
//             invoice: '095841',
//             name: 'Kelly Young',
//             email: 'youngkelly@hotmail.com',
//             date: '06 Feb 2021',
//             amount: '49.00',
//             color:'bg-danger',
//             tooltip: 'Pending',
          
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 12,
//             invoice: '098424',
//             name: 'Alma Clarke',
//             email: 'alma.clarke@gmail.com',
//             date: '10 Feb 2021',
//             amount: '234.40',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//     ]);

//     const [initialRecords, setInitialRecords] = useState<Item[]>(sortBy(items, 'invoice'));
//   const [records, setRecords] = useState<Item[]>(initialRecords);
//   const [selectedRecords, setSelectedRecords] = useState<Item[]>([]);
//   const [page, setPage] = useState(1);
//   const PAGE_SIZES = [10, 20, 30, 50, 100];
//   const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
//   const [search, setSearch] = useState('');
//   const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
//     columnAccessor: 'invoice',
//     direction: 'asc',
//   });

//   const deleteRow = (id: number | null = null) => {
//     if (window.confirm('Are you sure you want to delete the selected row?')) {
//       if (id) {
//         const updatedItems = items.filter((item) => item.id !== id);
//         setItems(updatedItems);
//         setInitialRecords(updatedItems);
//         setRecords(updatedItems);
//         setSelectedRecords([]);
//         setSearch('');
//       } else {
//         const selectedIds = selectedRecords.map((record) => record.id);
//         const updatedItems = items.filter((item) => !selectedIds.includes(item.id));
//         setItems(updatedItems);
//         setInitialRecords(updatedItems);
//         setRecords(updatedItems);
//         setSelectedRecords([]);
//         setSearch('');
//         setPage(1);
//       }
//     }
//   };

//   useEffect(() => {
//     const from = (page - 1) * pageSize;
//     const to = from + pageSize;
//     setRecords(initialRecords.slice(from, to));
//   }, [page, pageSize, initialRecords]);

//   useEffect(() => {
//     const filteredRecords = items.filter((item) => {
//       return (
//         item.invoice.toLowerCase().includes(search.toLowerCase()) ||
//         item.name.toLowerCase().includes(search.toLowerCase()) ||
//         item.email.toLowerCase().includes(search.toLowerCase()) ||
//         item.date.toLowerCase().includes(search.toLowerCase()) ||
//         item.amount.toLowerCase().includes(search.toLowerCase()) ||
//         item.tooltip.toLowerCase().includes(search.toLowerCase()) ||
//         item.color.toLowerCase().includes(search.toLowerCase())       
//       );
//     });
//     setInitialRecords(filteredRecords);
//   }, [search, items]);

//   useEffect(() => {
//     const sortedRecords = sortBy(initialRecords, sortStatus.columnAccessor);
//     setRecords(sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords);
//     setPage(1);
//   }, [sortStatus, initialRecords]);

//   return (
//     <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
//       <div className="invoice-table">
//         <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
//           <div className="flex items-center gap-2">
//             <button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
//               <IconTrashLines />
//               Delete
//             </button>
//             <Link to="/apps/invoice/add" className="btn btn-primary gap-2">
//               <IconPlus />
//               Add New
//             </Link>
//           </div>
//           <div className="ltr:ml-auto rtl:mr-auto">
//             <input
//               type="text"
//               className="form-input w-auto"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="datatables pagination-padding">
//           <DataTable
//             className="whitespace-nowrap table-hover invoice-table"
//             records={records}
//             columns={[
//               {
//                 accessor: 'Reference Id',
//                 sortable: true,
//                 render: ({ invoice }) => (
//                   <NavLink to="/apps/invoice/preview">
//                     <div className="text-primary underline hover:no-underline font-semibold">{`#${invoice}`}</div>
//                   </NavLink>
//                 ),
//               },
//               {
//                 accessor: 'name',
//                 sortable: true,
//                 render: ({ name, id }) => (
//                   <div className="flex items-center font-semibold">
//                     <div className="p-0.5 bg-white-dark/30 rounded-full w-max ltr:mr-2 rtl:ml-2">
//                       <img
//                         className="h-8 w-8 rounded-full object-cover"
//                         src={`/assets/images/profile-${id}.jpeg`}
//                         alt=""
//                       />
//                     </div>
//                     {name}
//                   </div>
//                 ),
//               },
//               {
//                 accessor: 'email',
//                 sortable: true,
//               },
//               {
//                 accessor: 'date',
//                 sortable: true,
//               },
//               {
//                 accessor: 'amount',
//                 sortable: true,
//                 render: ({ amount }) => <div className="text-right font-semibold">{`$${amount}`}</div>,
//               },
//               {
//                 accessor: 'status',
//                 sortable: true,
//                 render: ({ color, tooltip }) => (
//                   <span className={`badge ${color}`}>{tooltip}</span>
//                 ),
//               },
//               {
//                 accessor: 'action',
//                 title: 'Actions',
//                 sortable: false,
//                 render: ({ id }) => (
//                   <div className="flex gap-4 items-center w-max mx-auto">
//                     <NavLink to="/apps/invoice/edit" className="flex hover:text-info">
//                       <IconEdit className="w-4.5 h-4.5" />
//                     </NavLink>
//                     <NavLink to="/apps/invoice/preview" className="flex hover:text-primary">
//                       <IconEye />
//                     </NavLink>
//                     <button type="button" className="flex hover:text-danger" onClick={() => deleteRow(id)}>
//                       <IconTrashLines />
//                     </button>
//                   </div>
//                 ),
//               },
//             ]}
//             highlightOnHover
//             totalRecords={initialRecords.length}
//             recordsPerPage={pageSize}
//             page={page}
//             onPageChange={setPage}
//             sortStatus={sortStatus}
//             onSortStatusChange={setSortStatus}
//             onRecordsPerPageChange={setPageSize}
//             recordsPerPageOptions={PAGE_SIZES}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;


// import { Link, NavLink } from 'react-router-dom';
// import { DataTable, DataTableSortStatus } from 'mantine-datatable';
// import '@mantine/core/styles.layer.css';
// import 'mantine-datatable/styles.layer.css';
// import '../layout.css';
// import { useState, useEffect } from 'react';
// import sortBy from 'lodash/sortBy';
// import { useDispatch } from 'react-redux';
// import { setPageTitle } from '../store/themeConfigSlice';
// import IconTrashLines from '../components/Icon/IconTrashLines';
// import IconPlus from '../components/Icon/IconPlus';
// import IconDownload from '../components/Icon/IconDownload';

// interface Item {
//   id: number;
//   invoice: string;
//   date: string;
//   amount: string;
//   method: string; // Non-cash transaction method
//   status: {
//     color: string;
//     tooltip: string;
//   };
// }

// const List = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setPageTitle('Invoice List'));
//   }, [dispatch]);

//   const [items, setItems] = useState<Item[]>([
//     {
//       id: 1,
//       invoice: '081451',
//       date: '2024-12-15',
//       amount: '2275.45',
//       method: 'Credit Card',
//       status: { color: 'bg-success', tooltip: 'Paid' },
//     },
//     {
//       id: 2,
//       invoice: '081452',
//       date: '2023-12-20',
//       amount: '1044.00',
//       method: 'PayPal',
//       status: { color: 'bg-success', tooltip: 'Paid' },
//     },
//     {
//       id: 3,
//       invoice: '081681',
//       date: '2024-12-18',
//       amount: '20.00',
//       method: 'Credit Card',
//       status: { color: 'bg-danger', tooltip: 'Pending' },
//     },
//     // Add more items...
//   ]);

//   const [initialRecords, setInitialRecords] = useState<Item[]>(sortBy(items, 'invoice'));
//   const [records, setRecords] = useState<Item[]>(initialRecords);
//   const [page, setPage] = useState(1);
//   const PAGE_SIZES = [10, 20, 30, 50, 100];
//   const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
//   const [search, setSearch] = useState('');
//   const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
//     columnAccessor: 'invoice',
//     direction: 'asc',
//   });

//   useEffect(() => {
//     const from = (page - 1) * pageSize;
//     const to = from + pageSize;
//     setRecords(initialRecords.slice(from, to));
//   }, [page, pageSize, initialRecords]);

//   useEffect(() => {
//     const filteredRecords = items.filter((item) =>
//       Object.values(item).some((value) =>
//         value.toString().toLowerCase().includes(search.toLowerCase())
//       )
//     );
//     setInitialRecords(filteredRecords);
//   }, [search, items]);

//   useEffect(() => {
//     const sortedRecords = sortBy(initialRecords, sortStatus.columnAccessor);
//     setRecords(sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords);
//     setPage(1);
//   }, [sortStatus, initialRecords]);

//   return (
//     <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
//       <div className="invoice-table">
//         <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
//           {/* <div className="flex items-center gap-2">
//             <button type="button" className="btn btn-danger gap-2">
//               <IconTrashLines />
//               Delete
//             </button>
//             <Link to="/apps/invoice/add" className="btn btn-primary gap-2">
//               <IconPlus />
//               Add New
//             </Link>
//           </div> */}
//           <div className="ltr:ml-auto rtl:mr-auto">
//             <input
//               type="text"
//               className="form-input w-auto"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="datatables pagination-padding">
//           <DataTable
//             className="whitespace-nowrap table-hover invoice-table"
//             records={records}
//             columns={[
//               {
//                 accessor: 'Reference Number',
//                 sortable: true,
//                 render: ({ invoice }) => (
//                   <NavLink to="/apps/invoice/preview">
//                     <div className="text-primary underline hover:no-underline font-semibold">
//                       {`#${invoice}`}
//                     </div>
//                   </NavLink>
//                 ),
//               },
//               {
//                 accessor: 'date',
//                 sortable: true,
//                 title: 'Date',
//               },
//               {
//                 accessor: 'amount',
//                 sortable: true,
//                 title: 'Amount',
//                 render: ({ amount }) => (
//                   <div className="text-left font-semibold">{` SAR ${amount}`}</div>
//                 ),
//               },
//               {
//                 accessor: 'method',
//                 sortable: true,
//                 title: 'Method',
//               },
//               {
//                 accessor: 'status',
//                 sortable: true,
//                 title: 'Status',
//                 render: ({ status }) => (
//                   <span className={`badge ${status.color} text-center`}>{status.tooltip}</span>
//                 ),
//               },
//               {
//                 accessor: 'action',
//                 title: 'Action',
//                 render: () => (
//                   <button className="text-center btn btn-sm btn-outline-primary gap-2">
//                     <IconDownload />
//                     Download Invoice
//                   </button>
//                 ),
//               },
//             ]}
//             sortStatus={sortStatus}
//             onSortStatusChange={setSortStatus}
//             totalRecords={initialRecords.length}
//             recordsPerPage={pageSize}
//             page={page}
//             onPageChange={setPage}
//             recordsPerPageOptions={PAGE_SIZES}
//             onRecordsPerPageChange={setPageSize}
        
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;


import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import '../layout.css';
import { useState, useEffect } from 'react';
// import {sortBy} from 'lodash';
import  _ from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import IconTrashLines from '../components/Icon/IconTrashLines';
import IconPlus from '../components/Icon/IconPlus';
import IconDownload from '../components/Icon/IconDownload';



interface Record {
  id: number;
  invoice: string;
  date: string;
  amount: string;
  method: string;
  status: {
    color: string;
    tooltip: string;
  };
}




const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Invoice List'));
  }, [dispatch]);

  const [items, setItems] = useState([
    {
      id: 1,
      invoice: '081451',
      date: '2024-12-15',
      amount: '2275.45',
      method: 'Credit Card',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 2,
      invoice: '081452',
      date: '2023-12-20',
      amount: '1044.00',
      method: 'PayPal',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 3,
      invoice: '081681',
      date: '2024-12-18',
      amount: '20.00',
      method: 'Credit Card',
      status: { color: 'bg-warning', tooltip: 'Pending' },
    },
    {
      id: 4,
      invoice: '081453',
      date: '2024-12-22',
      amount: '1500.00',
      method: 'Bank Transfer',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 5,
      invoice: '081454',
      date: '2024-12-25',
      amount: '350.50',
      method: 'PayPal',
      status: { color: 'bg-warning', tooltip: 'Pending' },
    },
    {
      id: 6,
      invoice: '081455',
      date: '2024-12-30',
      amount: '100.00',
      method: 'Cash',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 7,
      invoice: '081456',
      date: '2024-12-31',
      amount: '5000.00',
      method: 'Credit Card',
      status: { color: 'bg-danger', tooltip: 'Failed' },
    },
    {
      id: 8,
      invoice: '081457',
      date: '2024-12-15',
      amount: '250.25',
      method: 'PayPal',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 9,
      invoice: '081458',
      date: '2024-12-17',
      amount: '89.99',
      method: 'Credit Card',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 10,
      invoice: '081459',
      date: '2024-12-18',
      amount: '150.00',
      method: 'Bank Transfer',
      status: { color: 'bg-danger', tooltip: 'Failed' },
    },
    {
      id: 11,
      invoice: '081460',
      date: '2024-12-19',
      amount: '1999.99',
      method: 'Cash',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 12,
      invoice: '081461',
      date: '2024-12-20',
      amount: '4200.00',
      method: 'PayPal',
      status: { color: 'bg-warning', tooltip: 'Pending' },
    },
    {
      id: 13,
      invoice: '081462',
      date: '2024-12-21',
      amount: '3500.45',
      method: 'Credit Card',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 14,
      invoice: '081463',
      date: '2024-12-22',
      amount: '785.75',
      method: 'Bank Transfer',
      status: { color: 'bg-warning', tooltip: 'Pending' },
    },
    {
      id: 15,
      invoice: '081464',
      date: '2024-12-23',
      amount: '104.99',
      method: 'Cash',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 16,
      invoice: '081465',
      date: '2024-12-24',
      amount: '800.50',
      method: 'PayPal',
      status: { color: 'bg-danger', tooltip: 'Failed' },
    },
    {
      id: 17,
      invoice: '081466',
      date: '2024-12-25',
      amount: '2500.00',
      method: 'Credit Card',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 18,
      invoice: '081467',
      date: '2024-12-26',
      amount: '125.00',
      method: 'Cash',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    {
      id: 19,
      invoice: '081468',
      date: '2024-12-27',
      amount: '2100.99',
      method: 'Bank Transfer',
      status: { color: 'bg-warning', tooltip: 'Pending' },
    },
    {
      id: 20,
      invoice: '081469',
      date: '2024-12-28',
      amount: '5500.75',
      method: 'PayPal',
      status: { color: 'bg-success', tooltip: 'Paid' },
    },
    
    // Add more items...
  ]);

  // const [initialRecords, setInitialRecords] = useState(sortBy(items, 'invoice'));
  // const [initialRecords, setInitialRecords] = useState(
  //   [...items].sort((a, b) => (a.invoice > b.invoice ? 1 : -1))
  // );

  const [initialRecords, setInitialRecords] = useState<Record[]>([]);
const [records, setRecords] = useState<Record[]>([]);


  // const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const [search, setSearch] = useState('');
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Record>>({
    columnAccessor: 'invoice',
    direction: 'asc',
  });

  

  useEffect(() => {
    const from = (currentPage - 1) * recordsPerPage;
    const to = from + recordsPerPage;
    setRecords(initialRecords.slice(from, to));
  }, [currentPage, initialRecords]);

  useEffect(() => {
    const filteredRecords = items.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
    setInitialRecords(filteredRecords);
    setCurrentPage(1); // Reset to first page after filtering
  }, [search, items]);

  // useEffect(() => {
  //   const sortedRecords = sortBy(initialRecords, sortStatus.columnAccessor);
  //   setRecords(sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords);
  // }, [sortStatus, initialRecords]);

  useEffect(() => {
    const sortedRecords = [...initialRecords].sort((a, b) => {
      const column = sortStatus.columnAccessor as keyof Record; // Ensure TypeScript recognizes it
      const valueA = a[column];
      const valueB = b[column];
  
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });
  
    setRecords(sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords);
  }, [sortStatus, initialRecords]);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSortChange = (newSort: { columnAccessor: string; direction: string }) => {
    if (newSort.direction === 'asc' || newSort.direction === 'desc') {
      setSortStatus(newSort as DataTableSortStatus<Record>);
    }
  };
  


  return (
    <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
      <div className="invoice-table">
        <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
        <h2 className="text-lg font-montserrat-regular text-yankees-blue dark:text-gray-200">
              Transactions
          </h2>
          <div className="ltr:ml-auto rtl:mr-auto">
            
            <input
              type="text"
              className="form-input w-auto font-montserrat-light"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="datatables pagination-padding">
          <DataTable
            className="whitespace-nowrap table-hover invoice-table text-yankees-blue font-montserrat-light"
            records={records}
            columns={[
              {
                accessor: 'Reference Number',
                sortable: true,
                render: ({ invoice }) => (
                  <NavLink to="/apps/invoice/preview">
                    <div className="text-yankees-blue underline hover:no-underline font-montserrat-light">
                      {`#${invoice}`}
                    </div>
                  </NavLink>
                ),
              },
              {
                accessor: 'date',
                sortable: true,
                title: 'Date',
              },
              {
                accessor: 'amount',
                sortable: true,
                title: 'Amount',
                render: ({ amount }) => (
                  <div className="text-left text-yankees-blue font-montserrat-light">{` SAR ${amount}`}</div>
                ),
              },
              {
                accessor: 'method',
                sortable: true,
                title: 'Method',
              },
              {
                accessor: 'status',
                sortable: true,
                title: 'Status',
                render: ({ status }) => (
                  <span className={`badge font-montserrat-light ${status.color} text-center`}>{status.tooltip}</span>
                ),
              },
              {
                accessor: 'action',
                title: 'Action',
                render: ({ status }) => (
                  status.tooltip === 'Paid' ? (
                    <button className="text-center btn btn-sm border-yankees-blue text-yankees-blue shadow-none hover:bg-yankees-blue hover:text-white gap-2">
                      <IconDownload />
                      Download Invoice
                    </button>
                  ) : null // Hide button for 'Failed' or 'Pending'
                ),
              },
            ]}
            sortStatus={sortStatus}
            onSortStatusChange={handleSortChange}
            // pagination={false} // Disable Mantine's pagination
          />
        </div>

        {initialRecords.length > recordsPerPage && (
          <div className="pagination mt-6 flex justify-center">
            <ul className="flex space-x-2">
              {[...Array(Math.ceil(initialRecords.length / recordsPerPage))].map((_, index) => (
                <li key={index + 1}>
                  <button
                    className={`px-3 py-1 rounded-md font-montserrat-light border ${
                      index + 1 === currentPage
                        ? 'bg-yankees-blue text-white'
                        : 'text-yankees-blue border-yankees-blue'
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
