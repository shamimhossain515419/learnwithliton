module.exports = {
  env: {
    BASE_URL: 'http://localhost:5000',
  },

  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'corano.demo.towerthemes.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'tecdn.b-cdn.net',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },

  // async headers() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       headers: [
  //         {
  //           key: 'Access-Control-Allow-Origin',
  //           value: 'http://localhost:5173',
  //         }, // replace this your actual origin
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET,DELETE,PATCH,POST,PUT',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value:
  //             'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  //         },
  //       ],
  //     },
  //   ];
  // },
};
