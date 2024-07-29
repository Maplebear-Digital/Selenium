import fs from 'fs';
import path from 'path'


    function ensureDirectoryExistence(filePath) {
        const dirname = path.dirname(filePath);
        if (fs.existsSync(dirname)) {
          return true;
        }
        fs.mkdirSync(dirname, { recursive: true });
      }
      
      function saveScreenshot(driver, filepath) {
        ensureDirectoryExistence(filepath);
        return driver.takeScreenshot().then((data) => {
          fs.writeFileSync(filepath, data, 'base64');
        });
      }


export default saveScreenshot;