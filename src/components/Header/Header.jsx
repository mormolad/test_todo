
import './Header.css';
import logo from '../../image/logo.svg'

export default function App() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo" />
        </header>
    );
}