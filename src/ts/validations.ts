const strTest = /\d/


const isAName = (name: string) : boolean => {
    return strTest.test(name);
}


export const validations = {
    isAName
}