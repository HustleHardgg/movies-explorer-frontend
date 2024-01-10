import { Navigate, Route, Routes } from "react-router-dom";
import { protectedRoutes, publicRoutes, unauthenticatedRoutes } from "./routes";
import AppRoute from "./AppRoute";
import ProtectedRoute from "./ProtectedRoute";
import UnAuthenticatedRoute from "./UnAuthenticatedRoute";
import NotFound from '../components/NotFound/NotFound'

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate replace to={'/home'} />} />
            {/* Protected Routes */}
            <Route path='/' element={<ProtectedRoute />}>
                {protectedRoutes.map((route) => (
                    <Route 
                        path={route.path}
                        key={route.key} 
                        element={
                            <AppRoute 
                                routePath={route.path}
                                component={route.component}
                                routeKey={route.key}
                                metaData={route.meta}
                            />
                        }
                    />
                ))}
            </Route>        
 
            {/* Protected Routes */}
            <Route path='/' element={<UnAuthenticatedRoute />}>
                {unauthenticatedRoutes.map((route) => (
                    <Route 
                        path={route.path}
                        key={route.key} 
                        element={
                            <AppRoute 
                                routePath={route.path}
                                component={route.component}
                                routeKey={route.key}
                                metaData={route.meta}
                            />
                        }
                    />
                ))}
            </Route> 

            {/* Public Routes */}
            {publicRoutes.map((route) => (
                <Route 
                    path={route.path}
                    key={route.key} 
                    element={
                        <AppRoute 
                            routePath={route.path}
                            component={route.component}
                            routeKey={route.key}
                            metaData={route.meta}
                        />
                    }
                />
            ))}

            <Route path='/*' element={<NotFound />} />
        </Routes>

    )
}

export default Router;
