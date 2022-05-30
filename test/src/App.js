import React from "react";
import FormBankData from "./components/formModal/FormBankData";
import FormIvoiceAddress from "./components/formModal/FormIvoiceAddress";
import TablePage from "./components/tablePage/TablePage";

function App() {
  return (
    <div className='wrapper'>
      <TablePage />
      <FormIvoiceAddress />
      <FormBankData />
    </div>
  );
}

export default App;
