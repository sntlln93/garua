import { DashboardLayout } from "./components/layouts/dashboard";
import { Editor } from "./features/Editor";

function App() {
  return (
    <DashboardLayout>
      <Editor />
    </DashboardLayout>
  );
}

export default App;
