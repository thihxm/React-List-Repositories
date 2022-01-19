export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name}</strong>
      <p>{repository?.description}</p>

      <a href={repository?.html_url} target="_blank" rel="noopener noreferrer">
        Access Repository
      </a>
    </li>
  )
}
