import ALL from './_component/ALL';
import CSR from './_component/CSR';
import SSR from './_component/SSR';

export default function Home() {
  return (
    <main>
      <SSR />
      <CSR />
      <ALL />
    </main>
  );
}
