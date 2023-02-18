'use strict';

/**
 * feedback-email controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::feedback-email.feedback-email', ({strapi}) => ({

  async find(data) {
    try {
      data.body = 'Yes my friend, yours GET request is working';
    } catch(error) {
      data.body = error;
    }
  },

  async create(ctx) {
    try {
      const { name, email, description } = ctx.request.body.data;

      if (!name || !email) {
        ctx.body = 'No name or email';
        return;
      }

      await super.create(ctx);

      await strapi.plugins['email'].services.email.send({
        to: 'bebded@gmail.com',
        from: 'noreply@yd-impex.su',
        subject: 'Вам была отправлена заявка с сайта',
        text: `Имя: ${name}, почта: ${email}, описание: ${description}`
      });

      ctx.body = 'The email has been sent and also added to the admin panel like entry';
    } catch(error) {
      ctx.body = error;
    }
  },

}));
