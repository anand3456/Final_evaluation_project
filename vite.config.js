import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  replace({
    preventAssignment: true,
    values: {
      'process.env.REACT_APP_FORMBOT_BACKEND_URL': JSON.stringify(process.env.REACT_APP_FORMBOT_BACKEND_URL),
    },
  }),
],
})
