const paginate = (followers) => {
    const itemPerPage = 9
    const pages = Math.ceil(followers.length/itemPerPage);

    const newFollwers = Array.from({length: pages}, (_, index) =>
    {
        const start = index* itemPerPage
        return followers.slice(start,start +itemPerPage)
    })
    return newFollwers;
    
}


export default paginate
