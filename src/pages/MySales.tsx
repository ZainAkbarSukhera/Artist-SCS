import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';


import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../components/Dropdown';
import { setPageTitle } from '../store/themeConfigSlice';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import IconDollarSign from '../components/Icon/IconDollarSign';
import IconInbox from '../components/Icon/IconInbox';
import IconTag from '../components/Icon/IconTag';
import IconCreditCard from '../components/Icon/IconCreditCard';
import IconShoppingCart from '../components/Icon/IconShoppingCart';
import IconArrowLeft from '../components/Icon/IconArrowLeft';
import IconCashBanknotes from '../components/Icon/IconCashBanknotes';
import IconUser from '../components/Icon/IconUser';
import IconNetflix from '../components/Icon/IconNetflix';
import IconBolt from '../components/Icon/IconBolt';
import IconCaretDown from '../components/Icon/IconCaretDown';
import IconPlus from '../components/Icon/IconPlus';
import IconMultipleForwardRight from '../components/Icon/IconMultipleForwardRight';
import IconEye from '../components/Icon/IconEye';
import IconThumbUp from '../components/Icon/IconThumbUp';
import IconCaretsDown from '../components/Icon/IconCaretsDown';



type Sale = {
  id: number;
  artwork: string;
  buyer: string;
  amount: number;
  date: string;
  status: "Completed" | "Pending";
};

type Wallet = {
  totalEarnings: number;
  withdrawals: number;
  pendingAmount: number;
};

const summaryData = [
  {
    id: 1,
    title: "Total Earnings",
    amount: 8500, // Example earnings
    status: "Completed",
  },
  {
    id: 2,
    title: "Withdrawals",
    amount: 2500, // Example withdrawals
    status: "Completed",
  },
  {
    id: 3,
    title: "Pending Amount",
    amount: 3200, // Example pending amount
    status: "Pending",
  },
];

const MySalesEarnings: React.FC = () => {
  const [sales, setSales] = useState<Sale[]>([
    {
      id: 1,
      artwork: "Abstract Painting",
      buyer: "Buyer A**",
      amount: 500,
      date: "2024-12-01",
      status: "Completed",
    },
    {
      id: 2,
      artwork: "Digital Portrait",
      buyer: "Buyer B**",
      amount: 1200,
      date: "2024-12-02",
      status: "Completed",
    },
    {
      id: 3,
      artwork: "Landscape Photography",
      buyer: "Buyer C**",
      amount: 850,
      date: "2024-12-03",
      status: "Pending",
    },
    {
      id: 4,
      artwork: "Sculpture",
      buyer: "Buyer D**",
      amount: 1500,
      date: "2024-12-04",
      status: "Completed",
    },
    {
      id: 5,
      artwork: "Modern Art Print",
      buyer: "Buyer E**",
      amount: 400,
      date: "2024-12-05",
      status: "Completed",
    },
    {
      id: 6,
      artwork: "Abstract Digital Art",
      buyer: "Buyer F**",
      amount: 1000,
      date: "2024-12-06",
      status: "Completed",
    },
    {
      id: 7,
      artwork: "Watercolor Landscape",
      buyer: "Buyer G**",
      amount: 700,
      date: "2024-12-07",
      status: "Pending",
    },
    {
      id: 8,
      artwork: "Mixed Media Art",
      buyer: "Buyer H**",
      amount: 1300,
      date: "2024-12-08",
      status: "Completed",
    },
    {
      id: 9,
      artwork: "Calligraphy Art",
      buyer: "Buyer I**",
      amount: 600,
      date: "2024-12-09",
      status: "Pending",
    },
    {
      id: 10,
      artwork: "Digital Illustration",
      buyer: "Buyer J**",
      amount: 950,
      date: "2024-12-10",
      status: "Completed",
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;



  const [wallet, setWallet] = useState<Wallet>({
    totalEarnings: 1000,
    withdrawals: 700,
    pendingAmount: 300,
  });

  const handleWithdraw = () => {
    alert("Withdrawal request submitted!");
  };

  const isRtl = useSelector((state: RootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  // Filter sales by search term
  const filteredSales = sales.filter(
    (sale) =>
      sale.artwork.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.buyer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalRecords = filteredSales.length;
  const paginatedSales = filteredSales.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  //   setCurrentPage(1); // Reset to the first page when searching
  // };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // const paginate = (page) => {
  //   setCurrentPage(page);
  // };
  const paginate = (page: number) => {
    setCurrentPage(page);
  };
  


  return (
    <div className="p-6 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">My Sales/Earnings</h1>

      {/* Earnings Overview */}
      {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">Earnings Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p className="text-sm font-montserrat-regular">Total Earnings</p>
            <p className="text-lg font-bold">SAR {wallet.totalEarnings}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p className="text-sm font-medium">Withdrawals</p>
            <p className="text-lg font-bold">SAR {wallet.withdrawals}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p className="text-sm font-medium">Pending Amount</p>
            <p className="text-lg font-bold">SAR {wallet.pendingAmount}</p>
          </div>
        </div>
      </div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6 text-white">
  {/* Total Earnings */}
  <div className="panel bg-gradient-to-r from-yankees-blue to-blue-950">
    <div className="flex justify-between">
      <div className="ltr:mr-1 rtl:ml-1 text-md font-montserrat-regular text-lg">Total Earnings</div>
      <div className="dropdown">
        {/* <Dropdown
          offset={[0, 5]}
          placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
          btnClassName="hover:opacity-80"
          button={<IconHorizontalDots className="hover:opacity-80 opacity-70" />}
        >
          <ul className="text-yankees-blue font-montserrat-light dark:text-white-dark">
            <li>
              <Link to="/earnings">
                <button type="button">View Earnings</button>
              </Link>
            </li>
          </ul>
        </Dropdown> */}
      </div>
    </div>
    <div className="flex items-center mt-5">
      <div className="text-2xl font-montserrat-light ltr:mr-3 rtl:ml-3">SAR 15,000</div>
    </div>
  </div>

  {/* Withdrawals */}
  <div className="panel bg-gradient-to-r from-palatinate-purple to-fuchsia-900">
    <div className="flex justify-between">
      <div className="ltr:mr-1 rtl:ml-1 text-md font-montserrat-regular text-lg">Withdrawals</div>
      <div className="dropdown">
        {/* <Dropdown
          offset={[0, 5]}
          placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
          btnClassName="hover:opacity-80"
          button={<IconHorizontalDots className="hover:opacity-80 opacity-70" />}
        >
          <ul className="text-yankees-blue font-montserrat-light dark:text-white-dark">
            <li>
              <Link to="/withdrawals">
                <button type="button">View Withdrawals</button>
              </Link>
            </li>
          </ul>
        </Dropdown> */}
      </div>
    </div>
    <div className="flex items-center mt-5">
      <div className="text-2xl font-montserrat-light ltr:mr-3 rtl:ml-3">SAR 5,000</div>
    </div>
  </div>

  {/* Pending Amount */}
  <div className="panel bg-gradient-to-r from-madder-lake to-red-500">
    <div className="flex justify-between">
      <div className="ltr:mr-1 rtl:ml-1 text-md font-montserrat-regular text-lg">Pending Amount</div>
      <div className="dropdown">
        {/* <Dropdown
          offset={[0, 5]}
          placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
          btnClassName="hover:opacity-80"
          button={<IconHorizontalDots className="hover:opacity-80 opacity-70" />}
        >
          <ul className="text-yankees-blue font-montserrat-light dark:text-white-dark">
            <li>
              <Link to="/pending">
                <button type="button">View Pending Amount</button>
              </Link>
            </li>
          </ul>
        </Dropdown> */}
      </div>
    </div>
    <div className="flex items-center mt-5">
      <div className="text-2xl font-montserrat-light ltr:mr-3 rtl:ml-3">SAR 2,000</div>
    </div>
  </div>
</div>


      {/* Sales History */}
      <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
      <div className="purchase-table">
        <div className="mb-4 px-5 flex justify-between items-center">
          <h2 className="text-lg font-montserrat-regular text-yankees-blue dark:text-gray-200">Sales History</h2>
          <input
            type="text"
            className="form-input w-auto border-gray-300 rounded-md focus:ring-primary focus:border-primary font-montserrat-extralight"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>

        <DataTable
          className="whitespace-nowrap table-hover purchase-datatable font-montserrat-light text-yankees-blue"
          records={paginatedSales}
          columns={[
            { accessor: 'artwork', title: 'Artwork' },
            { accessor: 'buyer', title: 'Buyer' },
            { accessor: 'amount', title: 'Amount', render: (record) => `SAR ${record.amount}` },
            { accessor: 'date', title: 'Date' },
            {
              accessor: 'status',
              title: 'Status',
              render: (record) => (
                <span
                  className={`badge font-montserrat-light ${
                    record.status === 'Completed' ? 'bg-success text-white' : 'bg-warning text-white'
                  }`}
                >
                  {record.status}
                </span>
              ),
            },
          ]}
          highlightOnHover
          // pagination={false} // Disable Mantine's default pagination
        />

        {totalRecords > recordsPerPage && (
          <div className="pagination mt-6 flex justify-center">
            <ul className="flex space-x-2">
              {[...Array(Math.ceil(totalRecords / recordsPerPage))].map((_, index) => (
                <li key={index + 1}>
                  <button
                    className={`px-3 py-1 font-montserrat-light rounded-md border ${
                      index + 1 === currentPage ? 'bg-yankees-blue text-white' : 'text-yankees-blue'
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
      {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Sales History</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="px-4 py-2 text-left">Artwork</th>
              <th className="px-4 py-2 text-left">Buyer</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-t border-gray-300 dark:border-gray-700">
                <td className="px-4 py-2">{sale.artwork}</td>
                <td className="px-4 py-2">{sale.buyer}</td>
                <td className="px-4 py-2">SAR {sale.amount}</td>
                <td className="px-4 py-2">{sale.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={
                      sale.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }
                  >
                    {sale.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* Withdraw Funds */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">Withdraw Funds</h2>
        <p className="mb-4 font-montserrat-light text-yankees-blue">Withdraw your earnings to your bank account.</p>
        <button
          onClick={handleWithdraw}
          className="bg-yankees-blue text-white px-6 py-2 rounded-lg shadow hover:bg-yankees-blue focus:outline-none focus:ring-2 focus:ring-yankees-blue"
        >
          Withdraw Now
        </button>
      </div>
    </div>
  );
};

export default MySalesEarnings;
