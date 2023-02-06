import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import routes from '@/router'

function App() {
  return <div className='App'>
    <Routes>
      {routes.map(route => <Route exact={route.exact} key={route.path} path={route.path} element={<route.component />} />)}
    </Routes>
  </div>
}

export default App
