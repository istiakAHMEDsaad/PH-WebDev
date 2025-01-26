## Pagination System

## __1. Fetch Data__
```
//-> ================== For Pagination ================== <-//
  const { count } = useLoaderData();
  const itemsPerPage = 10;
  const numberOfPage = Math.ceil(count / itemsPerPage);
  const page = [];
  for (let i = 0; i < numberOfPage; i++) {
    page.push(i);
  }
  console.log(page);
  //-> ==================================================== <-//
```

## __For page, Use array methods__

```
Array(5)  -> 5 empty array
Array(5).keys()  -> keys use for iterator
[...Array(5).keys()]  -> for loop shortcut
```