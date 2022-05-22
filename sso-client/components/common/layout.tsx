import Navbar from "./navbar";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="sm:h-screen sm:flex sm:flex-row-reverse">
            <main className="absolute sm:relative sm:h-screen w-full bg-neutral-100 sm:overflow-y-auto">{children}</main>
            <Navbar className="absolute w-screen sm:h-screen sm:relative sm:w-72" />
        </div>
    )
}

export default Layout;