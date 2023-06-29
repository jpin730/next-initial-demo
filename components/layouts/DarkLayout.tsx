import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      className="bg-dark text-light p-3"
      style={{ height: 'calc(100vh - 3.5rem)' }}
    >
      <div className="container">
        {children}
        <hr />
        <small className="text-light-emphasis">Dark layout</small>
      </div>
    </div>
  );
};
