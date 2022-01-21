import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs"
createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          type: "deposit",
          title: "Frelancer site",
          value: 1000,
          category: "Salário",
          createdAt: new Date(),
        },
        {
          id: 2,
          type: "deposit",
          title: "Salário",
          value: 1000,
          category: "Salário",
          createdAt: new Date(),

        },
        {
          id: 3,
          type: "withdraw",
          title: "Almoço",
          value: 50,
          category: "Almoço",
          createdAt: new Date(),
        },
        {
          id: 4, type: "deposit", title: "Salário", value: 1000, category: "Salário", createdAt: new Date(),
        },
      ]
    })
  },
  routes() {
    this.namespace = "api"
    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transactions', data)
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
