const BASE_URL = "http://localhost:3000";
const UMS_PATH = "/users";

//add api endpoint
// the Roku_flashback is our wrapping folder name.
const API_URL = "http://localhost/Roku_flashback/Kang_Yan_Morgan_Emily_RokuFlashback_Backend/database/api/index.php";

module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/sass/vars.scss";
            @import "@/assets/sass/reset.scss";
            @import "@/assets/sass/main.scss";
          `
        }
      }
    },

    devServer: {
      proxy: {
        '/users': {
        target: `${BASE_URL + UMS_PATH}`,
        changeOrigin: true,
        pathRewrite: {'^/users': ''}
        },

        '/movies': {
          target: `${API_URL}`,
          changeOrigin: true,
          pathRewrite: {'^/movies': ''}
        }

      }
    }
  };