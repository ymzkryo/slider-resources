// slidev-runner.js
const { execSync } = require('child_process');

const presentationName = process.argv[2]; // コマンドライン引数からプレゼンテーション名を取得

if (!presentationName) {
  console.error('プレゼンテーション名を指定してください。');
  process.exit(1);
}

const command = `npx slidev ${presentationName}/slides.md --open`;

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.error(`プレゼンテーション "${presentationName}" の起動に失敗しました。`);
}

