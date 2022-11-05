import { useQuery } from '@apollo/client';
import getAllShipsQuery from '../util/graphql/queries/getAllShips';
import Link from 'next/link'

interface ShipsList {
  id: number;
  name: string,
  image: string, 
  type: string
}

export default function ShipsList(){
  const { loading, error, data } = useQuery(getAllShipsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.ships.map(({ id, name, image, type }: ShipsList) => (
    <div key={id}>
      <Link href={"/details/"+id}>
        <h2 className="title">{name}</h2>
        <img src={image} alt="{name}" />
        <p>
          {type}
        </p>
      </Link>
    </div>
  ));
}