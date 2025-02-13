import styles from "@/app/mystyle.module.css";

const HeartImage = ({ width = 100, height = 100, ...props }) => {
    return (
      <div>
        <img
          src="/heart.svg"
          alt="heart"
          width={width}
          height={height}
          className={`${styles.heartImage} mx-auto my-auto`}
          {...props}
        />
      </div>
    );
  };

export default HeartImage;
