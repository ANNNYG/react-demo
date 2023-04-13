/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

// antd样式通过 babel-plugin-import 实现按需加载 打包体积减少1M
import { ConfigProvider, message } from 'antd';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'sanitize.css/sanitize.css';

import { App } from 'app';
import { configureAppStore } from 'store/configureStore';

// import reportWebVitals from 'reportWebVitals';

import antdTheme from './styles/antd_theme.json';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

dayjs.locale('zh-cn');
message.config({
  maxCount: 1,
});

ReactDOMClient.createRoot(MOUNT_NODE!).render(
  <Provider store={store}>
    {/* antd的配置 */}
    <ConfigProvider autoInsertSpaceInButton={false}>
      {/* styled-components的配置 */}
      <ThemeProvider theme={antdTheme}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </ConfigProvider>
  </Provider>,
);
