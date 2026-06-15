import React from "react";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-360 mx-auto px-5 md:px-10 lg:px-30 py-5">
      {children}
    </div>
  );
};

export default ContentContainer;
