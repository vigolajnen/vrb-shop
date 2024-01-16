import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { useActions } from '../../hooks/useActions';

import styles from './styles.module.scss';

interface IFiltersTabProps {
  data: { name: string; content: React.ReactNode }[];
  active: number;
  setActive: (index: number) => void;
}

const FiltersTab: FC<IFiltersTabProps> = ({ data, active, setActive }) => {
  const { getTariffsActiveTab } = useActions();
  const ref = useRef(null);

  useEffect(() => {
    getTariffsActiveTab('С бассейном');
  }, []);
  return (
    <>
      <div className={styles.tabs}>
        {data.map((d, i) => {
          return (
            <button
              key={i}
              ref={ref}
              className={i === active ? styles.tabActive : styles.tab}
              onClick={() => {
                setActive(i);
                getTariffsActiveTab(d.name);
              }}
            >
              {d.name}
            </button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {data[active] && (
          <div className={styles.content}>{data[active].content}</div>
        )}
      </motion.div>
    </>
  );
};

export default FiltersTab;
