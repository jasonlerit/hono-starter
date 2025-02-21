import { v1IndexRoute } from "@/app/api/v1/index.route"
import { v1TodosRoute } from "@/app/api/v1/todos/todos.index"
import { v2AuthRoute } from "@/app/api/v2/auth"
import { v2HealthRoute } from "@/app/api/v2/health"
import { v2TodosRoute } from "@/app/api/v2/todos"
import { createApp } from "@/common/create-app"
import { setupOpenAPI } from "@/common/setup-open-api"

const app = createApp()

setupOpenAPI(app)

app.route("/api/v1", v1IndexRoute)
app.route("/api/v1", v1TodosRoute)
app.route("/api/v2", v2HealthRoute)
app.route("/api/v2", v2AuthRoute)
app.route("/api/v2", v2TodosRoute)

export default app
