import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { motion } from 'framer-motion';

import PageHeader from '../components/page-header/PageHeader';
import PageBody from '../components/page-body/PageBody';
import SpinnerBig from '../components/UI/spinner-big/SpinnerBig';
import PageFooter from '../components/page-footer/PageFooter';

export default function LayoutPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PageHeader />
        <PageBody>
          <Suspense fallback={<SpinnerBig />}>
            <Outlet />
          </Suspense>
        </PageBody>
        <PageFooter />
      </motion.div>
    </>
  );
}
