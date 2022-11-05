import { gql } from '@apollo/client';

const oneShipByIdQuery = gql`
  query shipByIdQuery($id: ID!) {
    ship(id: $id) {
      type
      weight_kg
      year_built
      class
      missions {
          flight
          name
      }
      home_port
    }
  }
`;
export default oneShipByIdQuery;
