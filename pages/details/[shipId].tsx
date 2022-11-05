import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import getShipByIdQuery from '../../util/graphql/queries/getShipById';
import Link from 'next/link'
import css from '../../styles/Details.module.scss'
import Bg from '../../public/bg.svg';
import Back from '../../public/arrow-left.svg';
import Image from 'next/image';
import Head from 'next/head'

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
            <div className={css.dataBox}>
              <Bg />
              <div className={css.dataBoxContent}>
                <span className={css.title + " playful"}>Year built:</span>
                <span className={css.data  + " list-title"}>{data.ship.year_built}</span>
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
                <span className={css.title + " playful"}>Weight:</span>
                <span className={css.data + " list-title"}>{data.ship.weight_kg}</span>
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
                <span className={css.title + " playful"}>Class:</span>
                <span className={css.data + " list-title"}>{data.ship.class}</span>
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
                <span className={css.title + " playful"}>Home port:</span>
                <span className={css.data + " list-title"}>{data.ship.home_port}</span>
              </div>
            </div>
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