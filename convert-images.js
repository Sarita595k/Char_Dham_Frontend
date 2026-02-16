import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/assets";
const outputDir = "./src/assets-webp";

function convertFolder(inputPath, outputPath) {
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }

    const files = fs.readdirSync(inputPath);

    files.forEach(file => {
        const inputFile = path.join(inputPath, file);
        const outputFile = path.join(outputPath, file);

        if (fs.lstatSync(inputFile).isDirectory()) {
            convertFolder(inputFile, outputFile);
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            const webpOutput = outputFile.replace(/\.(jpg|jpeg|png)$/i, ".webp");

            sharp(inputFile)
                .resize({ width: 1920, withoutEnlargement: true }) // adjust max width if needed
                .webp({ quality: 75 }) // 70–80 ideal
                .toFile(webpOutput)
                .then(() => console.log(`✅ Converted: ${inputFile}`))
                .catch(err => console.error(err));
        }
    });
}

convertFolder(inputDir, outputDir);
