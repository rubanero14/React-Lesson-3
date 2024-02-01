import "./CoreComponents.css";

export function CoreConcept({
  src = "",
  title = "",
  description = "",
}) {
  return (
    <li>
      <img src={src} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  );
}
