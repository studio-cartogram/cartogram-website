import {Footer, Meta, Header} from 'components';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

export function Template({preview, children}: Props) {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
