import gql from "graphql-tag";
import {useQuery } from "@apollo/react-hooks"

const MEALS_QUERY = gql`
  query meals {
    meals {
      id
      name
      satisfactionLevel
    }
  }
`;

function Home() {
  const {data, loading, error} = useQuery(MEALS_QUERY);

  if(loading) <p>Loading!</p>
  if(error) return <p>Error: {JSON.stringify(error)}</p>

  return (
    <div>
      <p>Meals</p>
      <ul>
        {data.meals.map(meal => (
          <li key={meal.id}>{meal.name} @ {meal.satisfactionLevel}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home;
