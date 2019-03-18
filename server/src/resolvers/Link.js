function postedBy(parent, args, ctx, info) {
  return ctx.prisma
    .link({
      id: parent.id
    })
    .postedBy();
}

module.exports = { postedBy };
