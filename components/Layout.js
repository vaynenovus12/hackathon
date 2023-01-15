import Main from "../pages";
import Navbar from "./Navbar";
import NavbarVal from "./NavbarVal";
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        router.pathname == "/" ?
            <div>
                <Navbar />
                {children}
            </div>
            : router.pathname == "/validator" ?
                <div>
                    <NavbarVal />
                    {children}
                </div>
                : router.pathname == "/request" ?
                    <div>
                        <NavbarVal />
                        {children}
                    </div>
                    :
                    <div>
                        <Navbar />
                        {children}
                    </div>

    );
}

export default Layout;