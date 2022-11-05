import { useQuery } from '@apollo/client';
import getAllShipsQuery from '../util/graphql/queries/getAllShips';
import Link from 'next/link'
import Image from 'next/image'


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

  return (
    <div className="ships-list">
    {
      data.ships.map(({ id, name, image, type }: ShipsList) => (
        <Link className="list-item" key={id} href={"/details/"+id}>
          <div className="image-wrapper">
            {
              image != null ? 
              <Image src={image} alt="{name}" width={300} height={200} />
              :
              ''
            }
          </div>
          <div className="info">
            <h2 className="list-title">{name}</h2>
            <span className="list-subtitle">
              {type}
            </span>
          </div>
        </Link>
      ))
    }
    </div>
  )
}