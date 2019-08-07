import appRoot from "app-root-path";
import fs from "fs";
import path from "path";

class FileUtil {
    /**
     * @description Get projects real path
     * @return {*|string} project path
     */
    static getProjectPath() {
        try {
            return appRoot.path;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description Read File and return array of text lines
     * @param inputFile
     * @return {*|PromiseLike<Array>}
     */
    static async readFileByLine(inputFilePath) {
        try {
            let appProjectPath = this.getProjectPath();
            let filePath = path.resolve(appProjectPath, String(inputFilePath));
            let textByLineArray = await fs
                .readFileSync(filePath)
                .toString()
                .split("\n");
            return textByLineArray;
        } catch (e) {
            throw e;
        }
    }
}

export default FileUtil;
