export default {
  async fetch(request, env, ctx) {
    const html = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
          <meta charset="UTF-8">
          <title>Cloudflare サンプル</title>
      </head>
      <body>
          <h1>誰だと思っているんだ</h1>
          <p>なかじまさんだぞ</p>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};