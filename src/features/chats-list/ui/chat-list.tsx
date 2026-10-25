import type { FC } from "react";
import styles from "./chats-list.module.css";

const ChatsList: FC = () => (
  <div className={styles.list}>
    {[...Array(30)].map((_, index) => <p>row {index}</p>)}
  </div>
);

export default ChatsList;
