// IMPORT DEPENDENCIES
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const routing = () => {
  try {

    return (
      <Switch>
        {
          routes.map((route, index) => {
            return (
              <Route
                exact
                key={index}
                path={route.path}
                render={(props) => (
                  < route.component {...props} />
                )}

              />
            )

          })
        }
      </Switch>
    )

  } catch (error) {
    console.error(error)
    return null
  }
}

// EXPORT
export default routing