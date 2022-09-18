import * as path from "path";
import { prepareTheme } from "./src/theme";
import { SiteConfigType } from "./src/theme/types";

const repoPath = path.join(process.cwd(), "../dplantera.github.io-tech-blog/");
const outputDir = path.join(process.cwd(), "./out");

const siteConfig: SiteConfigType = require(path.join(repoPath, "site.json"));
siteConfig.baseUrl = "";

prepareTheme({ repoName: ".", repoPath, outputDir, siteConfig, themeDir: path.join(process.cwd(), "theme") })
  .then(() => console.log("generated site"))
  .catch(error => console.error(error));
