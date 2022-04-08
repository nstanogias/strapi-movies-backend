module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1719950666bb270c2cebe110e5cfe921'),
  },
});
