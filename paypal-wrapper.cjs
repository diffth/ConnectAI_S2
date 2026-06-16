// Windows 환경에서 등호(=) 등 인자 파싱 오류를 우회하기 위한 래퍼 스크립트입니다.
const fs = require('fs');
const path = require('path');

// .env 파일 로드 및 환경 변수 파싱
try {
  const envPath = path.join(__dirname, '01.1AI_Stitch_Antigravity', '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split(/\r?\n/).forEach((line) => {
      if (line.trim() && !line.startsWith('#')) {
        const parts = line.split('=');
        if (parts.length >= 2) {
          const key = parts[0].trim();
          const value = parts.slice(1).join('=').trim();
          if (key && value) {
            process.env[key] = value;
          }
        }
      }
    });
    // @paypal/mcp에서 사용할 PAYPAL_CLIENT_ID 바인딩
    if (!process.env.PAYPAL_CLIENT_ID && process.env.VITE_PAYPAL_CLIENT_ID) {
      process.env.PAYPAL_CLIENT_ID = process.env.VITE_PAYPAL_CLIENT_ID;
    }
  }
} catch (error) {
  console.error('Warning: Failed to load environment variables from .env:', error);
}

process.argv = [
  process.argv[0],
  'e:/AI_DEV/ConnectAI_S2/01.1AI_Stitch_Antigravity/node_modules/@paypal/mcp/dist/index.js',
  '--tools=all'
];

// 실제 paypal mcp-server 모듈을 로드합니다.
const mcp = require('e:/AI_DEV/ConnectAI_S2/01.1AI_Stitch_Antigravity/node_modules/@paypal/mcp/dist/index.js');

// main 함수를 직접 실행하여 require.main === module 조건 우회를 처리합니다.
if (typeof mcp.main === 'function') {
  mcp.main().catch((error) => {
    console.error('Error running main in wrapper:', error);
  });
} else {
  console.error('mcp.main is not a function');
}
