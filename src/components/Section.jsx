export default function Section({ id, title, lead, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>{title}</h2>
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}
