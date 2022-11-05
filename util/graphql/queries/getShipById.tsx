import { gql } from '@apollo/client';

const oneShipByIdQuery = gql`
  query shipByIdQuery($id: ID!) {
    ship(id: $id) {
      type
      name
      weight_kg
      year_built
      class
      missions {
          flight
          name
      }
      home_port
      image
    }
  }
`;
export default oneShipByIdQuery;
