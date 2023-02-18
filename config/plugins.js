module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'noreply@yd-impex.su',
        defaultReplyTo: 'yd_impex@inbox.ru',
      },
    },
  },
});
