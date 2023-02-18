'use strict';

/**
 * feedback-email router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::feedback-email.feedback-email');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/feedback-emails',
      handler: 'feedback-email.find',
      config: {
        policies: [],
        middlewares: [],
      },
     },
     {
      method: 'POST',
      path: '/feedback-emails',
      handler: 'feedback-email.create',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ]
}
