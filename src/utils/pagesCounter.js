const getPageCount = (totalPages) => {
    return Math.ceil(totalPages / 10)
}

export default getPageCount