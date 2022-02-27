import typescript from '@rollup/plugin-typescript'
import svg from 'rollup-plugin-svg'
import pkg from './package.json'

export default [
  {
    input: 'src/index.tsx',
    external: ['ms'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' }), svg()]
  }
]
