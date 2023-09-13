module.exports = {
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: "redis",
            port: 6379,
            db: 0,
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "redis",
        options: {
          max: 32767,
          connection: "default",
        },
      },
      strategy: {
        enableEtagSupport: true,
        logs: true,
        clearRelatedCache: true,
        maxAge: 3600000,
        contentTypes: [
          // list of Content-Types UID to cache
          "api::contact.contact",
          "api::homepage.homepage",
          "api::layout.layout",
        ],
      },
    },
  },
};
