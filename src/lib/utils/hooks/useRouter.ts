/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 30.09.20 - 23:42
 **/
import { useMemo } from 'react'
import { useParams, useLocation, useHistory, useRouteMatch  } from 'react-router-dom'
import * as queryString from 'querystring'

function useRouter() {
    const params = useParams()
    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch()

    return useMemo(() => {
        return {
            push: history.push,
            replace: history.replace,
            pathname: location.pathname,
            query: {
                ...queryString.parse(location.search),
                ...params
            },
            match,
            location,
            history
        }
    }, [params, match, location, history])
}

export default useRouter

