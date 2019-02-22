const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

const blogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]

describe('total likes', () => {
    totalLikes = listHelper.totalLikes

    test('of empty list is zero', () => {
        expect(totalLikes([])).toBe(0)
    })

    test('when list has only one blog equals the likes of that', () => {
        const oneBlogList = [blogs[0]]
        expect(totalLikes(oneBlogList)).toBe(7)
    })

    test('of a bigger list is calculated right', () => {
        expect(totalLikes(blogs)).toBe(36)
    })

})

describe('favorite blog', () => {
    favoriteBlog = listHelper.favoriteBlog

    test('when list has only one blog is that blog', () => {
        const oneBlogList = [blogs[0]]
        expect(favoriteBlog(oneBlogList)).toEqual({
            title: "React patterns",
            author: "Michael Chan",
            likes: 7
        })
    })

    test('of a bigger list is correct', () => {
        expect(favoriteBlog(blogs)).toEqual({
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
        })
    })
})


describe('most blogs', () => {
    const mostBlogs = listHelper.mostBlogs

    test('has written the only author when there is only one blog in the list', () => {
        const oneBlogList = [blogs[0]]
        expect(mostBlogs(oneBlogList)).toEqual({
            author: "Michael Chan", 
            blogs: 1
        })
    })

    test('returns the correct number and author when list contains multiple blogs', () => {
        expect(mostBlogs(blogs)).toEqual({
            author: "Robert C. Martin", 
            blogs: 3
        })
    })
})

describe('most likes', () => {
    const mostLikes = listHelper.mostLikes

    test('returns the only author in a list of one blog', () => {
        const singleList = [blogs[0]]
        expect(mostLikes(singleList)).toEqual({
            author: "Michael Chan", 
            likes: 7
        })
    })

    test('returns the correct information with a list of multiple blogs', () => {
        expect(mostLikes(blogs)).toEqual({
            author: "Edsger W. Dijkstra", 
            likes: 17
        })
    })
})