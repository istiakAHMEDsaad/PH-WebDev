'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const FoodSearch = () => {
  const [search, setSearch] = useState();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url)
  }, []);
  return <div>FoodSearch</div>;
};

export default FoodSearch;
