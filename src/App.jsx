// import Tasks from "./components/Tasks"
import { Toaster } from "sonner"
import Tasks from "./components/Tasks"
import Sidebar from "./components/sidebar"

function App() {
  return (
    <div className="flex">
      <Toaster
        toastOptions={{
          style: {
            color: "#35383E",
          },
        }}
      />
      <Sidebar />
      <Tasks />
    </div>
  )
}
export default App
