import styles from "./Info.module.css"


type InfoProps = {
  title: string;
  text: string;
};

export default function Info(props: InfoProps) {
  return (
    <div className={styles.info}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

