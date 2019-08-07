import ora from "ora";
import fileUtil from "../util/FileUtil";
import TagChecker from "../repositories/TagChecker";

export default async args => {
    const spinner = ora().start();

    try {
        spinner.stop();
        const inputFilePath = args._[1];
        let linesArray = await fileUtil.readFileByLine(inputFilePath);
        linesArray.forEach(line => {
            console.log(TagChecker.checkTags(line));
        });
    } catch (err) {
        spinner.stop();
        console.error(err);
    }
};
