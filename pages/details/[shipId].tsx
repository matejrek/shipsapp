import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import getShipByIdQuery from '../../util/graphql/queries/getShipById';
import Link from 'next/link'
import css from '../../styles/Details.module.scss'
import Bg from '../../public/bg.svg';

function ShipDetail(){
    const router = useRouter()
    const id = router.query.shipId

    const { loading, error, data } = useQuery(getShipByIdQuery, {
      variables: { id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return( 
      <>
        <Link href="/">Back home</Link>
        <h1 className="ship-name">{id}</h1><br/>
        {
          data.ship.type ? 
          <div className="ship-type">
            Type: {data.ship.type}
          </div>
          : 
          ''
        }

        <h3 className="playful">Basic info</h3>
        {/*year built*/}
        {
          data.ship.year_built ? 
          <div className={css.dataBox}>
            <Bg />
            <div className={css.dataBoxContent}>
              <span>Year built:</span>
              {data.ship.year_built}
            </div>
          </div>
          : 
          ''
        }
        {/*weight*/}
        {
          data.ship.weight_kg ? 
          <div className={css.dataBox}>
            <Bg />
            <div className={css.dataBoxContent}>
              <span>Weight:</span>
              {data.ship.weight_kg}
            </div>
          </div>
          : 
          ''
        }
        {/*class*/}
        {
          data.ship.class ? 
          <div className={css.dataBox}>
            <Bg />
            <div className={css.dataBoxContent}>
              <span>Class:</span>
              {data.ship.class}
            </div>
          </div>
          : 
          ''
        }
        {/*home port*/}
        {
          data.ship.home_port ? 
          <div className={css.dataBox}>
            <Bg />
            <div className={css.dataBoxContent}>
              <span>Home port:</span>
              {data.ship.home_port}
            </div>
          </div>
          : 
          ''
        }


        {/*missions*/}
      </>
    )
}

export default ShipDetail