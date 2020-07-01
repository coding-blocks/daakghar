import { Router } from 'express'
import { apiMediumsRoute } from './mediums';
import { apiTemplatesRoute } from './templates';
import { apiMessagesRoute } from './messages';
import { apiRecipientsRoute } from './recipient';

const apiRoute = Router();

apiRoute.use('/mediums', apiMediumsRoute)
apiRoute.use('/templates', apiTemplatesRoute)
apiRoute.use('/messages', apiMessagesRoute)
apiRoute.use('/recipients', apiRecipientsRoute)

export { 
    apiRoute
}