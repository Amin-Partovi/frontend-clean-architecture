import { Loader } from "lucide-react";
import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <div>
      <Loader className={styles.spinner} />
    </div>
  );
};

export default Spinner;
