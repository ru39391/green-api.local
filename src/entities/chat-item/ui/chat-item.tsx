import type { FC } from "react";
import { type IChatItem } from "../model/types";
import styles from "./chat-item.module.css";

const ChatItem: FC<IChatItem> = ({ caption, date, intro, img }) => (
  <div className={styles.item}>
    <div className={styles.item__media}>
      <img class={styles.item__img} src={img} alt={caption} />
    </div>
    <div className={styles.item__caption}>{caption}</div>
    <div className={styles.item__intro}>{intro}</div>
    <div className={styles.item__date}>{date}</div>
  </div>
);

export default ChatItem;
