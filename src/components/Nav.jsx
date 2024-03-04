

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
                <a className="p-4" href="#"
                >Drivers</a>
                <a className="p-4" href="#"
                >Teams</a>
                <a className="p-4" href="#"
                >Circuits</a>
            </div>
        </nav>
    )
}

export default Nav;