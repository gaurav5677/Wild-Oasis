// import { useEffect } from "react";
import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

// import { getCabins } from "../services/apiCabins";
/* eslint react/prop-types: 0 */

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort </p>
      </Row>

      <CabinTable />
      <Button onClick={() => setShowForm((show) => !show)}>
        Add new Cabin
      </Button>
      {showForm && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
