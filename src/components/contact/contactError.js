export default function ContactError({ name }) {
    return (
        <p style={{
            color: 'red',
            fontSize: '1em',
            margin: '0'
        }}>Invalid {name}!</p>
    );
}
