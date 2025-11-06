const ntg = [
    "./applications/ntg-ticket/api/features/**/*.feature",
    "--require ./applications/ntg-ticket/api/step-definitions/*.ts",
    "--require-module ts-node/register",
    "--format summary",
    "--format progress",
    "--tags @ntg-ticket"
].join(" ");

module.exports = {
    default: ntg,
    ntg,
};
