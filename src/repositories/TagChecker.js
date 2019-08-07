class TagChecker {
    /**
     * @description get tag and return its name
     * @param tag
     * @return {*|string} tag name
     */
    static getTagName(tag) {
        try {
            return tag.charAt(tag.length - 2);
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description read line and extract valid tags
     * @param line
     * @return {*|<Array>} valid tags
     */
    static extractValidTags(line) {
        try {
            let validTags = line.match(/(<\/?[A-Z]+>)/g);
            return validTags;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description checks if the found and expected tags are valid opening and closing tags
     * @param foundTag
     * @param expectedTag
     * @return {*|<Array>} valid tags
     */
    static isValidPair(foundTag, expectedTag) {
        return foundTag == expectedTag ? true : false;
    }

    /**
     * @description checks if a given tag is an opening tag
     * @param tag
     * @return {*|Boolean} true or false
     */
    static isOpeningTag(tag) {
        try {
            let stringPattern = /<[A-Z]{1}>/g;
            return stringPattern.test(tag);
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description checks if a given tag is a closing tag
     * @param tag
     * @return {*|Boolean} true or false
     */
    static isClosingTag(tag) {
        return !this.isOpeningTag(tag);
    }

    /**
     * @description algorithm to check the validity of tags in a line
     * @param line line to check
     * @return {*|string} return message to print
     */
    static checkTags(line) {
        let validTags = this.extractValidTags(line);
        let tagIndex = 0;
        while (tagIndex < validTags.length - 1) {
            if (this.isClosingTag(validTags[tagIndex])) {
                return "expected # found " + validTags[tagIndex];
            }
            let currentTag = this.isOpeningTag(validTags[tagIndex]);
            let nextTag = this.isOpeningTag(validTags[tagIndex + 1]);
            if (currentTag && nextTag == false) {
                let found = this.getTagName(validTags[tagIndex]);
                let nextTag = this.getTagName(validTags[tagIndex + 1]);
                if (this.isValidPair(found, nextTag)) {
                    validTags.splice(tagIndex, 2);
                    if (tagIndex) {
                        tagIndex--;
                        continue;
                    }
                } else {
                    return `Expected </${found}> found </${nextTag}>`;
                }
            }
            tagIndex++;
        }

        if (validTags.length > 0) {
            let foundTag = validTags[validTags.length - 1];
            let expected = this.getTagName(foundTag);
            if (this.isOpeningTag(foundTag)) {
                return `Expected </${expected}> found #`;
            } else {
                return `Expected # found ${foundTag}`;
            }
        }
        return "Correctly tagged paragraph";
    }
}

export default TagChecker;
