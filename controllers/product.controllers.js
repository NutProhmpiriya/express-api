import express from 'express'
import { uuid } from 'uuidv4'

const router = express.Router()

let products = []

router.get('/', (req, res)=> {
    try {
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ error: {message: error.message}})
    }
})

router.get('/:id', (req, res)=> {
    try {
        const foundProduct = products.find(product => product.id === req.params.id)
        if(!foundProduct) {
            return res.status(404).json({ error: {message: 'Product not found'}})
        }
        return res.status(200).json(foundProduct)
    } catch (error) {
        return res.status(500).json({ error: {message: error.message}})
    }
})

router.post('/', (req, res)=> {
    try {
        const newProduct = {
            id: uuid(),
            ...req.body
        }
        products.push(newProduct)
        return res.status(200).json({message: 'Product created'})
    } catch (error) {
        return res.status(500).json({ error: {message: error.message}})
    }
})

router.put('/:id', (req, res)=> {
    try {
        const foundProduct = products.find(product => product.id === req.params.id)
        if(!foundProduct) {
            return res.status(404).json({ error: {message: 'Product not found'}})
        }
        const updatedProduct = {
            ...foundProduct,
            ...req.body
        }
        products = products.map(product => product.id === req.params.id ? updatedProduct : product)
        return res.status(200).json(products[req.params.id])
    } catch (error) {
        return res.status(500).json({ error: {message: error.message}})
    }
})

router.delete('/:id', (req, res)=> {
    try {
        const foundProduct = products[req.params.id]
        if(!foundProduct) {
            return res.status(404).json({ error: {message: 'Product not found'}})
        }
        products = products.filter(product => product.id !== req.params.id)
        return res.status(200).json('Product deleted')
    } catch (error) {
        return res.status(500).json({ error: {message: error.message}})
    }
})

export default router