import React from 'react';
export const generateMetadata = () => {
     return {
          title: " payment | Asian It"
     }
}
const layout = ({ children }) => {
     return (
          <div>
               {children}
          </div>
     );
};

export default layout;