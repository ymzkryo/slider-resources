// scripts/export-pdf.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = process.argv[2];

if (!path) {
  console.log('Usage: yarn export-pdf <path-to-directory>');
  process.exit(1);
}

try {
  // Slidevのエクスポートコマンドを実行してPDFを生成
  execSync(`yarn slidev export --dark  ${path}/slides.md --output dist/${path.split('/').pop()}-dark.pdf`, { stdio: 'inherit' });
  console.log(`Exported PDF to ${path}/${path.split('/').pop()}.pdf`);
} catch (error) {
  console.error('Failed to export Slidev to PDF:', error);
}

