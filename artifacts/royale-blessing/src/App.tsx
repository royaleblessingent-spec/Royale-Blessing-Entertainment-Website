import { Switch, Route, Router as WouterRouter } from "wouter";
import { Home } from "@/pages/Home";
import { PerformingArts } from "@/pages/PerformingArts";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/performing-arts" component={PerformingArts} />
      <Route>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-gray-400 mb-6">Page not found.</p>
            <a href={import.meta.env.BASE_URL} className="text-[#C9A84C] hover:underline">← Back to Home</a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
