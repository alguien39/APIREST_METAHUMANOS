import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerYamlPath = path.join(__dirname, '..', '..', 'Docs', 'OpenApi.yml');

if (!fs.existsSync(swaggerYamlPath)) {
  throw new Error(`OpenApi.yml no encontrado en: ${swaggerYamlPath}`);
};

const file = fs.readFileSync(swaggerYamlPath, 'utf8');
export const specs = yaml.load(file);