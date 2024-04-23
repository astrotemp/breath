// pages/api/[...slugs].ts
import { Elysia, t } from 'elysia'
import type {APIRoute} from 'astro'

const app = new Elysia({ prefix: '/api' }) 
    .get('/', () => 'hi')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const ALL: APIRoute = ({request}) => app.handle(request)
