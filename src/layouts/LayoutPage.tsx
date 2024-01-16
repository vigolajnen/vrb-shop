import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { motion } from 'framer-motion';

import { ThemeContext } from '../context/ThemeContext';

import PageHeader from '../components/page-header/PageHeader';
import PageBody from '../components/page-body/PageBody';
import SpinnerBig from '../components/UI/spinner-big/SpinnerBig';
import PageFooter from '../components/page-footer/PageFooter';

export default function LayoutPage() {
  return (
    <>
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {/* light-theme */}
        <ThemeContext.Provider value="">
          <PageHeader />
          <PageBody>
            <Suspense fallback={<SpinnerBig />}>
              <Outlet />
            </Suspense>
          </PageBody>
          <PageFooter />
        </ThemeContext.Provider>
      </motion.article>
    </>
  );
}
