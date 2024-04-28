import TitleAdmin from "@/components/title/TitleAdmin";
import Header from "./Header";
import styles from "./Layout.module.scss";
import Sidebar from "./Sidebar";

export default function Layout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className={styles["layout"]}>
      <Header id={styles["header"]} />
      <Sidebar id={styles["sidebar"]} />
      <div id={styles["content"]}>
        <TitleAdmin text={title} />
        {children}
      </div>
    </div>
  );
}
