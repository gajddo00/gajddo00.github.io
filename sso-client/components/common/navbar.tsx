import Image from "next/image";
import { useState } from "react";
import MenuIcon from "../../assets/menu-icon.svg";
import CloseIcon from "../../assets/cross-icon.svg";
import Logo from "../../assets/sso_logo.svg";
import Link from "next/link";
import Button from "./button";
import Text from "./text";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";
import { Role } from "../../api/api";
import useLogout from "../../hooks/useLogout";
import useAuthState from "../../hooks/useAuthState";
import Delayed from "./delayed-component";
import { getString } from "../../utils/strings";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> { }

const Navbar = (props: NavbarProps) => {
    const [hidden, setHidden] = useState<boolean>(true);
    const router = useRouter();
    const { user } = useUser();
    const { auth } = useAuthState();
    const { hardLogout } = useLogout();

    const toggleNavbar = () => {
        setHidden(p => !p);
    }

    const bgColor = () => {
        return hidden ? 'bg-none sm:bg-neutral-200' : 'bg-neutral-200';
    }

    const btnSize = () => {
        return hidden ? 'medium' : 'large';
    }

    const type = (path: string) => {
        return router.pathname.includes(path) ? 'dark' : 'light';
    }

    const handleNavItemClick = () => {
        setHidden(true);
    }

    const handleLogout = () => {
        hardLogout();
    }

    const menuItems = {
        'services':
            <Link href="/services">
                <a>
                    <Button label={getString("services", router.locale)} type={type('/services')} mode={btnSize()} onClick={handleNavItemClick} />
                </a>
            </Link>,
        'settings':
            <Link href="/settings">
                <a>
                    <Button label={getString("settings", router.locale)} type={type('/settings')} mode={btnSize()} onClick={handleNavItemClick} />
                </a>
            </Link>,
        'users':
            <Link href="/users">
                <a>
                    <Button label={getString("users", router.locale)} type={type('/users')} mode={btnSize()} onClick={handleNavItemClick} />
                </a>
            </Link>,
        'requests':
            <Link href="/requests">
                <a>
                    <Button label={getString("requests", router.locale)} type={type('/requests')} mode={btnSize()} onClick={handleNavItemClick} />
                </a>
            </Link>,
        'logout':
            <Button className="mt-auto" label={getString("logout", router.locale)} type='light' mode={btnSize()} onClick={() => {
                handleNavItemClick();
                handleLogout();
            }} />
    };

    const UserNavbarContent = () => {
        return <div className="flex flex-col h-full">
            <header className="text-center pt-4">
                <Text type='body'>{`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}</Text>
            </header>
            <div className="flex flex-col gap-3 items-center py-14 sm:py-6 sm:mt-10 flex-grow">
                {menuItems['services']}
                {menuItems['settings']}
                {menuItems['logout']}
            </div>
        </div>
    }

    const ManagerNavbarContent = () => {
        return <div className="flex flex-col h-full">
            <header className="text-center pt-4">
                <Text type='body'>{`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}</Text>
            </header>
            <div className="flex flex-col gap-3 items-center py-14 sm:py-6 sm:mt-10 flex-grow">
                {menuItems['services']}
                {menuItems['users']}
                {menuItems['settings']}
                {menuItems['logout']}
            </div>
        </div>
    }

    const AnonymousNavbarContent = () => {
        return <div className="flex flex-col h-full">
            <header className="text-center pt-4">
                <Image className="cursor-pointer" src={Logo} width={70} height={70} onClick={() => router.replace('/')} alt="logo" />
                <Text type='body' bold={true}>SSO</Text>
            </header>
            <div className="flex flex-col gap-3 items-center py-14 sm:py-6 h-90pr sm:mt-10 flex-grow">
                {
                    router.pathname.includes("/login") &&
                    <Link href="/register">
                        <a>
                            <Button label={getString('registration', router.locale)} type='light' mode={btnSize()} onClick={handleNavItemClick} />
                        </a>
                    </Link>
                }
                {
                    router.pathname.includes("/register") &&
                    <Link href="/login">
                        <a>
                            <Button label={getString("login", router.locale)} type='light' mode={btnSize()} onClick={handleNavItemClick} />
                        </a>
                    </Link>
                }
            </div>
        </div>
    }

    const AdminNavbarContent = () => {
        return <div className="flex flex-col h-full">
            <header className="text-center pt-4">
                <Text type='body'>{`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}</Text>
            </header>
            <div className="flex flex-col gap-3 items-center py-14 sm:py-6 sm:mt-10 flex-grow">
                {menuItems['services']}
                {menuItems['users']}
                {menuItems['requests']}
                {menuItems['settings']}
                {menuItems['logout']}
            </div>
        </div>
    }

    const NavbarContent = () => {
        if (auth?.token === undefined || auth?.token === null) {
            return <AnonymousNavbarContent />;
        } else {
            switch (user?.role) {
                case Role.User: return <UserNavbarContent />;
                case Role.ServiceManager: return <ManagerNavbarContent />;
                case Role.Administrator: return <AdminNavbarContent />;
            }
        }
    }

    return <div className={`${props.className} ${bgColor()} ${hidden ? 'h-5' : 'h-screen'}`}>
        <button className="p-3 sm:hidden absolute right-2 top-2 " onClick={toggleNavbar}>
            <Image src={hidden ? MenuIcon : CloseIcon} height={25} width={25} className="" alt="menu-icon" title="toggle menu" />
        </button>
        <nav className={`${bgColor()} h-full w-full ${hidden ? 'hidden sm:flex sm:flex-col sm:items-center' : ''}`}>
            <Delayed waitBeforeShow={50}>
                {NavbarContent()}
            </Delayed>
        </nav>
    </div>
}

export default Navbar;
