import FileUtil from "../src/util/FileUtil";

var inputFilePath = "src/data/input.txt";

describe("readFileByLine", () => {
    test("read file by line and return an array", async () => {
        let linesArray = await FileUtil.readFileByLine(inputFilePath);
        expect(linesArray.length).toBeGreaterThan(0);
    });
});
