import { gql } from '@apollo/client';

const getAllShipsQuery = gql`
  query shipsQuery{
    ships {
        id
        name
        image
        type
    }
  }

`;
export default getAllShipsQuery;