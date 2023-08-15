import { Header } from "./contry/components/Header"
import { RouterProvider } from "react-router-dom";
import { router } from "./router/main-router";

export const App = () => {
  return (
    <main>
        <Header />
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
