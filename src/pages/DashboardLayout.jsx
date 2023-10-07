
import Wrapper from "../assets/wrappers/Dashboard"
import { Outlet } from "react-router-dom"
import { BigSidebar, Navbar, SmallSidebar } from "../components";
  const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
      <SmallSidebar />
          <BigSidebar />
            <div>
              <Navbar />
                <div className="dasboard-page">
                  <Outlet />
                </div>
            </div>
      </main>
      </Wrapper>
  )
}

export default DashboardLayout