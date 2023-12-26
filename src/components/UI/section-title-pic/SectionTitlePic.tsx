import { FC } from 'react';

import styles from './styles.module.scss';

export interface IDataTitle {
  media: string;
  url: string;
}

export interface IDataTitleImg {
  url: string;
  width: number;
  height: number;
}

export interface ITitlePicProps {
  data: IDataTitle[];
  title: string;
  img: IDataTitleImg;
}

const SectionTitlePic: FC<ITitlePicProps> = ({ data, title, img }) => {
  return (
    <>
      <h3 className="visually-hidden">{title}</h3>
      <picture className={styles.titlePic}>
        {data.map((el: { media: string; url: string }) => (
          <source
            key={el.media}
            media={`(min-width: ${el.media})`}
            srcSet={el.url}
          />
        ))}
        <img src={img.url} width={img.width} height={img.height} alt="" />
      </picture>
    </>
  );
};

export default SectionTitlePic;
