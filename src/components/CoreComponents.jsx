import "./CoreComponents.css";

export function CoreConcept({
  src = "",
  title = "",
  description = "",
  key = "",
  id = "",
}) {
  return (
    <li key={key} id={id}>
      <img src={src} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  );
}
