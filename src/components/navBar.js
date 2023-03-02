import React from "react";
import { Button, Form } from "react-bootstrap";

function NavBar({
  search,
  setSearch,
  selectedDomens,
  setSelectedDomens,
  resetHandler,
}) {
  return (
    <Form>
      <div key={`inline-checkbox`} className="mb-3">
        {[".net", ".biz", ".tv", ".org"].map((box) => (
          <Form.Check
            checked={selectedDomens.some((el) => el === box)}
            onChange={(e) => setSelectedDomens((prev) => [...prev, box])}
            inline
            label={box}
            name="group1"
            type={"checkbox"}
            key={`inline-checkbox-${box}`}
          />
        ))}
        <input
          type={"text"}
          placeholder={"Search..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <Button
          onClick={resetHandler}
          style={{ marginLeft: "1rem" }}
          variant="outline-dark"
        >
          Reset
        </Button>
      </div>
      <div></div>
    </Form>
  );
}

export default NavBar;
