'use strict';

/**
 * feedback-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feedback-email.feedback-email');
