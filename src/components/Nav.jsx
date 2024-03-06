import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav
            className="flex justify-between items-center  w-[1440px] m-[0,auto] backdrop-blur-[2px] h-20 p-4 cursor-default"
            onMouseEnter={props.textEnter}
            onMouseLeave={props.textLeave}>
            <h1>Logo</h1>
            <div className="flex gap-4 text-lightGray">
                <a className="p-4" href="#"

                >Results</a>
                <Link
                    to={"/driversStandings"}
                    className="p-4"
                >Drivers</Link>
                <a className="p-4" href="/"
                >Teams</a>
                <Link
                    className="p-4"
                    to={"/circuits"}
                >Circuits</Link>
            </div>
        </nav>
    )
}

export default Nav;