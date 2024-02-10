export const getSortedArr = (sorting: string, arr: any[], field: string) => {
    switch (sorting) {
        case 'increase':
            return arr.sort((a, b) => a[field] - b[field]);
        case 'decrease':
            return arr.sort((a, b) => b[field] - a[field]);
        default:
            return arr;
    }
}