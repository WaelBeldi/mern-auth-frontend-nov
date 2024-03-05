import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
  const token = useSelector(state => state.authReducer.token)
  // const isAuth = false
  return (
    <>
      {token ? children : <Navigate to="/" />}
    </>
  )
}

export default PrivateRoute