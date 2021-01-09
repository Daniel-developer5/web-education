const 
    numArr: Array<number> = [1, 1, 2, 3],
    strArr: Array<string> = ['ds', 'kj']

const reverse = <T>(arr: T[]): T[] => {
    return arr.reverse()
}

reverse(numArr)
reverse(strArr)
reverse([1, '1'])