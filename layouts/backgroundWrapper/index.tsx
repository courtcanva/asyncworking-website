import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BackgroundWrapper = ({ children }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center px-8 md:px-12 py-4 max-w-7xl m-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default BackgroundWrapper;
