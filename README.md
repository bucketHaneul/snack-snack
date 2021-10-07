# 🍪 snack-snack
<p align="center">
  <img width="512" alt="Group 62 (2)" src="https://user-images.githubusercontent.com/43339385/135998215-1e66d9ff-ec42-4686-988a-3c2368f8972b.png" />
</p>

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

2. Put a SnackbarProvider component by wrapping your components
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
# Example

<p align="center">
  <img width="640" alt="Group 62 (2)" src="https://user-images.githubusercontent.com/43339385/136377326-ef05541c-c6a7-46f6-8c1b-170238f684bc.png" />
</p>

You can see more detail example code in [example directory](https://github.com/HyuuunjuKim/snack-snack/tree/main/examples)


# 🟣 Contact

E-mail: gus7wn@gmail.com
<br />
Github: https://github.com/HyuuunjuKim
<br />
Instagram: https://www.instagram.com/h_j_u_u_/
