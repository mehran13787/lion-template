import { defineConfig } from "vite";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: "./",
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        articles: resolve(__dirname, "articles.html"),
        articleDetail: resolve(__dirname, "article-detail.html"),
        categoryMobile: resolve(__dirname, "category-mobile.html"),
        error: resolve(__dirname, "error.html"),
        productDetails: resolve(__dirname, "product-details.html"),
        productsMobile: resolve(__dirname, "products-mobile.html"),
        products: resolve(__dirname, "products.html"),
        shoppingCart: resolve(__dirname, "shopping-cart.html"),
        shoppingCartSecondStep: resolve(
          __dirname,
          "shopping-cart-second-step.html"
        ),
        shoppingCartThirdStep: resolve(
          __dirname,
          "shopping-cart-third-step.html"
        ),
        successfulPayment: resolve(__dirname, "successful-payment.html"),
      },
    },
  },
});
