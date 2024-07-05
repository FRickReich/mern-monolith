const esbuild = require('esbuild');
const sassPlugin = require('esbuild-sass-plugin').sassPlugin;

// esbuild.build({
//   entryPoints: ['src/frontend/index.tsx'],
//   bundle: true,
//   outfile: './public/bundle.js',
//   tsconfig: './config/tsconfig.frontend.json',
//   plugins: [sassPlugin()],
// //   watch: process.argv.includes('--watch'),
// }).catch(() => process.exit(1));

esbuild
  .context({
    logLevel: 'info',
    entryPoints: ['src/frontend/index.tsx'],
    bundle: true,
    outfile: './public/bundle.js',
    tsconfig: './config/tsconfig.frontend.json',
    // sourcemap: true,
    // outdir: 'app/assets/builds',
    // publicPath: 'assets',
    // loader: {
    //   '.png': 'file',
    //   '.svg': 'file',
    //   '.jpeg': 'file',
    //   '.jpg': 'file',
    // },
    plugins: [sassPlugin()],
  })
  .then((r) => {
    console.log('✨ Build succeeded.');

    r.watch();
    console.log('watching...');
  })
  .catch(() => process.exit(1));