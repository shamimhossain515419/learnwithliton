import Container from '@/components/CommonComponent/Container/Container';
import React from 'react';
export const generateMetadata = () => {
     return {
          title: " courses | Asian It"
     }
}

const layout = ({ children }) => {
     return (
          <div>
               <Container>
                    <div>
                         {children}
                    </div>
               </Container>

          </div>
     );
};

export default layout;