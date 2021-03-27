import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

function Podcast() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { episodes } = usePluginData('podcast-data');

  return (
    <Layout title='Podcast' description={siteConfig.tagline}>
      <header className={clsx('hero hero--dark')}>
        <div className='container margin-vert--lg'>
          <h1 className='hero__title'>X_Change 🎙️</h1>
          <p className='hero__subtitle'>
            Seasoned, Nerdy Technologists and Developers discuss a wide range of topics in front-end application
            development, taking cues from their own experiences. Think upbeat experience technology conversations.
          </p>
          <div>
            <Link className={clsx('button button--outline button--lg')} to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col col--3'></div>
            <div className='col col--6'>
              {episodes && episodes.length > 0 && (
                <section>
                  {episodes.map((episode) => (
                    <>
                      <Episode key={episode.id} {...episode} />
                      <div className={`${styles.episode__divider} text--center`}>✨ ✨ ✨</div>
                    </>
                  ))}
                </section>
              )}
            </div>
            <div className='col col--3'></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

function Episode(ep) {
  return (
    <div className={styles.episode}>
      {/* <h2 className='episode__name'>
        <a href={ep.external_urls.spotify}>{ep.name}</a>
      </h2> */}
      {/* <div className='episode__meta'>
        <div className='episode__release-date'>{ep.release_date}</div>
      </div> */}
      <div className='episode__body'>
        <div className='episode__player'>
          <iframe
            src={`https://open.spotify.com/embed-podcast/episode/${ep.id}`}
            width='100%'
            height='232'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></iframe>
        </div>
        <div className='episode__desc' dangerouslySetInnerHTML={{ __html: ep.html_description }}></div>
      </div>
    </div>
  );
}

export default Podcast;
