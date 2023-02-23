import "./App.css";
import LoginPage from "./pages/Login/Login";
import DashboardPage from "./pages/Dashboard";
import News from "./pages/News";
import QRCode from "./pages/GenerateCode";
import HomePage from "./pages/Home";
import Mealss from "./components/Meals/Mealss";
import Attendance from "./pages/Attendance";

import Mealsss from "./components/Meals/Mealsss";
import Trainer from "./pages/Trainers";
import RegisterPage from "./pages/Register";
import ComplaintPage from "./components/complaints";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserComplaints from "./pages/UserComplaints";
import GymLocationPage from "./pages/Gymlocation";
import AdminAttendance from "./pages/AdminAttendance";
import Dash from "./pages/dashboard/dash";
import UserDashboard from "./pages/dashboard/UserDashboard";
import Profile from "./pages/Profile/Profile";
import NewsPage from "./pages/News";
import UserViewAnnouncementPage from "./pages/UserViewAnnouncement";
import ComplaintsTable from "./pages/Complaints/ComplaintsTable";
import AttendanceTable from "./pages/AttendanceTable/AttendanceTable";

import ToDoListPage from "./pages/Todolist";

import LoseWeightPage from "./pages/LoseWeight";
import GainWeightPage from "./pages/GainWeight";
import ProfileSummary from "./pages/Profile/ProfileSummary";
import ProfileSumary from "./pages/Profile/Profilesumary";
import TakeAttendancePage from "./pages/Takeattendance";
import BarGraphPage from "./components/Charts/BarGraph";
import LineChartPage from "./components/Charts/LineChartDemo";
//import NoticeBoard from "./pages/Profile/NoticeBoard";
import OverallPage from "./pages/OverallPage";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/LineChart'>
            <LineChartPage />
          </Route>

          <Route path='/mealsss'>
            <Mealsss />
          </Route>
          <Route path='/BarGraph'>
            <BarGraphPage />
          </Route>
          <Route path='/Overall'>
            <OverallPage />
          </Route>

          <Route path='/TakeAttendance'>
            <TakeAttendancePage />
          </Route>
          <Route path='/attendance'>
            <Attendance />
          </Route>
          <Route path='/profilesumary'>
            <ProfileSumary />
          </Route>
          <Route path='/profilesummary'>
            <ProfileSummary />
          </Route>
          <Route path='/Gain'>
            <GainWeightPage />
          </Route>
          <Route path='/mealss'>
            <Mealss />
          </Route>
          <Route path='/Lose'>
            <LoseWeightPage />
          </Route>
          <Route path='/ToDoList'>
            <ToDoListPage />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/attendanceTable'>
            <AttendanceTable />
          </Route>
          <Route path='/UserProfile'>
            <UserDashboard />
          </Route>

          <Route path='/dash'>
            <Dash />
          </Route>
          <Route path='/complaintsTable'>
            <ComplaintsTable />
          </Route>

          <Route path='/UserViewAnnouncement'>
            <UserViewAnnouncementPage />
          </Route>

          <Route path='/news'>
            <NewsPage />
          </Route>
          <Route path='/Register'>
            <RegisterPage />
          </Route>
          <Route path='/adminattendance'>
            <AdminAttendance />
          </Route>
          <Route path='/gymlocation'>
            <GymLocationPage />
          </Route>
          <Route path='/news'>
            <News />
          </Route>

          <Route path='/usercomplaints'>
            <UserComplaints />
          </Route>
          <Route path='/announcement'>
            <News />
          </Route>

          <Route path='/Complaints'>
            <ComplaintPage />
          </Route>

          <Route path='/welcome'>
            <DashboardPage />
          </Route>
          <Route path='/qrcode'>
            <QRCode />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>

          <Route path='/trainers'>
            <Trainer />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    // <DashboardPage />
    // </div>
  );
}

export default App;
