import Footer from '../Footer';
import Navigation from '../Navigation';
import QuickAccess from '../QuickAccess';
import Shortcuts from '../Shortcuts';
import Toaster from '../Toaster';

import type { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <QuickAccess />
      <Shortcuts />
      <Navigation />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
