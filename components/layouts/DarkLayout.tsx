import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

export const DarkLayout = ({ children }: Props) => {
  return (
    <div
      className="bg-dark text-light p-3"
      style={{ height: 'calc(100vh - 3.5rem)' }}
    >
      <div className="container">
        {children}
        <small className="text-light-emphasis">Dark layout</small>
      </div>
    </div>
  );
};
