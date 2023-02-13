import products from './redis/products.js'

const mongodb = {}
const postgres = {}
const redis = {
    products
}
const elasticSearch = {}

export default {
    mongodb,
    postgres,
    redis,
    elasticSearch
}