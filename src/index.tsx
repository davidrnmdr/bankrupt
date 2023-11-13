import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Model, createServer } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website design",
          type: "deposit",
          category: "Design",
          value: 2000,
          date: new Date("07-17-2022 12:00:00"),
        },

        {
          id: 2,
          title: "Dog food",
          type: "withdraw",
          category: "Food",
          value: 110,
          date: new Date("07-16-2022 12:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
