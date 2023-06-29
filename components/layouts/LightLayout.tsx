import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const LightLayout: FC<Props> = ({ children }) => {
  return (
    <div
      className="bg-light text-dark p-3"
      style={{ height: 'calc(100vh - 3.5rem)' }}
    >
      <div className="container">
        {children}
        <hr />
        <small className="text-dark-emphasis">Light layout</small>
      </div>
    </div>
  );
};
