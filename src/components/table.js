import React from "react";

import InfoCard from "./infoCard";

function Table({ filtredUsers }) {
  return (
    <div>
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(2, 19rem)" }}>
        {filtredUsers.map((user) => (
          <li style={{ listStyleType: "none" }} key={user.id}>
            <InfoCard user={user}></InfoCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
