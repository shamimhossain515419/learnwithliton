'use client';
import PageLoader from '@/ui/loader/PageLoader';
import Cookies from 'js-cookie';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const PrivateRoute = ({ children }) => {
  const { data: session, status } = useSession();
  console.log(session);

  const token = Cookies.get('token');
  const router = useRouter();
  if (status == 'loading') {
    return <PageLoader />;
  } else {
    if (!session?.user || !token) {
      router.push('/login');
      return;
    }
    return <div>{children}</div>;
  }
};

export default PrivateRoute;
