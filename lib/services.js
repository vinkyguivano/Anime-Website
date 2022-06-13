import { gql } from '@apollo/client'
import client from './apollo-client'


export const Anime = {
  getList: async (page = 1, perPage = 10) => {
    const query = gql`
      query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          media (type: ANIME){
            id
            title {
              english
              native
              romaji
            }
            coverImage {
              large
            }
            description
          }
        }
      }
    `
    const variables = { page, perPage }
    let data
    try {
      const res = await client.query({ query, variables })
      data = res.data.Page
    } catch (error) {
      console.log(error)
      data = null
    }

    return data
  },

  getOne: async (id) => {
    const query = gql`
      query ($id: Int) {
        Media(id: $id, type: ANIME) {
          id
          title {
            english
            native
            romaji
          }
          description
          genres
          coverImage{
            large
          }
          episodes
          averageScore
          startDate {
            year
            month
            day
          }
        }
      }
    `;

    const variables = { id }
    let data

    try {
      const res = await client.query({ query, variables })
      data = res.data.Media
    } catch (error) {
      console.log(error)
    }

    return data
  }
}

export const Collection = {
  getAll: () => {
    let collections = localStorage.getItem("collections")
    if (!collections) localStorage.setItem("collections", "[]")
    collections = JSON.parse(collections)
    if (!Array.isArray(collections)) return []
    return collections
  },
  getOne: (collectionName) => {
    let collections = localStorage.getItem("collections")
    if (!collections) localStorage.setItem("collections", "[]")
    collections = JSON.parse(collections)
    if (!Array.isArray(collections)) return []
    const index = collections.findIndex(c => {
      return c.name.toLowerCase() === collectionName.toLowerCase()
    })
    return {collection: collections[index], index}
  },
  addOne: function(collectionName) {
    let collections = localStorage.getItem("collections")
    if (!collections) localStorage.setItem("collections", "[]")
    collections = JSON.parse(collections)
    if (Array.isArray(collections)) {
      const isUnique = this.checkIsUnique(collectionName, collections)
      if(!isUnique) return { error: "name is exist in collection" }
      const collection = { name: collectionName, animes: [] }
      collections.push(collection)
      localStorage.setItem("collections", JSON.stringify(collections))
      return collection
    }
    return null
  },
  addOneAnime: (collectionName, anime) => {
    let collections = localStorage.getItem("collections")
    if (!collections) localStorage.setItem("collections", "[]")
    collections = JSON.parse(collections)
    const collection = collections.find(c => {
      return c.name.toLowerCase() === collectionName.toLowerCase()
    })
    collection.animes.push(anime)
    localStorage.setItem("collections", JSON.stringify(collections))
    return collection
  },
  updateOne: function(collectionIndex, updatedName){
    let collections = localStorage.getItem("collections")
    if (!collections) localStorage.setItem("collections", "[]")
    collections = JSON.parse(collections)
    if(!collections[collectionIndex]) return false
    const isUnique = this.checkIsUnique(updatedName, collections)
    if(!isUnique) return { error: "name is exist in collection" }
    collections[collectionIndex].name = updatedName
    localStorage.setItem("collections", JSON.stringify(collections))
    return true
  },
  deleteOneAnime: (collectionName, anime) => {

  },
  deleteOne: (collectionName) => {
    let collections = localStorage.getItem("collections")
    if (!collections) localStorage.setItem("collections", "[]")
    collections = JSON.parse(collections)
    const indexToBeDeleted = collections.findIndex(c => {
      return c.name.toLowerCase() === collectionName.toLowerCase()
    })

    if(indexToBeDeleted == -1) return false
    collections.splice(indexToBeDeleted, 1)
    localStorage.setItem("collections", JSON.stringify(collections))
    return true
  },
  checkIsUnique: (newName, collections) => {
    const isExist = collections.find(c => c.name.toLowerCase() === newName.toLowerCase())
    return isExist ? false : true
  }
}
