async function feed(parent, args, context, info) {
  const links = await context.prisma.links();

  return {
    links
  };
}

// user
async function users(parent, args, ctx, info) {
  const users = await ctx.prisma.users();
  return users;
}
module.exports = {
  feed,
  users
};
