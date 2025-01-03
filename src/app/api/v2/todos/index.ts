import { createTodo } from "@/app/api/v2/todos/create-todo.api"
import { deleteTodo } from "@/app/api/v2/todos/delete-todo.api"
import { getTodo } from "@/app/api/v2/todos/get-todo.api"
import { listTodo } from "@/app/api/v2/todos/list-todo.api"
import { updateTodo } from "@/app/api/v2/todos/update-todo.api"
import { createRouter } from "@/common/create-app"

export const v2TodosRoute = createRouter()
  .route("/", listTodo)
  .route("/", createTodo)
  .route("/", getTodo)
  .route("/", updateTodo)
  .route("/", deleteTodo)
