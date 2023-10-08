export default function PageSection({ children, section = "section" }) {
  return <div id={section}>{children}</div>;
}
