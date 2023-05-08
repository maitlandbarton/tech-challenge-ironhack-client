import './App.css';
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <h1>this is my react app</h1>

    <Routes>
      <Route path="/phones" element={<PhoneList />} />
      <Route path="/phones/:id" element={<PhoneDetails />} />
    </Routes>
    </>
  );
}

export default App;
