import { Navigate, Outlet } from "react-router-dom"
import { AUTHENTICATED_ENTRY, TOKEN } from "../constants/AppConstants"

const UnAuthenticatedRoute = () => {
    const token = localStorage.getItem(TOKEN)

    if (!token)
    {
        return <Outlet />
    }
    else
    {
        return <Navigate to={AUTHENTICATED_ENTRY} replace />
    }
}

export default UnAuthenticatedRoute