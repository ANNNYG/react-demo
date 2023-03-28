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
import FontFaceObserver from 'fontfaceobserver';

// antd样式通过 babel-plugin-import 实现按需加载 打包体积减少1M
import { ConfigProvider, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

// Use consistent styling
import 'sanitize.css/sanitize.css';

import { App } from 'app';

import { configureAppStore } from 'store/configureStore';

import reportWebVitals from 'reportWebVitals';

import antdTheme from './styles/antd_theme.json';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Inter', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

dayjs.locale('zh-cn');
message.config({
  maxCount: 1,
});

ReactDOMClient.createRoot(MOUNT_NODE!).render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
      <ThemeProvider theme={antdTheme}>
        <HelmetProvider>
          {/* <React.StrictMode> */}
          <App />
          {/* </React.StrictMode> */}
        </HelmetProvider>
      </ThemeProvider>
    </ConfigProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
