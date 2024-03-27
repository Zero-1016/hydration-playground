export default function SSR() {
  if (typeof window !== undefined) return null;

  return <div style={{ color: 'blue' }}>this is SSR Component with blue</div>;
}
