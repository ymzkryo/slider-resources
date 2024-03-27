// scripts/build.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = process.argv[2];

if (!path) {
  console.log('Usage: yarn build <path-to-directory>');
  process.exit(1);
}

try {
  // Slidevビルドコマンドを実行
  execSync(`yarn slidev build ${path}/slides.md`, { stdio: 'inherit' });

  // 出力ディレクトリを作成（存在しない場合）
  const outputDir = `public/${path}`;
  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // distディレクトリから指定された出力ディレクトリへファイルを移動
  execSync(`mv dist/* ${outputDir}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to build Slidev:', error);
}
