import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { RootState } from '../../store/store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import { MantineProvider } from '@mantine/core';
import IconMinus from '../Icon/IconMinus';
import IconMenuChat from '../Icon/Menu/IconMenuChat';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '../Icon/Menu/IconMenuTodo';
import IconMenuNotes from '../Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '../Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '../Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../Icon/Menu/IconMenuElements';
import IconMenuCharts from '../Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '../Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '../Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '../Icon/Menu/IconMenuTables';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuPages from '../Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '../Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '../Icon/Menu/IconMenuDocumentation';
import IconSettings from '../Icon/IconSettings';
import IconHeart from '../Icon/IconHeart';
import IconMessage from '../Icon/IconMessage';
import IconUsersGroup from '../Icon/IconUsersGroup';
import IconCashBankNotes from '../Icon/IconCashBanknotes';
import IconDollarSign from '../Icon/IconDollarSignCircle';
import IconDownload from '../Icon/IconDownload';
import IconUser from '../Icon/IconUser';
import IconCashBanknotes from '../Icon/IconCashBanknotes';
import IconBookmark from '../Icon/IconBookmark';
import IconBell from '../Icon/IconBell';
import IconUserPlus from '../Icon/IconUserPlus';
import logo from "../../assets/SCS Logo.png";


const Sidebar = () => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: RootState) => state.themeConfig);
    const semidark = useSelector((state: RootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    // useEffect(() => {
    //     const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    //     if (selector) {
    //         selector.classList.add('active');
    //         const ul: any = selector.closest('ul.sub-menu');
    //         if (ul) {
    //             let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
    //             if (ele.length) {
    //                 ele = ele[0];
    //                 setTimeout(() => {
    //                     ele.click();
    //                 });
    //             }
    //         }
    //     }
    // }, []);

    // useEffect(() => {
    //     if (window.innerWidth < 1024 && themeConfig.sidebar) {
    //         dispatch(toggleSidebar());
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [location]);
    useEffect(() => {
        const activeLink = document.querySelector(`.sidebar ul a[href="${location.pathname}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            const parentMenu = activeLink.closest('ul.sub-menu');
            if (parentMenu) {
                const menu = parentMenu.closest('li.menu')?.querySelector('.nav-link') as HTMLElement;
                if (menu) {
                    setTimeout(() => {
                        menu.click();
                    });
                }
            }
            
        }
    }, [location.pathname]); 

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <NavLink to="/dashboard/maindashboard" className="main-logo flex items-center shrink-0">
                            <img className="w-20 ml-[5px] flex-none" src={logo} alt="logo" />
                        </NavLink>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">

                            {/* <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                                <IconMinus className="w-4 h-5 flex-none hidden" />
                                <span>{t('apps')}</span>
                            </h2> */}

                            <li className="nav-item">
                                <ul>
                                <li className="nav-item">
                                        <NavLink to="/dashboard/maindashboard" className="group">
                                        <div className="flex items-center">
                                        <IconMenuDashboard
                                         className="group-hover:!text-primary shrink-0 opacity-75" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('dashboard')}</span>
                                         </div>

                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/dashboard/editProfile" className="group">
                                            <div className="flex items-center">
                                                <IconUser className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('Edit Profile')}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                          
                                    {/* <li className="nav-item">
                                        <NavLink to="/dashboard/portfolio" className="group">
                                            <div className="flex items-center">
                                                <IconMenuForms className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('My Portfolio')}</span>
                                            </div>
                                        </NavLink>
                                    </li> */}

                                    <li className="menu nav-item">
                                        {/* Menu Button */}
                                        <button
                                            type="button"
                                            // Ensure 'active' class is consistently applied based on 'portfolio' string
                                            className={`nav-link group w-full ${currentMenu === 'portfolio' ? 'active' : ''}`}
                                            onClick={() => toggleMenu('portfolio')} // Use the exact string 'portfolio' for consistency
                                            aria-expanded={currentMenu === 'portfolio'} // Add ARIA attribute for accessibility
                                        >
                                            <div className="flex items-center">
                                            <IconMenuForms className="group-hover:!text-primary shrink-0" />
                                            {/* Text and Styling */}
                                            <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">
                                                {t('My Portfolio')}
                                            </span>
                                            </div>

                                            {/* Caret Icon - rotate based on menu state */}
                                            <div className={currentMenu !== 'portfolio' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                            <IconCaretDown />
                                            </div>
                                        </button>

                                        {/* Sub-menu (conditionally animated) */}
                                        <AnimateHeight duration={300} height={currentMenu === 'portfolio' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                            <li>
                                                <NavLink to="/dashboard/portfolio">
                                                {t('Artwork')}
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/project">
                                                {t('Project')}
                                                </NavLink>
                                            </li>
                                            </ul>
                                        </AnimateHeight>
                                        </li>
                                    
                                    <li className="nav-item">
                                        <NavLink to="/dashboard/sales" className="group">
                                            <div className="flex items-center">
                                                <IconCashBanknotes className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('My Sales/Earnings')}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/dashboard/transactions" className="group">
                                            <div className="flex items-center">
                                                <IconDollarSign className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('Transactions')}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/dashboard/bids" className="group">
                                            <div className="flex items-center">
                                                <IconMenuScrumboard className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('My Bids')}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/dashboard/workshops" className="group">
                                            <div className="flex items-center">
                                                <IconUsersGroup className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('Workshops')}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/dashboard/commissions" className="group">
                                            <div className="flex items-center">
                                                <IconUserPlus className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('Commissioned Services')}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/dashboard/messages" className="group">
                                            <div className="flex items-center">
                                                <IconMessage className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('Messages')}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    {/* <li className="nav-item">
                                        <NavLink to="/wishlist" className="group">
                                            <div className="flex items-center">
                                                <IconHeart className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Wishlist')}</span>
                                            </div>
                                        </NavLink>
                                    </li> */}

                                    {/* <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'workshops' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('workshops')}>
                                            <div className="flex items-center">
                                                <IconMenuInvoice className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Workshops')}</span>
                                            </div>

                                            <div className={currentMenu !== 'workshops' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'workshops' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/apps/invoice/list">{t('list')}</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/apps/invoice/preview">{t('Certificates')}</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li> */}

                                    <li className="nav-item">
                                        <NavLink to="/dashboard/settings" className="group">
                                            <div className="flex items-center">
                                                <IconSettings className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-yankees-blue font-montserrat-extralight dark:text-[#506690] dark:group-hover:text-white-dark">{t('Settings')}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
             {/* Ensure Outlet is present to display the correct content */}
             <div className="content-container">
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;
