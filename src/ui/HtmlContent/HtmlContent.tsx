import { ReactNode } from 'react';
import style from './styles.module.css';

type GenericHtmlProps = {
  children: ReactNode;
};

const HtmlContent = ({ children }: GenericHtmlProps) => {
  return <div className={style.genericHtml}>{children}</div>;
};

export default HtmlContent;
