import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const AppRoute = ({ component: Component, routeKey, routePath, blankLayout = false, metaData }) => {

    metaData = {
        ...metaData,
        footerEnabled: metaData?.footerEnabled ?? true,
        headerEnabled: metaData?.headerEnabled ?? true,
        customHeader: metaData?.customHeader ?? <Header />
    }

    console.log(routeKey)

    return (
        <>
            {metaData.customHeader}
            <Component />
            {metaData.footerEnabled && (
                <Footer />
            )}
        </>
    )
}

export default AppRoute;