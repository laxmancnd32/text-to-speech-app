import { Outlet } from "react-router-dom";

import "./style.scss";

const App = () => {
    return (
        <div className="app-container">
            {/* <Header /> */}
            <main className="main-container">
                <Outlet />
            </main>
        </div>
      );
}

export default App;