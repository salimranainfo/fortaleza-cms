"use strict";

/**
 * homepage controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::homepage.homepage",
  ({ strapi }) => {
    return {
      async find(ctx) {
        const { query } = ctx;

        const entity = await strapi
          .service("api::homepage.homepage")
          .find(query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return sanitizedEntity;
      },
      async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;

        const entity = await strapi
          .service("api::homepage.homepage")
          .findOne(id, query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return sanitizedEntity;
      },
    };
  }
);
