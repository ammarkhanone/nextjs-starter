```bash
npx create-next-app@latest nextjs-starter --typescript
```

After the setup, replace the contents of `pages/index.tsx` with the following code:

```tsx
// pages/index.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default Home;
```

Finally, ensure your `next.config.js` file is present and looks like:

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
```

You can then run your application:

```bash
cd nextjs-starter
npm run dev
```

Your simple Next.js TypeScript hello world application is now ready for production.