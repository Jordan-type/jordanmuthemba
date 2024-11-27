import Navigation from "../Navigation"
import Footer from "../Footer";
import Toaster from "../Toaster";

import type { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: PropsWithChildren) {
    return (
        <>
        <Navigation />
        <main>{children}</main>
        <Toaster/>
        <Footer />
        </>
    )
}

export default WithNavigationFooter;