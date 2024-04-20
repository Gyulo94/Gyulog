import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./NotFound.module.css";

export default function NotFound() {
  // 숫자 포맷팅 함수
  const formatThousandsNoRounding = (n, dp) => {
    let e = "",
      s = e + n,
      l = s.length,
      b = n < 0 ? 1 : 0,
      i = s.lastIndexOf(","),
      j = i === -1 ? l : i,
      r = e,
      d = s.substr(j + 1, dp);
    while ((j -= 3) > b) {
      r = "." + s.substr(j, 3) + r;
    }
    return (
      s.substr(0, j + 3) +
      r +
      (dp
        ? "," + d + (d.length < dp ? "00000".substr(0, dp - d.length) : e)
        : e)
    );
  };

  // 숫자 애니메이션을 위한 컴포넌트
  const AnimatedNumber = ({ countTo }) => {
    // Add prop validation for 'countTo' prop

    AnimatedNumber.propTypes = {
      countTo: PropTypes.number.isRequired,
    };
    const [count, setCount] = useState(0);

    useEffect(() => {
      const startCount = parseFloat(count); // 시작 숫자
      const endCount = parseFloat(countTo); // 종료 숫자

      if (startCount === endCount) return;

      // 애니메이션
      const delta = (endCount - startCount) / (2000 / 10); // 2000ms 동안의 변화량

      const timer = setInterval(() => {
        setCount((prevCount) => {
          const updatedCount = prevCount + delta;
          if (delta > 0 && updatedCount >= endCount) {
            clearInterval(timer);
            return endCount;
          } else if (delta < 0 && updatedCount <= endCount) {
            clearInterval(timer);
            return endCount;
          }
          return updatedCount;
        });
      }, 10);

      // 컴포넌트 언마운트 시 타이머 정리
      return () => clearInterval(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countTo]);

    return <div>{formatThousandsNoRounding(Math.floor(count))}</div>;
  };

  return (
    <main className={styles.NotFound}>
      <div className={styles.NFWrap}>
        <div className={styles.Row}>
          <div className={styles.MxAuto}>
            <div id="countUp" className={styles.countUp}>
              <div className={styles.number}>
                <AnimatedNumber countTo={404} />
              </div>
              <div className={styles.text}>
                <span>Page not Found {":("}</span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
