import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Person One",
      image:
        "data:image/jpeg;base64,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",
      places: 3,
    },
    {
      id: "u2",
      name: "Person Two",
      image:
        "data:image/jpeg;base64,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",
      places: 3,
    },
    {
      id: "u3",
      name: "Person Three",
      image:
        "data:image/jpeg;base64,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",
      places: 3,
    },
    {
      id: "u4",
      name: "Person Four",
      image:
        "data:image/jpeg;base64,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",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
