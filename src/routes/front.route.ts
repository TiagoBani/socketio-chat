import {join} from 'path'
import {Request, Response, Router } from 'express'

const frontRoutes = Router()

frontRoutes.get('/', (req: Request, res: Response) => {
    const publicFolder = join(__dirname, '..', '..', 'public')
    res.sendFile(`${publicFolder}/index.html`);
});

export default frontRoutes