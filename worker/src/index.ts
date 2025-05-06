
import { createRoute, OpenAPIHono } from "@hono/zod-openapi"
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

import { html } from 'hono/html'
import { swaggerUI } from '@hono/swagger-ui'

export interface ENV {
	DATABASE_URL: string;
  }
  
const app = new OpenAPIHono<{ Bindings: ENV }>()

const route = createRoute({
	method: 'get',
	path: '/',
	responses : {
		200 : {
			description : 'TEST'
		}
	}
  });
  app.openapi(route, async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	  }).$extends(withAccelerate());

	  return c.json("test", 200)
  });

  app.get(
	'/ui',
	swaggerUI({
	  url: '/doc',
	})
  )


  app.doc('/doc', {
	info: {
	  title: 'An API',
	  version: 'v1',
	},
	openapi: '3.1.0',
  })
export default app