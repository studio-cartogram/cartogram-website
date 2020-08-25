import {Template, Layout, Disruption} from '../components';
import {getDisruptions} from '../lib/api';
import Head from 'next/head';
import DisruptionType from '../types/disruption';

type Props = {
  disruptions: DisruptionType[];
};

function Index({disruptions}: Props) {
  const currentDisruption = disruptions[0];
  return (
    <>
      <Template>
        <Head>
          <title>Cartogram Status</title>
        </Head>
        <Layout>
          <Disruption {...currentDisruption} />
        </Layout>
      </Template>
    </>
  );
}

export default Index;

export const getStaticProps = async () => {
  const disruptions = getDisruptions([
    'title',
    'status',
    'date',
    'slug',
    'excerpt',
  ]);

  return {
    props: {disruptions},
  };
};
