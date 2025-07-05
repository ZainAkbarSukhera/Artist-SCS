import { useEffect, useState, FC } from 'react';
import { Link, To, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ReactApexChart from 'react-apexcharts';
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

interface MessageCardProps {
  profileImg?: string;
  name: string;
  date: string;
  message: string;
  likes?: number;
}

interface ActivityItemProps {
  color?: string;
  title: string;
  date: string;
  time: string;
  badgeText?: string;
  badgeColor?: string;
}

const messagesData = [
  { 
      profileImg: "/assets/images/profile-1.jpeg",
      name: "Jimmy Turner",
      date: "Monday, Nov 18",
      message: `"Your recent exhibition 'Art Beyond Borders' truly captivated me. The way you blend tradition with modernity is unparalleled. I hope to see more of your groundbreaking work soon."`,
      likes: 551,
  },
  { 
      profileImg: "/assets/images/profile-2.jpeg",
      name: "Sarah Al-Mutairi",
      date: "Wednesday, Nov 20",
      message: `"Attending your workshop on abstract techniques was a transformative experience. Thank you for sharing your knowledge and passion for art with such enthusiasm."`,
      likes: 432,
  },
  { 
      profileImg: "/assets/images/profile-3.jpeg",
      name: "Liam Connor",
      date: "Friday, Nov 22",
      message: `"Your latest piece, 'Ethereal Sandstorm,' perfectly captures the soul of the desert. The intricate details and vibrant colors left me mesmerized. A masterpiece indeed!"`,
      likes: 678,
  },
];

// const MessageCard = ({ profileImg, name, date, message, likes }) => {
//   return (
//       <div className="panel h-60 w-96 mt-4 ml-4">
//           <div className="flex items-start border-b border-white-light dark:border-[#1b2e4b] -m-5 mb-5 p-5">
//               {/* <div className="shrink-0 ring-2 ring-white-light dark:ring-dark rounded-full ltr:mr-4 rtl:ml-4">
//                   <img src={profileImg} alt={name} className="w-10 h-10 rounded-full object-cover" />
//               </div> */}
//               <div className="font-montserrat-regular text-yankees-blue">
//                   <h6>{name}</h6>
//                   <p className="text-xs font-montserrat-light text-white-dark mt-1">{date}</p>
//               </div>
//           </div>
//           <div>
//               <div className="text-yankees-blue font-montserrat-light pb-8">{message}</div>
//               <div className="w-full absolute bottom-0 flex items-center justify-between p-5 -mx-5">
//                   {/* <div className="flex items-center">
//                       <IconThumbUp className="w-5 h-5 text-info inline ltr:mr-1.5 rtl:ml-1.5 relative -top-0.5" />
//                       <span className="dark:text-info">{likes} Likes</span>
//                   </div> */}
//                   <Link to="/messages">
                 
//                   <button
//                       type="button"
//                       className="flex items-center bg-yankees-blue text-white rounded-md px-1.5 py-1 text-xs hover:shadow-[0_10px_20px_-10px] hover:shadow-sky-950"
//                   >
//                       Go to Mailbox
//                       <IconCaretsDown className="w-4 h-4 rtl:rotate-90 -rotate-90 ltr:ml-1.5 rtl:mr-1.5" />
//                   </button>
//                   </Link>
//               </div>
//           </div>
//       </div>
//   );
// };

// const ActivityItem = ({ color, title,date,  time, badgeText, badgeColor }) => {
//   return (
//       <div className="flex items-center py-1.5 relative group">
//           <div className={`w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5 bg-${color}`}></div>
//           <div className="flex-1 text-yankees-blue font-montserrat-light">{title}</div>
//           <div className="ltr:ml-auto rtl:mr-auto text-xs font-montserrat-light text-white-dark dark:text-gray-500">{date}</div>
//       </div>
//   );
// };

const MessageCard: FC<MessageCardProps> = ({
  profileImg = "/default-profile.png",
  name,
  date,
  message,
  likes = 0,
}) => {
  return (
      <div className="panel h-60 w-96 mt-4 ml-4 relative">
          <div className="flex items-start border-b border-white-light dark:border-[#1b2e4b] -m-5 mb-5 p-5">
              <div className="shrink-0 ring-2 ring-white-light dark:ring-dark rounded-full ltr:mr-4 rtl:ml-4">
                  <img src={profileImg} alt={name} className="w-10 h-10 rounded-full object-cover" />
              </div>
              <div className="font-montserrat-regular text-yankees-blue">
                  <h6>{name}</h6>
                  <p className="text-xs font-montserrat-light text-white-dark mt-1">{date}</p>
              </div>
          </div>
          <div>
              <div className="text-yankees-blue font-montserrat-light pb-8">{message}</div>
              <div className="w-full absolute bottom-0 flex items-center justify-between p-5 -mx-5">
                  <div className="flex items-center">
                      <IconThumbUp className="w-5 h-5 text-info inline ltr:mr-1.5 rtl:ml-1.5 relative -top-0.5" />
                      <span className="dark:text-info">{likes} Likes</span>
                  </div>
                  <Link to="/messages">
                      <button
                          type="button"
                          className="flex items-center bg-yankees-blue text-white rounded-md px-1.5 py-1 text-xs hover:shadow-[0_10px_20px_-10px] hover:shadow-sky-950"
                      >
                          Go to Mailbox
                          <IconCaretsDown className="w-4 h-4 rtl:rotate-90 -rotate-90 ltr:ml-1.5 rtl:mr-1.5" />
                      </button>
                  </Link>
              </div>
          </div>
      </div>
  );
};

const ActivityItem: FC<ActivityItemProps> = ({ color = "defaultColor", title, date, time, badgeText = "", badgeColor = "" }) => {
  return (
      <div className="flex items-center py-1.5 relative group">
          <div className={`w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5 bg-${color}`}></div>
          <div className="flex-1 text-yankees-blue font-montserrat-light">{title}</div>
          <div className="ltr:ml-auto rtl:mr-auto text-xs font-montserrat-light text-white-dark dark:text-gray-500">
              {date}
          </div>
      </div>
  );
};




const upcomingWorkshops = [
  {
    title: "Mastering Abstract Art",
    date: "February 5, 2025",
    time: "10:00 am",
    location: "Riyadh Art Center",
    status: "Upcoming",
    progress: 0,
  },
  {
    title: "The Art of Color Theory",
    date: "February 12, 2025",
    time: "11:00 am",
    location: "Jeddah Art District",
    status: "Upcoming",
    progress: 0,
  },
  {
    title: "Creative Perspectives in Modern Art",
    date: "February 20, 2025",
    time: "2:00 pm",
    location: "Virtual",
    status: "Upcoming",
    progress: 0,
  },
  {
    title: "Exploring Mixed Media Techniques",
    date: "February 27, 2025",
    time: "3:00 pm",
    location: "Dammam Arts Hub",
    status: "Upcoming",
    progress: 0,
  },
  {
    title: "Innovative Brushstroke Techniques",
    date: "March 5, 2025",
    time: "1:00 pm",
    location: "Jeddah Art District",
    status: "Upcoming",
    progress: 0,
  },
  ];



const Dashboard = () => {
    const isDark = useSelector((state: RootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    
    const isRtl = useSelector((state: RootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [loading] = useState(false);

    const navigate=useNavigate();

    const quickLinks = [
    { name: "Add New Artwork", path: "/dashboard/portfolio" },
    { name: "Create Workshop", path: "/dashboard/workshops" },
    { name: "Offer Commission Services", path: "/dashboard/commissions" },
  ];

   const handleNavigation = (path: To) => {
    navigate(path);
  };


    const revenueChart: any = {
        series: [
            {
                name: 'Income',
                data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
            },
            {
                name: 'Expenses',
                data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000],
            },
        ],
        options: {
            chart: {
                height: 325,
                type: 'area',
                fontFamily: 'montserrat-light, sans-serif' ,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
                lineCap: 'square',
            },
            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22,
            },
            colors: isDark ? ['#6F2A53', '#E85846'] : ['#6F2A53', '#E85846'],
            markers: {
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 6,
                        fillColor: '#6F2A53',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 5,
                        fillColor: '#E85846',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                ],
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            xaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: true,
                },
                labels: {
                    offsetX: isRtl ? 2 : 0,
                    offsetY: 5,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-xaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: (value: number) => {
                        return value / 1000 + 'K';
                    },
                    offsetX: isRtl ? -30 : -10,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                opposite: isRtl ? true : false,
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#E0E6ED',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '16px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
                x: {
                    show: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: isDark ? 0.19 : 0.28,
                    opacityTo: 0.05,
                    stops: isDark ? [100, 100] : [45, 100],
                },
            },
        },
    };

    return (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            {/* Left Column: Total Earnings and Revenue Chart */}
            <div className="flex-1 min-w-[300px] space-y-4">
              {/* Total Earnings Panel */}
              <div className="panel p-10 rounded-lg shadow-md bg-gradient-to-b from-madder-lake to-red-500 text-white">
                <div className="flex items-center justify-between">
                  <h5 className="font-montserrat-regular text-2xl">Total Earnings</h5>
                  <div className="text-lg font-montserrat-light flex items-center">
                    SAR 41,741.42
                    <span className="ml-3 bg-royal-orange text-xs text-black font-montserrat-light rounded px-2 py-1">
                      + 2453
                    </span>
                  </div>
                </div>
              </div>
      
              {/* Revenue Chart Panel */}
              <div className="panel p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-montserrat-regular text-yankees-blue text-lg dark:text-white">Monthly Earnings</h5>
                  {/* <Dropdown
                    offset={[0, 1]}
                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                    button={
                      <IconHorizontalDots className="text-black/70 dark:text-white/70 hover:!text-primary" />
                    }
                  >
                    <ul className="text-sm">
                      <li>
                        <button type="button">Weekly</button>
                      </li>
                      <li>
                        <button type="button">Monthly</button>
                      </li>
                      <li>
                        <button type="button">Yearly</button>
                      </li>
                    </ul>
                  </Dropdown> */}
                </div>
                <p className="text-lg font-montserrat-regular text-yankees-blue dark:text-gray-300 mb-4">
                  Total Profit:{' '}
                  <span className="text-madder-lake font-montserrat-light">SAR 10,840</span>
                </p>
                <div className="relative">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    {loading ? (
                      <div className="min-h-[325px] grid place-content-center bg-gray-200 dark:bg-gray-600">
                        <span className="animate-spin border-2 border-gray-400 dark:border-gray-300 !border-l-transparent rounded-full w-6 h-6"></span>
                      </div>
                    ) : (
                      <ReactApexChart
                        series={revenueChart.series}
                        options={revenueChart.options}
                        type="area"
                        height={325}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
      
            {/* Right Column: Transactions Panel */}
            <div className="panel flex-1 min-w-[300px] p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-montserrat-regular text-yankees-blue text-lg dark:text-white">Transactions</h5>
                {/* <Dropdown
                  placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                  button={
                    <IconHorizontalDots className="text-black/70 dark:text-white/70 hover:!text-primary" />
                  }
                >
                  <ul className="text-sm">
                    <li>
                      <button type="button">View Report</button>
                    </li>
                    <li>
                      <button type="button">Edit Report</button>
                    </li>
                    <li>
                      <button type="button">Mark as Done</button>
                    </li>
                  </ul>
                </Dropdown> */}
              </div>
              <div className="space-y-4">
                {[
                  { ref: "#081345", time: "10 Jan 1:00PM", amount: "SAR 3658.11", textClass: "text-success" },
                  { ref: "#081658", time: "04 Jan 1:00PM", amount: "SAR 1216.44", textClass: "text-success" },
                  { ref: "#081245", time: "22 Dec 11:30AM", amount: "SAR 3489.75", textClass: "text-success" },
                  { ref: "#081123", time: "18 Dec 3:15PM", amount: "SAR 2225.00", textClass: "text-success" },
                  { ref: "#081750", time: "15 Dec 10:45AM", amount: "SAR 12150.00", textClass: "text-success" },
                  { ref: "#081345", time: "10 Jan 1:00PM", amount: "SAR 3658.11", textClass: "text-success" },
                  { ref: "#081658", time: "04 Jan 1:00PM", amount: "SAR 1216.44", textClass: "text-success" },
                  { ref: "#081245", time: "22 Dec 11:30AM", amount: "SAR 3489.75", textClass: "text-success" },
                  { ref: "#081123", time: "18 Dec 3:15PM", amount: "SAR 2225.00", textClass: "text-success" },
                  { ref: "#081750", time: "15 Dec 10:45AM", amount: "SAR 12150.00", textClass: "text-success" },
                ].map((transaction, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <p className="text-sm font-montserrat-regular dark:text-white">Reference Number: {transaction.ref}</p>
                      <p className="text-xs text-gray-500 font-montserrat-light dark:text-gray-400">{transaction.time}</p>
                    </div>
                    <span className={`${transaction.textClass} text-base font-montserrat-light`}>
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      
          {/* Row for Last Five Bids and Latest Portfolio Updates */}
          <div className="flex gap-4">
            {/* Last Five Bids Submitted */}
            <div className="panel flex-1 min-w-[300px] p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
              <h5 className="font-montserrat-regular text-lg text-yankees-blue dark:text-white">Last Five Bids Submitted</h5>
              <div className="table-responsive">
                <table className="table-auto mt-8 w-full border-collapse border border-gray-200 dark:border-gray-700">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 font-montserrat-light text-yankees-blue">Date</th>
                      <th className="px-4 py-2 font-montserrat-light text-yankees-blue">Project Name</th>
                      <th className="px-4 py-2 font-montserrat-light text-yankees-blue">Bid Amount</th>
                      <th className="ltr:rounded-r-md rtl:rounded-l-md px-4 py-2 font-montserrat-light text-yankees-blue">Bid Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        date: "2024-01-12",
                        projectName: "Portrait Painting",
                        amount: "SAR 5556.00",
                        status: "Accepted",
                        statusClass: "bg-success",
                      },
                      {
                        date: "2024-08-19",
                        projectName: "Digital Landscape",
                        amount: "SAR 7000.00",
                        status: "Under Review",
                        statusClass: "bg-warning",
                      },
                      {
                        date: "2024-06-10",
                        projectName: "Abstract Sculpture",
                        amount: "SAR 950.00",
                        status: "Rejected",
                        statusClass: "bg-danger",
                      },
                      {
                        date: "2024-01-20",
                        projectName: "Wildlife Photography",
                        amount: "SAR 6500.00",
                        status: "Accepted",
                        statusClass: "bg-success",
                      },
                      {
                        date: "2024-08-27",
                        projectName: "Arabic Calligraphy",
                        amount: "SAR 1200.00",
                        status: "Under Review",
                        statusClass: "bg-warning",
                      },
                    ].map((bid, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <td className="px-4 py-2 font-montserrat-light text-yankees-blue">{bid.date}</td>
                        <td className="px-4 py-2 font-montserrat-light text-yankees-blue">{bid.projectName}</td>
                        <td className="px-4 py-2 font-montserrat-light text-yankees-blue">{bid.amount}</td>
                        <td className="px-4 py-2">
                          <span
                            className={`badge ${bid.statusClass} shadow-md dark:group-hover:bg-transparent font-montserrat-light`}
                          >
                            {bid.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
      
            {/* Latest Portfolio Updates */}
            <div className="panel flex-1 min-w-[300px] p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <h5 className="font-montserrat-regular text-lg text-yankees-blue dark:text-white mb-4">
            Latest Portfolio Updates
          </h5>
          <div className=" dark:bg-gray-800  space-y-6">
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-light dark:bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-yankees-blue dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10l4.553-4.553A2 2 0 0020 4h-4.553L10 9.447 5.553 5H4a2 2 0 00-1.447 3.447L8 10v8a2 2 0 001.553 1.953L10 20h4l4.447-1.553A2 2 0 0020 16V4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h6 className="text-base font-montserrat-regular text-yankees-blue dark:text-white">
                    New Digital Art Pieces
                  </h6>
                  <p className="text-sm font-montserrat-light text-gray-600 dark:text-gray-400">
                    <strong>3 new high-resolution artworks</strong> have been added to your portfolio.
                  </p>
                  <span className="text-xs font-montserrat-light text-gray-500 dark:text-gray-400">
                    Updated 15m ago
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-light dark:bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-yankees-blue dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8V4m0 0a8 8 0 110 16v-4a4 4 0 100-8zm0 0V4m0 0V4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h6 className="text-lg font-montserrat-regular text-yankees-blue dark:text-white">
                    Artworks Sold
                  </h6>
                  <p className="text-sm font-montserrat-light text-gray-600 dark:text-gray-400">
                    Your <strong>3 artworks</strong> just got sold.
                  </p>
                  <span className="text-xs font-montserrat-light text-gray-500 dark:text-gray-400">
                    Updated 30m ago
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-light dark:bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-yankees-blue dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h6 className="text-lg font-montserrat-regular text-yankees-blue dark:text-white">
                    New Abstract Collection
                  </h6>
                  <p className="text-sm font-montserrat-light text-gray-600 dark:text-gray-400">
                    Launched a <strong>special collection</strong> of abstract paintings on canvas.
                  </p>
                  <span className="text-xs font-montserrat-light text-gray-500 dark:text-gray-400">
                    Updated 1h ago
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        </div>

        <div className="flex flex-col lg:flex-row gap-4">
  {/* Upcoming Workshops Section */}
  <div className="panel h-full w-full lg:w-1/3 mt-4 pb-0">
  <h5 className="font-montserrat-regular text-yankees-blue text-lg dark:text-white-light mb-5">Upcoming Workshops</h5>
  <PerfectScrollbar className="relative h-[420px] ltr:pr-3 rtl:pl-3 ltr:-mr-3 rtl:-ml-3 mb-4">
    <div className="text-sm cursor-pointer">
      {upcomingWorkshops.map((workshop, index) => (
        <div key={index} className="mb-4 p-4 border-b border-white-light dark:border-white/10">
          <h6 className="font-montserrat-regular text-yankees-blue text-md dark:text-white-light">{workshop.title}</h6>
          <p className="text-sm text-yankees-blue font-montserrat-light dark:text-white-light">{workshop.date}</p>
          <p className="text-sm text-yankees-blue font-montserrat-light dark:text-white-light">{workshop.time}</p>
        </div>
      ))}
    </div>
  </PerfectScrollbar>
  <div className="border-t border-white-light dark:border-white/10">
    <Link
      to="/"
      className="font-montserrat-light text-yankees-blue group hover:text-yankees-blue p-4 flex items-center justify-center"
    >
      View All
      <IconArrowLeft className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition duration-300 ltr:ml-1 rtl:mr-1" />
    </Link>
  </div>
</div>

  {/* Messages Section */}
  <div className="container h-full w-full lg:w-2/3 mt-4 pb-0">
    <h5 className="font-semibold text-lg dark:text-white-light ml-4">Messages</h5>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {messagesData.map((message, index) => (
        <MessageCard
          key={index}
        //   profileImg={message.profileImg}
          name={message.name}
          date={message.date}
          message={message.message}
        //   likes={message.likes}
        />
      ))}
    </div>
  </div>

          </div>

          {/* <section className="mt-10">
          <h2 className="text-2xl font-montserrat-regular text-yankees-blue mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Add New Artwork", "Create Workshop", "Offer Commission Services"].map(
              (link, index) => (
                <button
                  key={index}
                  className="bg-gradient-to-r from-yankees-blue to-black text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition font-montserrat-light "
                >
                  {link}
                </button>
              )
            )}
          </div>
        </section> */}

          <section className="mt-10">
          <h2 className="text-2xl font-montserrat-regular text-yankees-blue mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                className="bg-gradient-to-r from-yankees-blue to-black text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition font-montserrat-light "
                onClick={() => handleNavigation(link.path)} // Add onClick handler
              >
                {link.name}
              </button>
            ))}
          </div>
        </section>


          




        </div>
      );
      
    
    
    
};

export default Dashboard;
