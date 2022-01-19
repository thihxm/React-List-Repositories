import { useEffect, useState } from 'react'

import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/thihxm/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data)
      })
  }, [])

  return (
    <section className="repository-list">
      <h1>Repositories list</h1>

      <ul>
        {repositories.map((repository: Repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  )
}
