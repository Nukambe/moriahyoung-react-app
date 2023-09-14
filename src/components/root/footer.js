import SocialLinks from '../socials/socials'

export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      marginBottom: '0.2em',
      paddingTop: '2em'
    }}>
      <SocialLinks fontSize='1.2em' color='gray' />
      <p
        style={{
          textAlign: "center",
          margin: "0",
          width: "100%",
          color: 'gray'
        }}
      >© 2023 Moriah Young</p>
    </footer>
  );
}
