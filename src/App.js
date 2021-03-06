import React from "react";
import { Route, Switch } from "react-router-dom";
import SleepEntryHomePage from "./Components/SleepEntryHomePage";
import EditEntry from "./Components/EditEntry";
import AddSleepEntry from "./Components/AddSleepEntry";
import "./App.css";
import WelcomePage from "./Components/WelcomePage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Signin from "./Components/SignIn";
import Signup from "./Components/Signup";
import PrivateRoute from "./Components/PrivateRoute";

// state data for sleep graph
const fakeRes = {
  id: 1,
  username: "joedoe",
  data: [
    {
      id: 1,
      date: "2020-04-21",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 6,
      moodBeforeSleep: 1,
      moodAfterSleep: 3,
      sleepScore: 7,
      user_id: 1,
    },
    {
      id: 2,
      date: "2020-04-22",
      sleepStart: "2020-04-22 021:15:00.000",
      sleepEnd: "2020-04-23 07:15:00",
      duration: 4,
      moodBeforeSleep: 4,
      moodAfterSleep: 4,
      sleepScore: 5.5,
      user_id: 1,
    },
    {
      id: 3,
      date: "2020-04-23",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 8,
      moodBeforeSleep: 2,
      moodAfterSleep: 2,
      sleepScore: null,
      user_id: 1,
    },
    {
      id: 4,
      date: "2020-04-24",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 8,
      moodBeforeSleep: 1,
      moodAfterSleep: 3,
      sleepScore: 7,
      user_id: 1,
    },
    {
      id: 5,
      date: "2020-04-25",
      sleepStart: "2020-04-22 021:15:00.000",
      sleepEnd: "2020-04-23 07:15:00",
      duration: 7,
      moodBeforeSleep: 4,
      moodAfterSleep: 4,
      sleepScore: 5.5,
      user_id: 1,
    },
    {
      id: 6,
      date: "2020-04-26",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 6,
      moodBeforeSleep: 2,
      moodAfterSleep: 2,
      sleepScore: null,
      user_id: 1,
    },
    {
      id: 7,
      date: "2020-04-27",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 4,
      moodBeforeSleep: 2,
      moodAfterSleep: 2,
      sleepScore: null,
      user_id: 1,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        {/* <Route exact path="/register" component={Form} /> */}
        
        <PrivateRoute path="/homepage" component={SleepEntryHomePage} />
       
        <PrivateRoute exact path="/addentry" component={AddSleepEntry} />
        <PrivateRoute path="/editentry/:id" component={EditEntry} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />

        <Route path="/welcome" component={WelcomePage} />
        <Route path="/" component={WelcomePage} />
       
      </Switch>

      {/* <PrivateRoute exact path="/my" component={MainPage} />
        <PrivateRoute path="/my/list" component={ListItem} /> */}


        {/* <Footer/> */}
    </div>
  );
}

export default App;
