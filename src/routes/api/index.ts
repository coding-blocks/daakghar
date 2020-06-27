import { Router } from 'express'
import { apiMediumsRoute } from './mediums';
import { apiTemplatesRoute } from './templates';

const apiRoute = Router();

apiRoute.use('/mediums', apiMediumsRoute)
apiRoute.use('/templates', apiTemplatesRoute)

export { 
    apiRoute
}