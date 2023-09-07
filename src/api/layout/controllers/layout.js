"use strict";

/**
 * layout controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::layout.layout", ({ strapi }) => {
  return {
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.service("api::layout.layout").find(query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return sanitizedEntity;
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;

      const entity = await strapi
        .service("api::layout.layout")
        .findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return sanitizedEntity;
    },
  };
});
