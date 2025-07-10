import React from "react";
import { useState } from "react";

function useField(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}

export default function CustomHooks() {
  const username = useField("ali");
  const password = useField();

  return (
    <div>
      <form>
        <input type="text" name="username" {...username} />

        <input type="text" name="password" {...password} />
      </form>
    </div>
  );
}
