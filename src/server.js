import { Server, Model, Response } from "miragejs";

export function makeServer({ environment = "development" } = {}) {

    let server = new Server({
        environment,

        models: {
            user: Model,
            task: Model,
            subtask: Model
        },

        seeds(server) {
            // create users
            server.create("user", { email: "will@smith.com", password: "will smith", role: "admin" });
            server.create("user", { email: "toni@hamilton.com", password: "toni hamilton", role: "employee" });
            server.create("user", { email: "alfred@harvey.com", password: "alfred harvey", role: "employee" });

            server.create("task", { description: "Front-end", state: 'doing' });
            server.create("task", { description: "Back-end", state: 'doing' });
            server.create("task", { description: "UI Design", state: 'done' });
            server.create("task", { description: "Devops", state: 'pending' });


            server.create("subtask", { description: "landing page", state: 'doing', taskId: '1' });
            server.create("subtask", { description: "dashboard", state: 'pending', taskId: '1' });
            server.create("subtask", { description: "authentication", state: 'pending', taskId: '2' });
            server.create("subtask", { description: "endpoints", state: 'done', taskId: '2' });
            server.create("subtask", { description: "admin panel", state: 'done', taskId: '3' });
            server.create("subtask", { description: "user panel", state: 'done', taskId: '3' });
            server.create("subtask", { description: "docker", state: 'pending', taskId: '4' });
            server.create("subtask", { description: "server config", state: 'pending', taskId: '4' });
        },

        routes() {
            this.namespace = "api";

            this.post("/login", (schema, request) => {
                const { email, password } = JSON.parse(request.requestBody);
                const user = schema.users.findBy({ email, password });
                if (!user) {
                    return new Response(401, {}, { msg: "Email or password is incorrect!" });
                }
                return new Response(200, {}, { user });
            });

            this.get("/tasks", (schema) => {
                return schema.tasks.all();
            });

            this.post("/tasks", (schema, request) => {
                let newTask = JSON.parse(request.requestBody);
                return schema.tasks.create(newTask)
            });

            this.patch("/tasks", (schema, request) => {
                let { id, state } = JSON.parse(request.requestBody);
                return schema.tasks.find(id).update({ state })
            });

            this.get("/subtasks/:id", (schema, request) => {
                return schema.subtasks.where({ taskId: request.params.id });
            });

            this.post("/subtasks", (schema, request) => {
                let newSubtask = JSON.parse(request.requestBody);
                return schema.subtasks.create(newSubtask)
            });

            this.patch("/subtasks", (schema, request) => {
                let { id, state } = JSON.parse(request.requestBody);
                return schema.subtasks.find(id).update({ state })
            });
        }
    })

    return server
}
