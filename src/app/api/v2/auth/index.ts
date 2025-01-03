import { register } from "@/app/api/v2/auth/register.api"
import { createRouter } from "@/common/create-app"

export const v2AuthRoute = createRouter().route("/", register)
