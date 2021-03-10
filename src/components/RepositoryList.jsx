import { useState, useEffect } from 'react';
import { RespositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

const repository = {
  name: "skin4dev",
  description: "skins for developers",
  url: "https://github.com"
}

const REPO_URL = 'https://api.github.com/orgs/rocketseat/repos';

export function RepositoryList() {
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    fetch(REPO_URL)
      .then(response => response.json())
      .then(setRepositories);
  }, []);

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        { repositories.map(repository => {
          const { name, description, html_url: url } = repository;

          const repositoryProps = { name, description, url };

          return <RespositoryItem key={repository.id} repository={repositoryProps}/>

        }) }
      </ul>
    </section>
  )
}