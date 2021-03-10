interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    url: string;
  }
}

export function RespositoryItem({ repository }: RepositoryItemProps) {
  return(
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'Default'}</p>

      <a href={repository?.url ?? '#'}>
        Acessar repositório
      </a>
    </li>
  );
}
