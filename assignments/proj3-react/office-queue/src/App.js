import { React, useEffect, useState } from "react";
import "./App.css";

/*
Queue item = {desc, datetime, id}
*/

export default function App() {
  const [account, setAccount] = useState(null);
  const [queueStatus, setQueueStatus] = useState(false);
  const [queueList, setQueueList] = useState([]);
  const [queueCount, setQueueCount] = useState(0);

  const addQueueItem = (formText, dateObj) => {
    let oldQueueList = queueList.slice();
    const newObj = { text: formText, date: dateObj, id: queueCount };
    setQueueCount(queueCount + 1);
    console.log("--- Pre queueList Change: ");
    console.log(queueList);
    setQueueList([...oldQueueList, newObj]);
    console.log("--- Post queueList Change: ");
    console.log(queueList);
  };

  if (account === "Student") {
    return (
      <>
        <MainPage
          queueStatus={queueStatus}
          account={account}
          setAccount={setAccount}
        />
        <StudentPage
          queueStatus={queueStatus}
          queueList={queueList}
          setQueueList={setQueueList}
          addQueueItem={addQueueItem}
        />
      </>
    );
  } else if (account === "Admin") {
    return (
      <>
        <MainPage
          queueStatus={queueStatus}
          account={account}
          setAccount={setAccount}
        />
        <AdminPage
          queueStatus={queueStatus}
          setQueueStatus={setQueueStatus}
          queueList={queueList}
          setQueueList={setQueueList}
        />
      </>
    );
  }
  return <LoginPage loginFunc={setAccount} />;
}

function LoginPage(props) {
  return (
    <div className="login-page">
      <div className="login-buttons">
        <button
          className="login-button"
          onClick={() => props.loginFunc("Student")}
        >
          Login As Student
        </button>
        <button
          className="login-button"
          onClick={() => props.loginFunc("Admin")}
        >
          Login As Admin
        </button>
      </div>
    </div>
  );
}

function MainPage(props) {
  return (
    <div className="main-page">
      <h3>Logged In As {props.account}</h3>
      <button className="logout-button" onClick={() => props.setAccount(null)}>
        Logout
      </button>
      <h1 className={props.queueStatus ? "green-font" : "red-font"}>
        The Queue is Currently {props.queueStatus ? "Open" : "Closed"}
      </h1>
    </div>
  );
}

function AdminPage(props) {
  const toggleQueue = () => {
    let currQueueStatus = props.queueStatus;
    props.setQueueStatus(!currQueueStatus);
  };

  const clearQueue = () => {
    props.setQueueList([]);
  };

  return (
    <div className="admin-page">
      <button className="queue-button" onClick={toggleQueue}>
        {props.queueStatus ? "Close" : "Open"} Queue
      </button>
      <button className="clear-button" onClick={clearQueue}>
        Remove All Queued Students
      </button>
      <Queue queueList={props.queueList} setQueueList={props.setQueueList} />
    </div>
  );
}

function StudentPage(props) {
  return (
    <div className="student-page">
      {props.queueStatus && <QueueAdd addQueueItem={props.addQueueItem} />}
      <Queue queueList={props.queueList} setQueueList={props.setQueueList} />
    </div>
  );
}

function QueueAdd(props) {
  const [formText, setFormText] = useState("");

  const handleChange = (e) => {
    setFormText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addQueueItem(formText, Date());
    setFormText("");
  };

  return (
    <>
      <form class="add-assignment" onSubmit={handleSubmit}>
        <input
          type="text"
          name="formText"
          onChange={handleChange}
          value={formText}
          placeholder="Assignment"
        ></input>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

function Queue(props) {
  const removeQueueItem = (id) => {
    let newList = [];
    props.queueList.forEach((item) => {
      if (item.id !== id) newList.push(item);
    });
    props.setQueueList(newList);
  };

  return (
    <>
      <h2>Queue:</h2>
      <ul>
        {props.queueList.map((queueObj) => {
          return (
            <li key={queueObj.id}>
              <QueueItem
                queueObj={queueObj}
                removeQueueItem={removeQueueItem}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

function QueueItem(props) {
  /*
    queueObj = {text: string, date: Date object, id: number}
  */
  return (
    <div className="queue-item">
      <p>
        Assignment: {props.queueObj.text}, Time Created: {props.queueObj.date}
      </p>
      <button onClick={() => props.removeQueueItem(props.queueObj.id)}>
        Remove
      </button>
    </div>
  );
}
