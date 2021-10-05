# 🍪 snack-snack

snack-snack is a library which makes it simple to use snackbar in functional component with React App. With this library, you can customize and use snackbar which fits your application the most.

# 🧩 Getting Started

```
yarn add snack-snack
```

or

```
npm install snack-snack
```

# 🎨 How to use

1. Add `<div id="snackbar"></div>` to index.html

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <div id="root"></div>
    <div id="snackbar"></div>
  </body>
</html>
```

2. Wrap your app inside a SnackbarProvider component

```js
// App.js

import { SnackbarProvider } from 'snack-snack';

<SnackbarProvider>
  <YourComponent1 />
  <YourComponent2 />
  <YourComponent3 />
</SnackbarProvider>;
```

3. You can use useSnackbar hook in your functional components

```js
import { useSnackbar } from 'snack-snack';

const Example = () => {
  const { openSnackbar } = useSnackbar();

  openSnackbar(message what you want);
}

```

# 🟣 Contact

E-mail: gus7wn@gmail.com
<br />
Github: https://github.com/HyuuunjuKim
<br />
Instagram: https://www.instagram.com/h_j_u_u_/
