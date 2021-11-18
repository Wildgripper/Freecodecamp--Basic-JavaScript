// Truncate a string(first argument) if it is longer than the given maximum string length(second argument).
// Return the truncated string with a...ending.

function truncateString(str, num) {

    if(str.length > num) {
        // console.log(str.slice(0, num) + "...");
        return str.slice(0, num) + "...";
    }
    
    return str;
}

truncateString("Peter Piper picked a peck of pickled peppers", 11)