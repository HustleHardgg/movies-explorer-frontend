import { Navigate, Outlet } from "react-router-dom"
import { AUTHENTICATED_ENTRY, TOKEN, UNAUTHENTICATED_ENTRY } from "../constants/AppConstants"

const ProtectedRoute = () => {
    const token = localStorage.getItem(TOKEN)

    if (token)
    {
        return <Outlet />
    }
    else
    {
        return <Navigate to={UNAUTHENTICATED_ENTRY} replace />
    }
}

export default ProtectedRoute