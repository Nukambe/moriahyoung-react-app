import headshot from '../../assets/content/Moriah_Young-_0534.jpg'

const socials = [
    {icon: 'fi fi-brands-facebook', url: 'https://www.facebook.com/moriah.young.5', alt: 'facebook icon'},
    {icon: 'fi fi-brands-instagram', url: 'https://www.instagram.com/moriahlyoung/', alt: 'instagram icon'},
    {icon: 'fi fi-brands-soundcloud', url: 'https://soundcloud.com/moriah-young-463207945', alt: 'soundcloud icon'},
    {icon: 'fi fi-brands-imdb', url: 'https://www.imdb.com/name/nm12554084/', alt: 'imdb icon'}
];

export default function Home() {

    return (
        <>
            <h1 style={{
                textAlign: 'center',
                margin: '0.2em 0'
            }}>Moriah L Young</h1>
            <h2 style={{
                textAlign: 'center'
            }}>Voice Actor + On Camera Talent</h2>
            <img 
                src={headshot} alt='headshot'
                style={{
                    display: 'block',
                    width: '10em',
                    margin: '0 auto'
                }}
            />
            <p style={{
                width: '20em',
                margin: '0 auto',
                textAlign: 'justify'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div style={{
                width: '16em',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-around'
            }}>
            {
                socials.map((social, index) => (
                    <a key={index} href={social['url']} target='_blank' rel='noreferrer'>
                        <i className={social['icon']} style={{
                            fontSize: '2em',
                            color: 'black'
                        }}></i>
                    </a>
                ))
            }
            </div>
        </>
    );
}
