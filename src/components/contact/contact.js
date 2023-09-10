import SocialLinks from "../socials/socials";

const divStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: "1em",
};

export default function Contact() {
  return (
    <div
      style={{
        paddingTop: "7em",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <SocialLinks />
      <form
        style={{
          marginTop: "5em",
        }}
      >
        <div style={divStyle}>
          <label htmlFor="name">Name</label>
          <input id="name" />
        </div>
        <div style={divStyle}>
          <label htmlFor="email">Email</label>
          <input id="email" />
        </div>
        <div style={divStyle}>
          <label htmlFor="inquiry">Inquiry</label>
          <textarea
            id="inquiry"
            rows="7"
            style={{
              resize: "none",
            }}
          />
        </div>
      </form>
    </div>
  );
}
