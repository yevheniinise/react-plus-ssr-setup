exports.compilerPromise = (name, compiler) => {
  return new Promise((resolve, reject) => {
    compiler.hooks.compile.tap(name, () => {
      console.log(`${name} Compiling`);
    });
    compiler.hooks.done.tap(name, (stats) => {
      if (!stats.hasErrors()) {
        return resolve();
      }
      return reject(`Failed to compile ${name}`);
    });
  });
};
