import { useEffect } from "react";

import styles from "./child.module.css";

export default function Child() {
  useEffect(() => {
    console.log("I have mounted <Child />");

    return () => {
      console.log("I have unmounted <Child />");
    };
  }, []);

  return <div className={styles.child}>Child</div>;
}
