export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'This is a description'}</p>

      <a
        href={repository?.link ?? ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        Access Repository
      </a>
    </li>
  )
}
