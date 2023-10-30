import { LoadMore } from "./load-more";

export async function PokemonList({
  offset = 0,
  limit = 10,
  serverAction,
}: {
  offset?: number;
  limit?: number;
  serverAction: () => Promise<React.JSX.Element>;
}) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
    .then((res) => res.json())
    .then((res) => res.results)
    .then((res) => res.map((pokemon: { name: string }) => pokemon.name));

  return (
    <>
      {pokemon.map((pokemon: string) => (
        <li key={pokemon}>{pokemon}</li>
      ))}

      <LoadMore serverAction={serverAction} offset={offset} />
    </>
  );
}
