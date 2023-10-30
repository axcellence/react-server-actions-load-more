import { PokemonList } from "./pokemon-list";

async function loadMore(offset?: number) {
  "use server";
  return <PokemonList serverAction={loadMore} offset={offset} limit={10} />;
}

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Pokémon List</h1>
      <form>
        <ul>
          <PokemonList serverAction={loadMore} />
        </ul>
      </form>
    </main>
  );
}
