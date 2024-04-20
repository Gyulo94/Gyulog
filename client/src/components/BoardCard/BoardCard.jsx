import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./BoardCard.module.css";

const { id, maincat, subcat } = "id";
export const BoardCard = (props) => {
  BoardCard.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    maincat: PropTypes.string.isRequired,
    subcat: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  };
  return (
    <div className={styles.BoardCard}>
      <Link to={`/blog/${maincat}/${subcat}/${id}`}>
        <img className={styles.Top} src={props.src} alt={props.src} />
        <h3 className={styles.Title}>{props.title}</h3>
        <div className={styles.Bottom}>
          <div className={styles.Category}>
            <Link className={styles.MainCat} to={`/blog/${maincat}`}>
              {props.maincat}
            </Link>
            <div className={styles.Separator}>/</div>
            <Link className={styles.SubCat} to={`/blog/${maincat}/${subcat}`}>
              {props.subcat}
            </Link>
          </div>
          <p className={styles.CreatedAt}>{props.createdAt}</p>
        </div>
      </Link>
    </div>
  );
};
