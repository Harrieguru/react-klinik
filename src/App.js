import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
import Form from "./Components/Form";
import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/Navbar";
import SymptomChecker from './Components/SymptomChecker';
import VitalForm from "./Components/VitalForm";


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false);
  useEffect(() => {
    window.location.href = "/register";
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetUsers />} /> 
          <Route
            path="/register"
            element={<Form submitted={registrationSubmitted} setSubmitted={setRegistrationSubmitted} />}
          />{" "}
          
          {registrationSubmitted && (
            <Route path="/login" element={<LoginForm />} />
          )}{" "}
          
          <Route path="/checklist" element={<SymptomChecker />} />
          <Route path="/vitals" element={<VitalForm />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
