import { TAG_AUTH_v2 } from "@/common/constants/app.constant"
import { HttpStatusCodes } from "@/common/constants/http-status.constant"
import { createRouter } from "@/common/create-app"
import { createJsonContent, createJsonContentRequired } from "@/common/helpers/json-content.helper"
import { errorSchema } from "@/common/schemas/error.schema"
import { AppRouteHandler } from "@/common/types/app.type"
import { HttpMethod } from "@/common/types/http-method.type"
import db from "@/db"
import { insertUsersSchema, selectUsersSchema, users } from "@/db/schemas"
import { createRoute } from "@hono/zod-openapi"

const route = createRoute({
  tags: [TAG_AUTH_v2],
  method: HttpMethod.POST,
  path: "/register",
  request: {
    body: createJsonContentRequired("Register body", insertUsersSchema),
  },
  responses: {
    [HttpStatusCodes.OK]: createJsonContent("Register successful", selectUsersSchema),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: createJsonContent(
      "The validation error(s)",
      errorSchema(insertUsersSchema)
    ),
  },
})

const handler: AppRouteHandler<typeof route> = async (c) => {
  const user = c.req.valid("json")
  // TODO: check if email available ?
  // send email verification
  const [inserted] = await db.insert(users).values(user).returning()
  return c.json(inserted, HttpStatusCodes.OK)
}

export const register = createRouter().openapi(route, handler)
