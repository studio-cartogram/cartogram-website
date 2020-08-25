import Status from './status';

type DisruptionType = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  status: Status;
};

export default DisruptionType;
