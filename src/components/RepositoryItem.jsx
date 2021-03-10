export function RespositoryItem({ repository }) {
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
