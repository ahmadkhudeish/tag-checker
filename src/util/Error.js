export default (message, exit) => {
    console.error(message);
    exit && process.exit(1);
};
