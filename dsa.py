arr = [1, 2, 3, 4, 5]
key = 5

def binarySearch(arr, key):
    start = 0
    end = len(arr) - 1
    mid = start + (end - start) // 2
    while start <= end:
        if key == arr[mid]:
            return mid
        if key < arr[mid]:
            end = mid - 1
        else:
            start = mid + 1
        mid = start + (end - start) // 2
    return -1


elementIndex = binarySearch(arr, key)
print(f'{key} is at index {elementIndex}')

        