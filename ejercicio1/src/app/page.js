import Image from "next/image";
import styles from "./page.module.css";
import Mains from "./components/Mains";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <video src="Utils/background.mp4" muted loop autoPlay id="background-video" />
        <Mains></Mains>
      </div>
    </main>
  );
}