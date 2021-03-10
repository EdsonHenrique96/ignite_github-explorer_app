import React from 'react';
import { RespositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

const repository = {
  name: "skin4dev",
  description: "skins for developers",
  url: "https://github.com"
}

export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RespositoryItem repository={repository}/>
        <RespositoryItem/>
        <RespositoryItem/>
        <RespositoryItem/>
      </ul>
    </section>
  )
}