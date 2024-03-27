const { execSync } = require('child_process');
const fs = require('fs');

// 引数が提供されなかった場合、条件に合うディレクトリを検索
const targetDirectories = process.argv[2]
  ? [process.argv[2]]
  : fs.readdirSync('.')
      .filter(f => fs.statSync(f).isDirectory() && f.match(/^\d{4}-\d{2}-\d{2}/));

targetDirectories.forEach((path) => {
  try {
    // ディレクトリ名からPDFファイル名を生成
    const pdfName = `${path.split('/').pop()}-dark.pdf`;
    // Slidevのエクスポートコマンドを実行してPDFを生成
    execSync(`yarn slidev export --dark ${path}/slides.md --output dist/${pdfName}`, { stdio: 'inherit' });
    console.log(`Exported PDF to dist/${pdfName}`);
  } catch (error) {
    console.error(`Failed to export Slidev to PDF for ${path}:`, error);
  }
});
