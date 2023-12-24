export const notFoundResponse = () => {
    throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
}