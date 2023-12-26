import Container from '@/components/CommonComponent/Container/Container';
import React from 'react';

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