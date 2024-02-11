// @ts-check

/**
 * Функция возвращает отсортированный массив в зависимости от заданных параметров (по возрастанию, по убыванию и без сортировки)
 * @param {string} sorting значение сортировки
 * @param {any[]} arr сам массив, который надо отсортировать
 * @param {string} field поля для сортировки
 * @returns {any[]}
 * Возвращаемое значение-массив, отсортированный по переданному полю объекта
 */

export const getSortedArr = (sorting: string, arr: any[], field: string): any[] => {
    switch (sorting) {
        case 'increase':
            return arr.sort((a, b) => a[field] - b[field]);
        case 'decrease':
            return arr.sort((a, b) => b[field] - a[field]);
        default:
            return arr;
    }
}