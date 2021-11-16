    function repeatStringNumTimes(str, num) {
        let result = "";
        for(let i = 1; i <= num; i++) {
            result += str
        }

        return result;
    }

repeatStringNumTimes("abc", 3);