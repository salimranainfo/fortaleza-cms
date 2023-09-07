"use strict";

/**
 * contact controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact.contact", ({ strapi }) => {
  return {
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.service("api::contact.contact").find(query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return sanitizedEntity;
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;

      const entity = await strapi
        .service("api::contact.contact")
        .findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return sanitizedEntity;
    },
  };
});
