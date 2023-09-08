import avatar from '../../assets/Moriah_Young-_Avatar.jpg';
import './header.css'

export default function Header() {
    return (
        <header>
            <img
                src={avatar}
                alt='Moriah Young avatar'
                className='avatar'
            />
        </header>
    );
}
