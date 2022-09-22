import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import theme from "./utils/theme";
import GlobalStyle from "./utils/globalStyles";

import Home from "./pages/Home";
import EventCreate from "./pages/EventCreate";
import EventDetail from "./pages/EventDetail";

export const EventContext = createContext();

function App() {
  const [event, setEvent] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    address1: "",
    address2: "",
    eventPhoto: "",
  });

  const contextValue = { event: event, setEvent: setEvent };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <EventContext.Provider value={contextValue}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<EventCreate />} />
            <Route path="/event" element={<EventDetail />} />
          </Routes>
        </div>
      </EventContext.Provider>
    </ThemeProvider>
  );
}

export default App;
