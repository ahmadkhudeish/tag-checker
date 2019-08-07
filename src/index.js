import minimist from "minimist";
import error from "./util/Error";
import CheckTags from "./cmds/CheckTags";
import version from "./cmds/Version";
import help from "./cmds/Help";

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    let cmd = args._[0] || "help";

    if (args.CheckTags || args.c) {
        cmd = "CheckTags";
    }

    if (args.version || args.v) {
        cmd = "version";
    }

    if (args.help || args.h) {
        cmd = "help";
    }

    switch (cmd) {
        case "CheckTags":
            CheckTags(args);
            break;

        case "version":
            version(args);
            break;

        case "help":
            help(args);
            break;

        default:
            error(`"${cmd}" is not a valid command!`, true);
            break;
    }
};
