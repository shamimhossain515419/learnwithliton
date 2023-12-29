import React from 'react';
export const generateMetadata = () => {
     return {
          title: " Login | Asian It"
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