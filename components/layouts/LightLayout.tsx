import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

export const LightLayout = ({ children }: Props) => {
  return (
    <div
      className="bg-light text-dark p-3"
      style={{ height: 'calc(100vh - 3.5rem)' }}
    >
      <div className="container">
        {children}
        <small className="text-dark-emphasis">Light layout</small>
      </div>
    </div>
  );
};
