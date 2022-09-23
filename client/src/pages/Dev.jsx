import { useEffect, useState } from "react";
import Diagram from "../Diagram";
import { styles } from "./devStyles";

function Dev() {
  const [apiWorking, setApiWorking] = useState(false);

  useEffect(() => {
    fetch("/api/").then((res) => {
      if (res.ok) {
        setApiWorking(true);
      } else if (!res.ok && apiWorking) {
        setApiWorking(false);
      }
    });
  }, [apiWorking]);

  const config = {
    text: apiWorking ? "true" : "false",
    styles: apiWorking
      ? { color: "green", fontWeight: "bold" }
      : { color: "red", fontWeight: "bold" },
  };
  return (
    <div style={styles}>
      <p style={{ margin: 0 }}>
        Connected to API: <span style={config.styles}>{config.text}</span>
      </p>
      <h2>MSB-Hub Development infrastructure</h2>
      <br />
      <br />
      <Diagram />
    </div>
  );
}

export default Dev;
