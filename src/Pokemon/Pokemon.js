import React from "react";
import useSWR from "swr";

const Pokemon = ({ name }) => {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const { sprites } = data;

  if (error) return <h2>Error Loading Pokemon</h2>;

  return (
    <>
      {name}
      <img src={sprites.front_default} alt={name} />
    </>
  );
};

export default Pokemon;
