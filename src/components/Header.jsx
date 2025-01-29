function Header(){
    return(
        <header className="section flex-row justify-between">
            <h1 className="unstyle-links"> 
                <a href="/">
                    Nicols Rojas
                </a>
            </h1>
            <nav className="unstyle-lists self-center">
                <ul className="flex-row unstyle-links">
                    <li>
                        <a href="/personal-portfolio/dashboard/">Dashboard</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;