import type { FC, ReactNode } from "react";
import { ChatsList } from "@/features/chats-list";
import styles from "./sidebar.module.css";

const Sidebar: FC<{ children: ReactNode; }> = ({ children }) => (
  <div className={styles.sidebar}>
    <div className={styles.sidebar__heading}>
      <div className={styles.sidebar__caption}>Чаты</div>
      {children}
    </div>
    <div className={styles.sidebar__wrapper}>
      <ChatsList />
    </div>
  </div>
);

export default Sidebar;
