import styles from "@/app/mystyle.module.css";
import Image from "next/image";

const HeartImage = ({ width = 100, height = 100, ...props }) => {
    return (
      <div>
        <Image src="/heart.svg"
          alt="heart"
          width={width}
          height={height}
          className={`${styles.heartImage} mx-auto my-auto`}
          {...props}/>
      </div>
    );
  };

export default HeartImage;
