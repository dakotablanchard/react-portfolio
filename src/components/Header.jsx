import { Parallax } from 'react-parallax';

const Header = ({ pageTitle }) => {
    if (pageTitle === 'Home') {
        return (
            <header className="hero">
                <div className="pageTitle">
                    <p className="hello">Hello, I'm</p>
                    <p className="name">Dakota Blanchard</p>
                    <p className="job">Full Stack Developer</p>
                </div>
            </header>
        );
    }

    return (
        <header className="hero">
            <h1 className="pageTitle">{pageTitle}</h1>
        </header>
    );
}

export default Header;