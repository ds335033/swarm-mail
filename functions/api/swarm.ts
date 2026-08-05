export const onRequest = async (context) => {
  try {
    // context.next() invokes the next function or the origin asset
    const response = await context.next();
    // In Cloudflare, response headers are immutable. We need to clone it.
    const newResponse = new Response(response.body, response);
    newResponse.headers.set("x-swarmy-edge", "optimized");
    return newResponse;
  } catch (error) {
    return context.next();
  }
};
