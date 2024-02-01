import "./CoreComponents.css";

export function CoreConcept({
  src = "",
  title = "",
  description = "",
  id = "",
}) {
  return (
    <li key={id} id={id}>
      <img src={src} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  );
}
