'use client';

import { useEffect, useState } from 'react';

export default function CSR() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return <div style={{ color: 'red' }}>this is CSR Component with red</div>;
}
