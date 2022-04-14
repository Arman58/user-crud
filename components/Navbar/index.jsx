import Link from 'next/link';
import {useRouter} from 'next/router';


const Navbar = () => {

    const menu = [
        {url: '/', name: "home"},
        {url: '/users', name: "users"},
    ];


    const router = useRouter();

    const handleClick = (e) => {
        e.currentTarget.blur();
    };

    return (
        <nav className="navbar shadow-lg bg-neutral justify-between text-neutral-content lg:px-8 pr-8">
            <div>
                <div className="flex xs:ml-2 md:ml-2 sm:ml-2">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn  btn-square btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="p-2 shadow menu dropdown-content bg-neutral rounded-box w-52"
                            onClick={handleClick}
                        >
                            {menu.map((item) => (
                                <li key={item.name}>
                                    <a
                                        className={`${item.url === router.pathname && 'text-primary'}`}
                                        onClick={() => router.push(item.url)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="px-2 mx-2">
                    <div className="items-stretch hidden lg:flex">
                        {menu.map((item) => (
                            <div key={item.name}>
                                <div tabIndex={0} className="flex">
                                    <Link href={item.url} passHref>
                                        <a className={`btn btn-ghost btn-sm rounded-btn ${item.url === router.pathname && 'text-primary'}`}>
                                            {item.name}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;