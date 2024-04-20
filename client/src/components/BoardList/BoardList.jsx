// import thumnail from "../../assets/img/달빛아래야옹기차.jpg";
import { BoardCard } from "../BoardCard/BoardCard";
import styles from "./BoardList.module.css";

export const BoardList = () => {
  return (
    <section className={styles.BoardList}>
      <BoardCard
        title="ss"
        maincat="sss"
        subcat="ss"
        // src={thumnail}
        alt="ss"
        createdAt="2021-09-09"
      />
      {/* <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard /> */}
    </section>
  );
};
