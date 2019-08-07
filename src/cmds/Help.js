const menus = {
    main: `
      TagChecker [command] <options>
  
      checkTags .............. check tags
      version ............ show package version
      help ............... show help menu for a command`,

    checkTags: `
      TagChecker checkTags <options>
  
      --inputFile, -i ..... the path to the html input file
      --outputFile, -o .... the path to where you want the output file to be saved`
};

export default args => {
    const subCmd = args._[0] === "help" ? args._[1] : args._[0];

    console.log(menus[subCmd] || menus.main);
};
