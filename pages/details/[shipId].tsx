import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import getShipByIdQuery from '../../util/graphql/queries/getShipById';
import Link from 'next/link'
import css from '../../styles/Details.module.scss'
import Back from '../../public/arrow-left.svg';
import Image from 'next/image';
import Head from 'next/head'
import DataBox from '../../components/shipDetails/dataBox';


interface MissionData{
  flight: string,
  name: string
}


function ShipDetail(){
    const router = useRouter()
    const id = router.query.shipId

    const { loading, error, data } = useQuery(getShipByIdQuery, {
      variables: { id }
    });

    if (loading) return <div className="loadingOverly"><div className="loader"></div></div>;
    if (error) return <p>Error :(</p>;

    return( 
      <>
        <Head>
          <title>{data.ship.name} | Ships app</title>
          <meta name="description" content="Ships app - displaying ships from spacex api" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={css.detailHeading}>
          <div className={css.imageWrapper}>
            {
              data.ship.image ?
              <Image src={data.ship.image} alt={"Image of" + id} width={300} height={200} />
              :
              ''
            }
          </div>
          <Link className="button" href="/">
            <Back />
          </Link>
          <div className={css.detailInfo}>
            <h1 className={"profile-title " + css.shipName}>{data.ship.name}</h1>
            {
              data.ship.type ? 
              <div className={"list-title " + css.shipType}>
                Type: {data.ship.type}
              </div>
              : 
              ''
            }
          </div>
        </div>

        <h3 className="playful arrow-down">Basic info</h3>
        <div className={css.dataBoxList}>
          {/*year built*/}
          {
            data.ship.year_built ? 
            <DataBox dataBoxTitle="Year built:" dataBoxValue={data.ship.year_built} />
            : 
            ''
          }
          {/*weight*/}
          {
            data.ship.weight_kg ? 
            <DataBox dataBoxTitle="Weight:" dataBoxValue={data.ship.weight_kg} />
            : 
            ''
          }
          {/*class*/}
          {
            data.ship.class ? 
            <DataBox dataBoxTitle="Class:" dataBoxValue={data.ship.class} />
            : 
            ''
          }
          {/*home port*/}
          {
            data.ship.home_port ? 
            <DataBox dataBoxTitle="Home port:" dataBoxValue={data.ship.home_port} />
            : 
            ''
          }
        </div>

        {/*missions*/}
        <h3 className="playful arrow-down">Missions</h3>
        <div className={css.missionList}>
        {
          data.ship.missions.length > 0 ?
            data.ship.missions.map(({ flight, name }: MissionData, index:number) => {
              return (
                <div className={css.missionItem} key={index}>
                  <div className={"list-title " + css.missionName}>
                    {name}
                  </div>
                  <div className={"list-subtitle" + css.missionFligth}>
                    Flight: {flight}
                  </div>
                </div>
              )
            })
          :
          <div className={css.noMission}>
            No missions :(
          </div>
        }
        </div>

        <div className={css.backToList}>
          <Link href="/" className="playful">
            <span className="button shadow">
              <Back />
            </span>
            Back to the list
          </Link>
        </div>
      </>
    )
}

export default ShipDetail