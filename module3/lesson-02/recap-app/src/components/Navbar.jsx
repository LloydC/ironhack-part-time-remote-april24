import Button from './Button';

function Navbar(){
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <Button />
            <Button />
        </nav>
    )
}

export default Navbar;