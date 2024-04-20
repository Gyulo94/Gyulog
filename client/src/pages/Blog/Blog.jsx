import { BoardList } from "../../components/BoardList/BoardList";
import { Category } from "../../components/Category/Category";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <section className={styles.Blog}>
      <Category />
      <BoardList />
    </section>
  );
}
