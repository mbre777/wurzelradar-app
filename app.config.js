module.exports = ({ config }) => {
    return {
      ...config,
      hooks: {
        postPublish: [
          {
            expo: {
                android: {
                    config:{
                        googleMaps:{
                            apiKey: process.env.GOOGLE_MAPS_API_KEY
                        }
                    }
                }
            }
          },
        ],
      },
    };
    };
  