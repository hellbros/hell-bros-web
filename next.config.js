module.exports = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
};
